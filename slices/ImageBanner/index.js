import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  return (
    <div className="image-banner">
      <div className="banner-image">
        {slice.primary.image ? <img src={slice.primary.image.url} /> : null}
      </div>
      <div className="right-banner">
        <div>
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : null}
          {slice.primary.content ? (
            <RichText render={slice.primary.content} />
          ) : null}
          {slice.items ? <button>{slice.items[0].button_label}</button> : null}
        </div>
      </div>
      <style>{`

      .image-banner{
        padding:50px 100px;
        display:flex;
        min-width:1100px;

      }
      .banner-image{
        width:80%;
        height:500px;
      }

      .banner-image img{
        width:100%;
        height:500px;
      }

      .right-banner{
        background-color:#f8f9fa;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0 50px;
        box-sizing:border-box;
      }

      button{
        display:block;
        background-color:black;
        outline:none;
        width:150px;
        height:50px;
        font-size:20px;
        border:none;
        cursor:pointer;
        color:white;
        margin-top:30px;
      }
      `}</style>
    </div>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
