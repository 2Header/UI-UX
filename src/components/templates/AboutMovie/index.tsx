import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/AboutMovie/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscHeart, VscHeartFilled, VscStarFull, VscThumbsupFilled, VscVerifiedFilled } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentItem from "./CommentItem/CommentItem";
import {CommentProps} from "./CommentItem/CommentItem";
import {useState, useEffect} from 'react';
import React from 'react';



import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiSolidDownload, BiSolidTime, BiTimeFive } from "react-icons/bi";
const Details = () => {
  
  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }

  const[comments, setComments] = useState<CommentProps[]> (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
  });

  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, pageKey]);

  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  
  
  function commentsList(){
    
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const newComment: CommentProps = {
        id: comments.length + 1,
        userName: userName,
        commentText: commentText
      };
      setComments([...comments, newComment]);
      setUserName('');
      setCommentText('');

      
    }


    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentItem
        key = {comment.id}
        id = {comment.id}
        userName = {comment.userName}
        commentText = {comment.commentText}
        comments={comments}
        setComments={setComments}
      />
    ));


    return (
      <Style.CommentArea> 
        {}
        <form onSubmit={addComment}>
          <Style.YourNameLabel>Name:</Style.YourNameLabel>
          <Style.InputUser type="text" value={userName} onChange={handleUserNameChange} />
          <Style.CommentTextLabel>Comment:</Style.CommentTextLabel>
          <Style.TextArea value={commentText} onChange={(e) => handleCommentTextChange(e)}/>
          <Style.ButtonCustom type="submit">Add comment</Style.ButtonCustom>
        </form>

        {}
        {commentItems}
      </Style.CommentArea>
    );
  }

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Back to choose ↩</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Buttons>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>
            <Style.DescriptionContent>
              <Style.DescriptionFull>
                {filmRetrieve?.data.movie.description_full ? filmRetrieve.data.movie.description_full : "Descriptions will appear soon 👀"}
              </Style.DescriptionFull>

              <Style.Statistic>
                <StatisticItem
                  icon={<VscVerifiedFilled />}
                  text={filmRetrieve?.data.movie.rating}
                ></StatisticItem>
                <StatisticItem
                  icon={<VscHeartFilled />}
                  text={filmRetrieve?.data.movie.like_count}
                ></StatisticItem>
                <StatisticItem
                  icon={<BiSolidTime />}
                  text={filmRetrieve?.data.movie.runtime}
                ></StatisticItem>
                <StatisticItem
                  icon={<BiSolidDownload />}
                  text={filmRetrieve?.data.movie.download_count}
                ></StatisticItem>
              </Style.Statistic>
            </Style.DescriptionContent>

          </Style.Description>
                  
        
        </Style.Data>
        <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>
        <Style.Torrents>{torrentsList}</Style.Torrents>
        {comments.length > 0 ?  (
           <React.Fragment>
              <Style.CommentsTitle>Take part in the discussion:</Style.CommentsTitle>
            </React.Fragment>
          ) : (
            <Style.CommentsTitle>Be the first who make a comment:</Style.CommentsTitle>
            )}
          <Style.CommentItem>{commentsList()}</Style.CommentItem>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
