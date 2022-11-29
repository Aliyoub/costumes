import React from "react";
import UseFetch from "./hooks/UseFetch";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import App from "./App";
import Product from "./Product/Product";
import Carousel from "./Carousel";



export default function Content() {
  const [amzData, loading, error] = UseFetch({
    method: "get",
    url: "https://aliyoub.github.io/costumes/amzData.json",
    headers: {
      Authorization: "Bearer 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",
    },
  });

  const Products = useSelector(state => state.product)
  console.log('firstProductsProductsProducts', Products)

  // const myClasses = classNames({
  //   [contentStyle.content, "col-sm-3 wow bounceInDown center"]
  // });

  // const itemClasses = {
  //   itemContainerClass: "col-sm-3 wow bounceInDown center",
  //   itemShadowClass: "shadow-sm p-3 m-2 bg-white rounded"
  // };

  const itemContainerClass = "col-sm-3 wow bounceInDown center";
  const itemContainerClass2 = "shadow-sm p-3 m-5 bg-white rounded";

  useEffect(() => {});
  loading && <div>Loading...</div>;
  error && <div>Oops, une erreur est survenue :(</div>;

  let amzDataConst;
  let myData;
  amzData ? (amzDataConst = Object.values(amzData)) : (amzDataConst = []);

  // console.log('amzData', amzData)
  return (
    <div style={{ marginBottom: 20 }} className="container text-center">
      <div
        style={{ backgroundColor: "#EEE" }}
        className="container text-center"
      >
        <Carousel />
      </div>
      <div className="row">
        {amzDataConst.map((item, i) => {
          // console.log('item', item)
          return (
            <div
              // className="col-sm-3 wow bounceInDown center"
              // className="col-sm-3 center"
              // data-wow-delay="0.5s"
              key={i}
              className={`${itemContainerClass} ${itemContainerClass2}`}
              // className="col-sm-3 center"
              // style={contentCss}
            >
              {/* <NavLink to={`https://www.amazon.fr/${item.url}`}> */}
              <img height={200} src={item.image} />

              <div>{item.title.substring(0, 35)}...</div>
              <div>{item.price}</div>
              <div>
                <Link to={`/costumes/product/${i}`}>ok</Link>
                {/* <BrowserRouter>
                  <Routes>
                    <Route exact path="/product" element={<Product />} />
                  </Routes>
                </BrowserRouter> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    //   <div className="container text-center">
    //     <div className="jumbotron bg-sky">
    //     <h1>ReactJs</h1>
    //     <p>Animmations with WOWjs</p>
    //   </div>
    //     <div className="row">
    //       <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
    //       <p className="circle bg-yellow">very ES  </p>
    //       </div>
    //       <div className="col-sm-4">
    //         <img alt="" className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />
    //       </div>
    //       <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
    //       <p className="circle bg-yellow">very ES  </p>
    //       </div>
    //       <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
    //       <p class="circle bg-green">3 KiB only  </p>
    //       </div>
    //       <div className="col-sm-4">
    //         <img alt="" className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />
    //       </div>
    //       <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
    //       <p class="circle bg-green">3 KiB only  </p>
    //       </div>
    //       <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
    //       <p class="circle bg-red">so impress</p>
    //       </div>
    //       <div className="col-sm-4">
    //         <img alt="" className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />
    //       </div>
    //       <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
    //       <p class="circle bg-red">so impress</p>
    //       </div>
    //     </div>
    // </div>
  );
}
