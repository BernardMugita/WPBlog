import React from 'react'
import '../featured/Featured.scss'
import { MdOutlineMoreVert, MdOutlineArrowUpward, MdOutlineArrowDownward } from 'react-icons/md'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const Featured = () => {
  return (
    <div className='Featured'>
      <div className="top">
        <h1>Readers</h1>
        <MdOutlineMoreVert />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <p className="title">Total blog readers today</p>
          <p className="readers">21</p>
          <p className="desc">
            Processing.
            The latest readers of your blog may not reflect.
          </p>
          <div className="targets">
            <div className="items">
              <div className="item positive">
                <h1>Target</h1>
                <div className="target-stats">
                  <MdOutlineArrowUpward />
                <p>130k</p>
                </div>
              </div>
              <div className="item negative">
                <h1>Target</h1>
                <div className="target-stats">
                  <MdOutlineArrowDownward />
                <p>24k</p>
                </div>
              </div>
              <div className="item negative">
                <h1>Target</h1>
                <div className="target-stats">
                  <MdOutlineArrowDownward />
                  <p>13k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured