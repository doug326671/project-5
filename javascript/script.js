const theUsers = 'https://randomuser.me/api/';
var counter = 0;
var userArray = [];


// Make an AJAX request
function getJSON(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        userArray.push(data);
      }
    };
    xhr.send();
  }
// calling the Ajax request and requesting 12 users
while(counter < 12){
    getJSON(theUsers);  
    counter += 1;
}


console.log(userArray);