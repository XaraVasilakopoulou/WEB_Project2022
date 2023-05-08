import React, {useState} from 'react'
import { Table } from 'antd';

export const Leaderboard = () =>{
    const col = [
         {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
          },
          {
            title: 'Score of Month',
            dataIndex: 'score',
            key: 'score',
          },
          {
            title: 'Last Score',
            dataIndex: 'lScore',
            key: 'lScore',
          },
          {
            title: 'Overall Score',
            dataIndex: 'allScore',
            key: 'allScore',
          },
    ]

    return(
        <>
            <Table
            pagination={{pageSize: '10'}}
            columns={col}
            dataSource={null} 
            />
        </>
    );
}