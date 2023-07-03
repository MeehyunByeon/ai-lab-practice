import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Table, Pagination, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { getNotice, getNoticeDetail } from "../../store/actions/notice_actions";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./project.module.css";
import { notice_columns } from "../../assets/string/notice_columns";

const Project = () => {
  // 페이지 이동
  const navigate = useNavigate();

  // 리덕스
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Notice.notice);
  const [noticeList, setNoticeDate] = useState([]);

  // 데이터 불러오기
  useEffect(() => {
    dispatch(getNotice());
  }, []);

  useEffect(() => {
    if (data !== undefined) getNoticeList();
  }, [data]);

  const getNoticeList = () => {
    let result = [];
    for (let i of data) {
      const date = i.createdAt.substring(0, 10);
      let temp = i;
      temp.createdAt = date;
      result.push(temp);
    }
    setNoticeDate(result);
  };

  // 페이지네이션
  // const [current, setCurrent] = useState(0);
  // const onChange = (page) => {
  //   console.log(page);
  //   setCurrent(page);
  // };

  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="Project" />
      <div className={styles.table_container}>
        {sessionStorage.getItem("master") == 1 ? (
          <div className={styles.createBtn}>
            <Button
              color="#868e96"
              icon={<PlusOutlined />}
              onClick={() =>
                navigate("/notice/create", { state: { type: "create" } })
              }
            />
          </div>
        ) : null}
        {/* <Divider>notice</Divider> */}
        <Table
          columns={notice_columns}
          dataSource={noticeList}
          size="large"
          rowClassName={styles.table_row}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate("/notice/detail", { state: record.noticeid });
              }, // click row
              onDoubleClick: (event) => {}, // double click row
              onContextMenu: (event) => {}, // right button click row
              onMouseEnter: (event) => {}, // mouse enter row
              onMouseLeave: (event) => {}, // mouse leave row
            };
          }}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default Project;