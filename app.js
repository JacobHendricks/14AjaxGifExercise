console.log("Let's get this party started!");
const $gifArea = $('#gifs');

async function getGif(searchTerm) {
  try {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    // console.log(res.data);
    addGif(res.data);
  } catch (e) {
    alert("Not FOUND");
  }
}


function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url
    });
    $gifArea.append($newGif);
  }
}

const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  getGif(input.value);
  input.value = '';
});


$("#remove").on("click", function() {
  $gifArea.empty();
});
