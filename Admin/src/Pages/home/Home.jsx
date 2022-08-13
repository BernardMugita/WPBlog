import React from 'react'
import '../home/Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Navbar from '../../Components/Navbar/Navbar'
import Table from '../../Components/Table/Table'


const Home = ({ title }) => {
  return (
    <div className='Home'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts-container">
          <div className="featured">
            <Featured />
          </div>
            <Chart title="Activity for the Last 6 Months" />
        </div>
        <div className="listContainer">
            <Table />
        </div>
      </div>
    </div>
  )
}

export default Home;