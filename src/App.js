import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import {
  Router,
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ScrollToTop from "./scrollTop";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import Album from "./pages/Album/Album";
import ForgotEmail from "./pages/ForgotEmail/ForgotEmail";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Intro from "./pages/Intro/Intro";
import Members from "./pages/Intro/Members";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Community from "./pages/Community/Community";
import Notice from "./pages/Notice/Notice";
import NoticeDetail from "./pages/NoticeDetail/NoticeDetail";
import NoticeForm from "./pages/NoticeForm/NoticeForm";
import Project from "./pages/AislProject/Project";
import ProjectDetail from "./pages/AislProjectDetail/ProjectDetail";
import ProjectForm from "./pages/AislProjectForm/ProjectForm";
import Master from "./pages/Master/Master";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route exact path="/*" element={<Main />} />
          <Route exact path="/album" element={<Album />} />
          <Route exact path="/forgotemail" element={<ForgotEmail />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/intro" element={<Intro />} />
          <Route exact path="/intro/members" element={<Members />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/join" element={<Join />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/notice" element={<Notice />} />
          <Route exact path="/notice/detail" element={<NoticeDetail />} />
          <Route exact path="/notice/create" element={<NoticeForm />} />
          <Route exact path="/notice/update" element={<NoticeForm />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/project/detail" element={<ProjectDetail />} />
          <Route exact path="/project/create" element={<ProjectForm />} />
          <Route exact path="/project/update" element={<ProjectForm />} />
          <Route exact path="/master" element={<Master />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
