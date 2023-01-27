import React, {useState, useEffect, } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from "leaflet";
import {Col, Input, Space, Switch, List, Card, Modal, Button} from 'antd'
import {CheckCircleTwoTone, LikeTwoTone,DislikeTwoTone} from '@ant-design/icons'
import './Map.css'

const { Search } = Input;

export const Map = ()=> {

  const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  }
];
const [isModalOpen, setIsModalOpen] = useState(false);

const showModal = () => {
  setIsModalOpen(true);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

  function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        if(props.user){
        setPosition(e.latlng);
        console.log(e.latlng)
        map.flyTo(e.latlng, map.getZoom());}
        else{
          setPosition([38.24664,21.734574]);
        }
      });
    }, [map]);

    return (position === null) ? null : (props.user)?(
      <Marker 
        position={position}/>
    ):(
      <Marker 
        position={position} 
        eventHandlers={{
          click: (e) => {
            showModal()
          }}}/>
    )


  }
return (
  <>
  <Space size='small'>
    <div >
      <Space direction='vertical' size='large'>
        <h2>Search Bar</h2>
      <Search 
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          
        />
        <Switch checkedChildren="Shops" unCheckedChildren="Products" defaultChecked />
        </Space>
    </div>
    <Col offset={6}>
    <MapContainer
      style={{height:'650px', width:'1000px'}} center={[38.24, 21.73]} zoom={13} scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker user={true}/>
      <LocationMarker user={false}/>
      
    </MapContainer>
      <Modal
        title="Shop Name Example"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        width={1100}
      >
          <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={data}
              pagination={{pageSize: '3'}}
              renderItem={(item) => (
                <List.Item >
                  <Card title={item.title}>
                    <>
                      <p>
                      Cost of product: {3} <br/>
                      απόθεμα: ναι/όχι <br/>
                      ημερομηνία καταχώρησης:<br/>
                      <LikeTwoTone />5 <DislikeTwoTone twoToneColor='red'/>0<br/>
                      </p>
                      <p align='right'>
                      {(true)?<CheckCircleTwoTone twoToneColor='green'/>:null}
                      </p>
                    </>
                    </Card>
                </List.Item>
              )}
            />
          {(true)?
          <Space>
            <Button type='primary'>Οffer Εvaluation</Button>
            <Button type='primary'>Add Offer</Button>
          </Space>:null}
          
      </Modal>
    </Col>
  </Space>
</>
);
}