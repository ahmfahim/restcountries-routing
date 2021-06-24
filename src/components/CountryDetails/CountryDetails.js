import React,{ useEffect, useState} from 'react';
import {useParams, Link } from 'react-router-dom'

const CountryDetails = () => {
    const  {CountryName}  = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${CountryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    },[])
    return (
        <div>
            {
                details.map(detail =><div>
                    <img style={{width:'300px'}} src={detail.flag} alt="" />
                    <h1>{detail.name}</h1>
                    <p>{detail.capital}</p>
                    <p>population: {detail.population}</p>
                    <p>alpha2Code: {detail.alpha2Code}</p>
                    <p>region: {detail.region}</p>
                    <p>subregion: {detail.subregion}</p>

                    <button>
                        <Link to='/home'>Go to Home</Link>
                    </button>
                </div> )
            }
        </div>
    );
};

export default CountryDetails;