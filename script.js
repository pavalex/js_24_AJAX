const getData = (url) => {
 fetch(url)
     .then(response => response.json())
     .then(data => {
      sendData(data, 'https://jsonplaceholder.typicode.com/posts');
     })
     .catch(error => {
      console.log(`${error} - ошибка получения данных`)
     })
};

 const sendData = (data, url) => {
  fetch(url, {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
    'Content-type': 'application/json; charset=UTF-8'
   }
  })
      .catch(error => {
       console.log(`${error} - ошибка отправки данных`)
      })
 };

getData('db.json');