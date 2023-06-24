import React, {useState} from 'react'
import { Table } from 'antd';

export const Leaderboard = () =>{

  const [tableData, setTableData] = useState(null)


  fetch("http://localhost:9000/Leadboard",{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json(response))
  .then((data) => {
    setTableData(data)
  }
  )
  .catch((error) => {
  })

    const col = [
         {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
          },
          {
            title: 'Score of Month',
            dataIndex: 'score_month',
            key: 'score_month',
          },
          {
            title: 'Last Score',
            dataIndex: 'token_month',
            key: 'token_month',
          },
          {
            title: 'Overall Score',
            dataIndex: 'score_total',
            key: 'score_total',
          },
    ]

    return(
        <>
            {tableData&&
            <Table
            pagination={{pageSize: '10'}}
            columns={col}
            dataSource={tableData} 
            />
            }
        </>
    );
}