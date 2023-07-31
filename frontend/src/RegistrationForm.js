import React, {useState } from 'react';

const RegistrationForm=()=> {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [contactInfo,setContactInfo]=useState('');
    const [profilePicture,setProfilePicture]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    return(

    );

};
export default RegistrationForm;