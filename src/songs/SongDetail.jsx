import React, { useState, useEffect } from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";
const SongDetail = ({search,lyric,bio}) => {
  return (
    <div>
      {   lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete '<em>${search.artist}</em>'`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default SongDetail;
