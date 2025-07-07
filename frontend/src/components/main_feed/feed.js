import './feed.css';

function Feed(){
    return (
      <div className="feed-container">
        <div className="feed-header">
          <h2>VibeShare Feed</h2>
        </div>
        <div className="feed-content">
          <div className="post-container row">
            <div className="col-md-12">
              <div className="post-header">
                <div className="row">
                  <div className="col-md-2 d-flex">
                    <img
                      src="../assets/profile_new.png"
                      alt="profile"
                      height="50"
                      width="50"
                      className="post-icon"
                    />
                    <h5 className='mt-4'>Username</h5>
                  </div>
                  
                </div>
                
              </div>
              <div className="post-content">
                <div className='row d-flex'>
                    <div className='col-md-8'>
                        <div className='photo-wrapper'>
                        <img
                          src="../assets/post-photo.jpg"
                          alt="post"
                          className="post-image"
                        />
                        </div>
                        <img src='../assets/like-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/comment-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/follow-icon.png' alt='like' height='50' width='50' className='like-icon' />
                        {/* <button className='follow-btn'>Follow</button> */}
                       
                    </div>
                    <div className='col-md-4'>
                        <h5>Post Caption</h5>
                        <p className='post-caption'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                        </p> 
                    </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="post-container row">
            <div className="col-md-12">
              <div className="post-header">
                <div className="row">
                  <div className="col-md-2 d-flex">
                    <img
                      src="../assets/profile_new.png"
                      alt="profile"
                      height="50"
                      width="50"
                      className="post-icon"
                    />
                    <h5 className='mt-4'>Username</h5>
                  </div>
                  
                </div>
                
              </div>
              <div className="post-content">
                <div className='row d-flex'>
                    <div className='col-md-8'>
                        <div className='photo-wrapper'>
                        <img
                          src="../assets/post-photo.jpg"
                          alt="post"
                          className="post-image"
                        />
                        </div>
                        <img src='../assets/like-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/comment-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/follow-icon.png' alt='like' height='50' width='50' className='like-icon' />
                        {/* <button className='follow-btn'>Follow</button> */}
                       
                    </div>
                    <div className='col-md-4'>
                        <h5>Post Caption</h5>
                        <p className='post-caption'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                        </p> 
                    </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="post-container row">
            <div className="col-md-12">
              <div className="post-header">
                <div className="row">
                  <div className="col-md-2 d-flex">
                    <img
                      src="../assets/profile_new.png"
                      alt="profile"
                      height="50"
                      width="50"
                      className="post-icon"
                    />
                    <h5 className='mt-4'>Username</h5>
                  </div>
                  
                </div>
                
              </div>
              <div className="post-content">
                <div className='row d-flex'>
                    <div className='col-md-8'>
                        <div className='photo-wrapper'>
                        <img
                          src="../assets/post-photo.jpg"
                          alt="post"
                          className="post-image"
                        />
                        </div>
                        <img src='../assets/like-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/comment-logo.png' alt='like' height='50' width='50' className='like-icon' />
                        <img src='../assets/follow-icon.png' alt='like' height='50' width='50' className='like-icon' />
                        {/* <button className='follow-btn'>Follow</button> */}
                       
                    </div>
                    <div className='col-md-4'>
                        <h5>Post Caption</h5>
                        <p className='post-caption'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                        </p> 
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );

}

export default Feed;