import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./stylesheets/Comic.css";
import Navigation from "./Navigation";

const Comic = (props) => {
  const history = useHistory();
  const [comic, setComic] = useState(null);
  const [max, setMax] = useState(0);

  const fetchCurrentComic = async () => {
    const url = `/api`;
    const res = await (await fetch(url)).json();

    if (res) {
      return res;
    }
  };

  const fetchComic = async (num) => {
    const url = `/api/${num}`;
    const res = await (await fetch(url)).json();

    if (res) {
      setComic(res);
      history.push(`/${res.num}`);
    }
  };

  useEffect(() => {
    const setup = async () => {
      const json = await fetchCurrentComic();
      setMax(json.num);
      if (props.match.params.num < json.num) {
        fetchComic(props.match.params.num);
      } else {
        setComic(json);
      }
    };
    setup();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    comic && (
      <Fragment>
        <div className="comic">
          <h1>{comic.safe_title}</h1>
          <div className="info">
            <div>#{comic.num}</div>
            <div className="flex-container">
              <div>
                <i className="far fa-eye"></i> {comic.viewCount}
              </div>
              <div>
                {comic.year}-{comic.month}-{comic.day}
              </div>
            </div>
            <img src={comic.img} alt="comic" />
          </div>
          <p className="transcript">{`${comic.transcript}`}</p>
        </div>
        <Navigation fetchComic={fetchComic} maxNum={max} currNum={comic.num} />
      </Fragment>
    )
  );
};

export default Comic;
