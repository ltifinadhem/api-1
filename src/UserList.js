import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setlistOfUSer(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="main" >
            {listOfUSer.map((e) =>
                <div key={e.id} className="container">
                    <div className="main-body">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
                            <div className="col mb-3">
                                <div className='card'>
                                    {/* <img src="https://via.placeholder.com/340x120/FFB6C1/000000" alt="Cover" className="card-img-top" /> */}
                                    <div className="card-body text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ width: '200px', marginTop: '-65px' }} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                                        <p className="card-title"><strong>Name :</strong> {e.name}</p>
                                        <p className="text-secondary mb-1"> <strong>User Name :</strong> {e.username}</p>
                                        <p className="text-muted font-size-sm"><strong>E-mail :</strong> {e.email} <br /> <strong> Phone : </strong>{e.phone}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button type="button">Follow</button><button >add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;