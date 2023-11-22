import React from 'react';
import img from '../img/1.png';

export default function Footer () {
    return (
      <>
            <div className="container-fluid" style={{backgroundColor: 'grey'}}>
                <div className="row">
                    <img src={img} alt="" style={{ width: '150px', height: '100px'}} />
                    <h1>All copy rights are reserved by Sukkur IBA University</h1>
             </div>
        </div>
        </>
    );
}