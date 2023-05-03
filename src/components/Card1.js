import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

let api_key="&api_key=b184f37be3376e1de47a400c8fd69c1a";
let base_url="https://api.themoviedb.org/3";
let url = base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+api_key;
let url1= base_url+"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc"+api_key;
let url2=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+api_key;

const Card1 = () => {
    const [kids, setKids] = useState([]);
    const [url2_set, setUrl2] = useState(url2)
    const [filem, setFilem] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [datamovie, setDatamovie] = useState([])
  const [url1_set, setUrl1] = useState(url1)

  useEffect(() => {
    fetch(url2_set).then(res=>res.json()).then(data=>{
     
     setKids(data.results);
    })
   }, [url2_set]);

  useEffect(() => {
   fetch(url_set).then(res=>res.json()).then(data=>{
    
    setFilem(data.results);
   })
  }, [url_set]);

  useEffect(() => {
    fetch(url1_set).then(res=>res.json()).then(data=>{
     console.log(data.results)
     setDatamovie(data.results);
    })
   }, [url1_set])
  

  
  return (
   <>
   {
    kids.map((el,i)=><Card4 movie={el} key={i}/>)
   }
   {
    datamovie.map((el,i)=><Card3 movie={el} key={i}/>)
   }
   {
    filem.map((el,i)=><Card2 filem={el} key={i}/>)
   }
   </>
   
  )
}

export default Card1