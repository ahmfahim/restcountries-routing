import React from 'react';
import {Link} from 'react-router-dom';

const Country = (props) => {
    const { name, capital,flag } = props.countryInfo;

    return (
        <div style={{boxShadow:'1px 1px 4px gray', padding:'10px', width:'300px', marginTop:'20px', float:'left', height:'350px', marginLeft:'20px', marginRight:'20px' }}>
            <img style={{width:'300px', marginTop:'20px'}} src={flag} alt="" />
            <div style={{overflowY:'scroll',height:'120px'}}>
                <h1>{name}</h1>
                <h4>{capital}</h4>
                <button>
                    <Link to={`/CountryDetails/${name}`}>Show Details</Link>
                </button>
            </div>
        </div>
    );
};

export default Country;