// Functional Component Example
import React from "react";

const blogContentType = () => {
  return (
    <div>
      <p>Hello Blog page</p>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default blogContentType;