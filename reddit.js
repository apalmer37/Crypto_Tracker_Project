const domain = "https://www.reddit.com";
const PREVLINKS = "PreviouslyViewLinks";
const MAX_PREV_LINKS = 30;
var list = document.querySelector('#listPosts');

console.log(list);

console.log(new Date().getTime());

$().ready(() => {


  list = document.querySelector('#listPosts');
  console.log(list);

  console.log(new Date().getTime());

  // fetching reddit api domain + our chosen subreddit r/CryptoCurrency
  fetch(domain + "/r/CryptoCurrency/hot.json")
  // Then pulling all of the data
    .then(res => res.json())
    .then(({ data: { children } }) => {
      // Specifying the 3 main pieces of data we want to show -- permalink, title, thumbnail
      children.forEach(({ data: { permalink, title, thumbnail } }) => {
        // creating a list element called redditPostDiv, and putting all of the children into a list
        const listItem = document.createElement('li');
        var appendString = `<div class="redditPostDiv" style="height:63px;">`;
        // we actually disabled the thumbnails from appearing because there were a few NSFW images. 
        if (thumbnail != "self" && thumbnail != "default") appendString += `<img class="redditImage height="63px" src="${thumbnail}">`;
        appendString += `<a class="redditPermaLink" href = "${domain}${permalink}" > ${title}</a></div>`;
        // appending the permalink / title to the page
        listItem.innerHTML = appendString;
        list.appendChild(listItem);
      });
    });
});

// start function to render recent links clicked
function renderRecentEl() {
  $("#recentList").empty();
  $("#clickedLink").val("");

  var previousLinks = JSON.parse(localStorage.getItem(PREVLINKS));
  if(!previousLinks){
    return;
  }


  // for loop to create a list class for the previously clicked links
  for (i = 0; i < previousLinks.length; i++) {
    var a = $("<a>");
    a.addClass("list-group-item recentClick");
    a.attr("href", previousLinks[i].permLink)
    a.text(previousLinks[i].title);
    $("#recentList").prepend(a);
  }
}

// creates a click even for 
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