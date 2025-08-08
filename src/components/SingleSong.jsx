const SingleSong = ({ song }) => {
  return (
    <div style={{ minWidth: "250px", width: "250px" }}>
      <img
        src={song.album.cover_medium}
        alt={song.title}
        className="img-fluid rounded-3"
      />
      <p className="text-white mb-0">{song.title}</p>
      <p className="text-white opacity-50 mb-0">{song.artist.name}</p>
    </div>
  );
};

export default SingleSong;
