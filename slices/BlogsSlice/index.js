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
        </div>
        <div className="images">
          {slice.items
            ? slice.items.map((item, index) => {
                return (
                  <div>
                    <img
                      key={index}
                      src={item.image.url}
                      className="gallery-image"
                    />
                    <RichText render={item.title} />
                    <p>{item.excerpt[0].text}</p>
                    {item.date}
                  </div>
                );
              })
            : null}
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
