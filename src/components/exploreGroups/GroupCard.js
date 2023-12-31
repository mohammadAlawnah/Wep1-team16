import React from 'react';

const GroupCard = (props) => {
return (
<div className="col-md-4 mb-4">
    <div className="Group-card">
    <div className="img1">
        <img className='img-card' src={props.backgroundImage} alt={`${props.title} Background`} />
    </div>

    <div className="img2">
        <img className='img-card' src={props.logo} alt={`${props.title} Logo`} />
    </div>

    <div className="main-card">
        <b className='b-card'>{props.title}</b>
        <p className='p-card'>
        {props.type === 'private' ? (
            <svg className='svg-card' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
            <path
                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
            />
            </svg>
        ) : (
            <svg className='svg-card' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path
                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
            />
            </svg>
        )}{' '}
        {props.type === 'private' ? 'Private Group' : 'Public Group'}
        </p>
        
        <div className="container-Group-card">
        <div className="left-section">
            <b className='b-card'>{props.members}k</b>
            <p className='p-card'>Members</p>
        </div>
        
        <div className="vertical-line"></div>

        <div className="right-section">
            <b className='b-card'>{props.postsPerDay}</b>
            <p className='p-card'>Post per day</p>
        </div>
        </div>

            <div className="small-img align-items-center justify-content-center mb-0 mt-3">
            {props.Images.map((image, imgIndex) => (
                    <img key={imgIndex} className="circular-image-ExploreGroups" src={image} alt={`${imgIndex + 1}`} />
                ))}
            </div> 
    </div>
    </div>
</div>
);
};

export default GroupCard;
