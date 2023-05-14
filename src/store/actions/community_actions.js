import {
  GET_COMMUNITY,
  CREATE_PLAN,
  UPDATE_PLAN,
  DELETE_PLAN,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE,
} from "../types";

import axios from "axios";

// 커뮤니티 가져오기
export function getCommunity() {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_GET_COMMUNITY,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("커뮤니티 에러", err);
      return false;
    });

  return {
    type: GET_COMMUNITY,
    payload: request,
  };
}

// 일정 생성
export function createPlan(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_CREATE_PLAN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      date: data.date,
      contents: data.contents,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("일정 생성 에러", err);
      return false;
    });

  return {
    type: CREATE_PLAN,
    payload: request,
  };
}

// 일정 수정
export function updatePlan(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_UPDATE_PLAN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      planid: data.planid,
      date: data.date,
      contents: data.contents,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("일정 수정 에러", err);
      return false;
    });

  return {
    type: UPDATE_PLAN,
    payload: request,
  };
}

// 일정 삭제
export function deleteNotice(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_DELETE_PLAN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      id: data.planid,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("일정 삭제 에러", err);
      return false;
    });

  return {
    type: DELETE_PLAN,
    payload: request,
  };
}

// 게시글 생성
export function createPost(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_CREATE_POST,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      contents: data.contents,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("게시글 생성 에러", err);
      return false;
    });

  return {
    type: CREATE_POST,
    payload: request,
  };
}

// 게시글 수정
export function updatePost(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_UPDATE_POST,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      postid: data.postid,
      contents: data.contents,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("게시글 수정 에러", err);
      return false;
    });

  return {
    type: UPDATE_POST,
    payload: request,
  };
}

// 게시글 삭제
export function deletePost(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_DELETE_POST,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      postid: data.postid,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("게시글 삭제 에러", err);
      return false;
    });

  return {
    type: DELETE_POST,
    payload: request,
  };
}

// 게시글 공감
export function like(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_LIKE,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      postid: data.postid,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("게시글 공감 에러", err);
      return false;
    });

  return {
    type: LIKE,
    payload: request,
  };
}
