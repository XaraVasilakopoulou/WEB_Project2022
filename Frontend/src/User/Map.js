import React, {useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from "leaflet";
import {Col, Input, Space, Switch, List, Card, Modal, Button} from 'antd'
import {CheckCircleTwoTone, LikeTwoTone,DislikeTwoTone} from '@ant-design/icons'
import './Map.css'
import shopsmock from './mockdataShops.json'
import icon from './user.png'
var myIcon = L.icon({
  iconUrl: icon,
  iconSize: [35, 40]
});

const { Search } = Input;
/*fetch("http://localhost:9000/shops",{
    method: 'GET'
  }).then((response) => response.json(response))
  .then((data) => {
    setShops(data)
    
  }
  )
  .catch((error) => {
    console.error('Error:', error);
  });*/
export const Map = (props)=> {

  const [shops, setShops] = useState(shopsmock);
  const [shopSearch, setShopSearch] = useState('');
  const [modalTitle, setModalTitle] = useState(null)
  const [modalData, setModalData] = useState(null)
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

const showModal = (props) => {
  setIsModalOpen(true);
  setModalTitle(props.name)
  setModalData(props)
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
        map.flyTo(e.latlng, map.getZoom());
      }
        else{
          setPosition([props.val.coordinates.y,props.val.coordinates.x]); 
          
        }
      });
    }, [map]);

    

    return (position === null) ? null : (props.user)?(
      <Marker 
        icon={myIcon}
        position={position}/>
    ):(<>
      <Marker 
        position={position} 
        eventHandlers={{
          click: (e) => {
            showModal(props.val)
          }}}/>
          </>
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
          onChange={(val)=>{setShopSearch(val.target.value); console.log(shops)}}
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
      <LocationMarker user={true} i={null} val={null}/>
      {shops&&(shops.map((val,index)=><>{(val.name.includes(shopSearch))?<LocationMarker user={false} i={index} val={val}/>:null}</>))}
      
    </MapContainer>
      <Modal
        title={modalTitle}
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
                      {!(props.user)?<Button type='danger' size='small'>Delete Product</Button>:<></>}
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