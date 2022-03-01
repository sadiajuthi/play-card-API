const loaddata = () => {
    const searchInput = document.getElementById('search-input');
    const error = document.getElementById('error');
    const searchValue = searchInput.value;
    if (isNaN(searchValue) || searchValue == '') {
        // alert("Please enter a number"); or
        error.innerText = 'please enter a number'
    }
    else {
        console.log(searchValue);
    }
    searchInput.value = '';
}