import './friendlist.css';

function Friendlist(){
    return(
        <>
        <div className='friendlist-container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='friendlist-header'>
                        <h2>Friend List</h2>
                    </div>
                    <div className='friendlist-content'>
                        <div className='row'>
                            <div className='col-md-12 d-flex'>
                                <img
                                    src="../assets/profile_new.png"
                                    alt="profile"
                                    height="50"
                                    width="50"
                                    className="friend-icon"
                                />
                                <h5 className='friendlist-users'>Username</h5>
                            </div>
                            
                            <div className='col-md-12 d-flex'>
                                <img
                                    src="../assets/profile_new.png"
                                    alt="profile"
                                    height="50"
                                    width="50"
                                    className="friend-icon"
                                />
                                <h5 className='friendlist-users'>Username</h5>
                            </div>

                            <div className='col-md-12 d-flex'>
                                <img
                                    src="../assets/profile_new.png"
                                    alt="profile"
                                    height="50"
                                    width="50"
                                    className="friend-icon"
                                />
                                <h5 className='friendlist-users'>Username</h5>
                            </div>

                            <div className='col-md-12 d-flex'>
                                <img
                                    src="../assets/profile_new.png"
                                    alt="profile"
                                    height="50"
                                    width="50"
                                    className="friend-icon"
                                />
                                <h5 className='friendlist-users'>Username</h5>
                            </div>
                            <div className='col-md-12 d-flex'>
                                <img
                                    src="../assets/profile_new.png"
                                    alt="profile"
                                    height="50"
                                    width="50"
                                    className="friend-icon"
                                />
                                <h5 className='friendlist-users'>Username</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <button className='add-friend-btn'>Add Friend</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Friendlist;