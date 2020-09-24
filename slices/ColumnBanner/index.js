import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  return (
    <div className="column-banner">
      <div className="banner-content">
        <div>
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : null}
          {slice.primary.content ? (
            <RichText render={slice.primary.content} />
          ) : null}
          {slice.primary.image ? (
            <img src={slice.primary.image.url} className="banner-image" />
          ) : null}
        </div>
      </div>
      <style>{`

 

  
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
