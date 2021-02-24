import React from "react";

const Issue = props => {
  const url = props.value.html_url;

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  return (
    <div className="list-group-item list-group-item-action font-weight-bolder">
      <div style={{ color: "#272727" }}>
        <a href={url}>
          <h5 style={{ display: "inline-block" }}>{props.value.title}</h5>
        </a>

        {props.value.labels.map((item,index) => {
          return (
            <span key={index}
              style={{ backgroundColor: "#" + item.color }}
              class="badge badge-pill m-1 p-2"
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <p>
        <span>#{props.value.number} </span>
        <span> opened {timeSince(new Date(props.value.updated_at))}</span>
        <span> by {props.value.user.login}</span>
      </p>
    </div>
  );
};

export default Issue;
