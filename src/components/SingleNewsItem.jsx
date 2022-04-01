import React from "react";
import Like from "./Like";

function SingleNewsItem({ title, id }) {
  return (
    <div>
      {title}
      <Like id={id} />
    </div>
  );
}

export default SingleNewsItem;
