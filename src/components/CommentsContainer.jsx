import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Dave",
    text: "Exactly! Totally agree 👌",
    replies: [],
  },
  {
    name: "Alice",
    text: "This is my first post!",
    replies: [
      {
        name: "Bob",
        text: "Nice one Alice 🚀",
        replies: [],
      },
      {
        name: "Charlie",
        text: "I agree, well said!",
        replies: [
          {
            name: "Dave",
            text: "Exactly! Totally agree 👌",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Eve",
    text: "Hello everyone 👋",
    replies: [],
  },
  {
    name: "Bob",
    text: "Nice one Alice 🚀",
    replies: [],
  },
  {
    name: "Tom",
    text: "Nice one Alice 🚀",
    replies: [],
  },
];

const CommentsContainer = () => {
  return <div className="m-4 p-2">
    <div className="text-2xl font-bold">Comments: </div>
    <CommentList data={commentData}/>
  </div>;
};

export default CommentsContainer;
