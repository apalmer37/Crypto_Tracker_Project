const domain = "https://www.reddit.com";
var list = document.querySelector('#listPosts');
var recentList = [];

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
      var appendString = `<div class="redditPostDiv" style="height:63px;">`;
      if(thumbnail != "self" && thumbnail != "default") appendString += `<img class="redditImage height="63px" src="${thumbnail}">`;
      appendString += `<a class="redditPermaLink" href = "${domain}${permalink}" > ${ title }</a></div>`;
      listItem.innerHTML = appendString;
      list.appendChild(listItem);
    });
  });
});

initClickedLink();

function renderRecentEl(){
  $("#recentList").empty();
  $("#clickedLink").val("");

  for (i=0; i<recentList.length; i++) {
    var a = $("<a>");
    a.addClass("list-group-item list-group-item-action list-group-item-primary recentClick");
    a.attr("data-input", recentList[i])
    a.text(recentList[i]);
    $("#recentList").prepend(a);
  }
}

function initClickedLink(){
  var storedRecentEl = JSON.parse(localStorage.getItem("recentEl"));
  if (storedRecentEl !== null) {
    recentList = storedRecentEl;
  }
  renderRecentEl();
}

function storeRecentClickList(){
  localStorage.setItem("recentEl", JSON.stringify(recentList));
}

function storeLastClick(){
  localStorage.setItem("lastClick", JSON.stringify(list));
}

$(document).on("click", "redditPermaLink", function(event){
  event.preventDefault();

  recentList = $("clickedLink").val().trim();
  if(recentList >= 5) {
    recentList.shift();
    recentList.push(list);
  }
  renderRecentEl();
  storeRecentClickList();
  storeLastClick();
});