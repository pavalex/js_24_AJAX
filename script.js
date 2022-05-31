const getData = (url) => {
 fetch(url)
     .then(response => response.json())
     .then(data => {
         console.log('Данные получены: ');
         console.log(data);
         sendData(data, 'https://jsonplaceholder.typicode.com/posts');
         console.log('Данные отправлены: ');
         console.log(data);
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
      .then(response => response.json())
      .then(data => {
          console.log('Ответ сервера: ');
          console.log(data);
      })
      .catch(error => {
       console.log(`${error} - ошибка отправки данных`)
      })
 };

getData('db.json');