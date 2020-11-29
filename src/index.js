import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.animals()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentText="This blog is great!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.animals()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          commentText="I hate this blog!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.animals()}
          author="Jane"
          timeAgo="Yesterday at 3:30PM"
          commentText="Your both terrible!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
