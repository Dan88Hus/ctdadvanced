import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';

function Header() {



    return (
      <>
      <div className="fixed-top row-fluid navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="col text-left">
            CTD-The Star Wars API by: Huseyin Ozdogan
        </div>
        <div className="col text-right">
          <Link to={"/films"}>Star Wars Movies</Link>
          <span className="ml-3">
            <Link to={"/"}>Charecters</Link>
          </span>
        </div>

      </div>

      </>
    );
  }


export default Header