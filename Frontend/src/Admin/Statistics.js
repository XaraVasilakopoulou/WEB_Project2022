import React, {useState, useEffect} from 'react'
import { Line } from '@ant-design/plots';
import { DatePicker, Space } from 'antd';

export const Statistics = () =>{

    //Line diagram
    const [data, setData] = useState([]);

        useEffect(() => {
            asyncFetch();
        }, []);

        const asyncFetch = () => {
            fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
        };
        const config = {
            data,
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            xAxis: {
                type: 'timeCat',
            tickCount: 12,
            },
        };

    return(
        <>
        <Space size='large' direction='vertical'>
            <DatePicker onChange={null} picker="month" />
            <h1>Offers Daily Diagram</h1>
            </Space>
           <Line {...config} />
        </>
    );
}