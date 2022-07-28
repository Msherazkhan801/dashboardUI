import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LoadingProgress from 'react-js-loading-progress-bar';
import "./Product.css";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  // console.log(product,"<==");
  let filteredVal =
    product &&
    product.length > 0 &&
    product
      .sort((a, b) => {
        if (a.fullName < b.fullName) {
          return -1;
        }
      })
      .filter((item, i) => {
        return (
          (item && item.title && item.title.toLowerCase().includes(search)) ||
          (item &&
            item.category &&
            item.category.toLowerCase().includes(search))
        );
      });
  return (
    <div className="container">
      <div style={{ maxWidth: "40%", display: "flex" }} className="searchs">
        <input
          placeholder="   search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
        <SearchIcon
          style={{
            marginLeft: "26%",
            position: "absolute",
            marginTop: "12px",
            fontSize: "30px",
          }}
        />
      </div>
      <ul className="card-list">
      
         
       
       {!filteredVal ?
        <LoadingProgress
        useSpinner
        active={true}
        total={isloading}
        current={filteredVal}
        style={{margin:"auto",width:"90px",height:"60px"}}
      />
         : filteredVal.length > 0 &&
          filteredVal.map((item) => {
            return (
              <li className="card" key={item.id}>
                <Link
                  className="card-image"
                  to={`${item.id}`}
                  target="_blank"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-image-full=""
                >
                  <img src={item.image} alt="Psychopomp" />
                </Link>
                <Link
                  className="card-description"
                  to="https://michellezauner.bandcamp.com/album/psychopomp-2"
                  target="_blank"
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p> <br></br>
                  <p>
                    <b>$</b>
                    {item.price} {""}{" "}
                    <b style={{ marginLeft: "20px" }}> Rating</b>
                    {item.rating.rate} <br></br> <b>Category:</b>
                    {item.category}{" "}
                  </p>
                </Link>
              </li>
            );
          })}
          ;
          
      </ul>
    </div>
       
  );
};

export default Product;
