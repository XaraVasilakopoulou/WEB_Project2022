import React, {useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from "leaflet";
import {Col, Input, Space, Switch, List, Card, Modal, Button} from 'antd'
import {CheckCircleTwoTone, LikeTwoTone,DislikeTwoTone} from '@ant-design/icons'
import './Map.css'
import icon from './user.png'
import moment from 'moment'
import { Evaluation } from './Evaluation';

var myIcon = L.icon({
  iconUrl: icon,
  iconSize: [35, 40]
});

const { Search } = Input;

export const Map = (props)=> {

  const [shops, setShops] = useState(null);
  const [shopSearch, setShopSearch] = useState('');
  const [modalTitle, setModalTitle] = useState(null)
  const [products, setProducts] = useState(null)
  const [modalData, setModalData] = useState(null)

  if(shops === null){
    fetch("http://localhost:9000/shops",{
    method: 'GET'
  }).then((response) => response.json(response))
  .then((data) => {
    setShops(data)
    
  }
  )
  .catch((error) => {
    console.error('Error:', error);
  });

  fetch("http://localhost:9000/products",{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json(response))
  .then((data) => {
    setProducts(data)
  }
  )
  .catch((error) => {
  })
  }
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
  setModalData(products.filter(products => products.name_supermarket === props.name))
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
              dataSource={modalData}
              pagination={{pageSize: '3'}}
              renderItem={(item) => (
                <List.Item >
                  <Card title={item.name_product}>
                    <>
                      <p>
                      Cost of product: {item.price} <br/>
                      απόθεμα: {(item.stock===1)?<>ναι</>:<>όχι</>} <br/>
                      ημερομηνία καταχώρησης:{moment(item.date).utc().format('YYYY-MM-DD')}<br/>
                      <LikeTwoTone />{item.likes} <DislikeTwoTone twoToneColor='red'/>{item.dislikes}<br/>
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
            <Button type='primary' onClick={()=>{}}>Οffer Εvaluation</Button>
            <Button type='primary' onClick={()=>{window.location.replace('http://localhost:3000/submit-offer');}}>Add Offer</Button>
          </Space>:null}
          
      </Modal>
    </Col>
  </Space>
</>
);
}