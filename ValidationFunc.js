const ValidFirstName = val =>{
    if(!(/^[a-z]*$/gi).test(val) && val !== '') return false;
    return true;
}
const ValidLastName = val =>{
    if(!(/^[a-z]{0,10}$/gi).test(val) && val !== '') return false;
    return true;
}
const ValidMail = val =>{
    if(!(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi).test(val)
        && val !== '') return false;
        return true;
}
const ValidPassword = val =>{
    if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi).test(val) && val !== '') return false;
    return true;
}
const ValidPhone = val =>{
    if(!(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g).test(val)
        && val !== '') return false;
    return true;
}
const ValidToken = val =>{
    if(!(/[A-Za\-Z0-9 -_]+?.[A-Za\-Z0-9 -_]+?.([A-Za\-Z0-9 -_]+)[\/A-Za -Z0-9 -_]+?$/g).test(val)
        && val !== '') return false;
    return true;
}

export {
    ValidFirstName,
    ValidLastName,
    ValidMail,
    ValidPassword,
    ValidPhone,
    ValidToken
};
