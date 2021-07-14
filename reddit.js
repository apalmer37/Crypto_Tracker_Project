const domain = "https://www.reddit.com";
var list = document.querySelector('#listPosts');

console.log(list);

console.log(new Date().getTime());

$().ready(()=>{

    list = document.querySelector('#listPosts');
    

    console.log(list);

    console.log(new Date().getTime());

    fetch(domain+"/r/CryptoCurrency/hot.json")
  .then(res => res.json())
  .then(({ data: { children } }) => {
    children.forEach(({ data: { permalink, title, thumbnail} }) => {
      const listItem = document.createElement('li');
      var appendString = `<div style="height:63px;">`;
      if(thumbnail != "self" && thumbnail != "default") appendString += `<img height="63px" src="${thumbnail}">`;
      appendString += `<a href = "${domain}${permalink}" > ${ title }</a></div>`;
      listItem.innerHTML = appendString;
      list.appendChild(listItem);
    });
  });
});