

const formatDate = (date) => {
    const options = {year : 'numeric',month :'long',day : 'numeric'};
    return date.toLocaleDateString(undefined,options);
};

const capitalizeString = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}


module.exports={
    formatDate,
    capitalizeString
}