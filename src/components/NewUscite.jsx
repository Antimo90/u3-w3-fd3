import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import SingleSong from "./SingleSong";

const NewUscite = () => {
  const [songs, setSongs] = useState([]);

  const getSongs = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=maxpezzali"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore : ${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        setSongs(data.data);
      })
      .catch((err) => {
        console.log("ERRORE DURANTE LA FETCH:", err);
      });
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12} xl={12}>
            <h3 className="text-white mt-5 mb-3">Nuove uscite</h3>
          </Col>
          <Col>
            <div className="d-flex flex-nowrap overflow-auto gap-3 mb-3">
              {songs.slice(0, 6).map((song) => (
                <SingleSong key={song.id} song={song} />
              ))}
            </div>

            <div className="d-flex flex-nowrap overflow-auto gap-3">
              {songs.slice(5, 11).map((song) => (
                <SingleSong key={song.id} song={song} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewUscite;
