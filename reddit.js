const domain = "https://www.reddit.com";
const PREVLINKS = "PreviouslyViewLinks";
const MAX_PREV_LINKS = 30;
var list = document.querySelector('#listPosts');

console.log(list);

console.log(new Date().getTime());

$().ready(() => {

  renderRecentEl();

  list = document.querySelector('#listPosts');
  console.log(list);

  console.log(new Date().getTime());

  fetch(domain + "/r/CryptoCurrency/hot.json")
    .then(res => res.json())
    .then(({ data: { children } }) => {
      children.forEach(({ data: { permalink, title, thumbnail } }) => {
        const listItem = document.createElement('li');
        var appendString = `<div class="redditPostDiv" style="height:63px;">`;
        if (thumbnail != "self" && thumbnail != "default") appendString += `<img class="redditImage height="63px" src="${thumbnail}">`;
        appendString += `<a class="redditPermaLink" href = "${domain}${permalink}" > ${title}</a></div>`;
        listItem.innerHTML = appendString;
        list.appendChild(listItem);
      });
    });
});

function renderRecentEl() {
  $("#recentList").empty();
  $("#clickedLink").val("");

  var previousLinks = JSON.parse(localStorage.getItem(PREVLINKS));

  for (i = 0; i < previousLinks.length; i++) {
    var a = $("<a>");
    a.addClass("list-group-item list-group-item-action list-group-item-primary recentClick");
    a.attr("href", previousLinks[i].permLink)
    a.text(previousLinks[i].title);
    $("#recentList").prepend(a);
  }
}


$(document).on("click", ".redditPermaLink", function (event) {
  event.preventDefault();

  var prevViewed = {};

  prevViewed.permLink = $(this).attr("href");
  prevViewed.title = $(this).text();

  var prevArray = JSON.parse(localStorage.getItem(PREVLINKS));
  if (!prevArray) {
    prevArray = [];
  }
  prevArray.unshift(prevViewed);

  while(prevArray.length > MAX_PREV_LINKS){
    prevArray.pop();
  }

  localStorage.setItem(PREVLINKS, JSON.stringify(prevArray));

  renderRecentEl();

  window.open(prevViewed.permLink);
});