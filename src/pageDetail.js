var pageContent = document.getElementById("app");

  const PageDetail = (argument) => {
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s/g, "-");

      const fetchGame = (url, argument) => {
        let finalURL = url + argument;
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let stud = "";
            response.developers.forEach(dev => {
              stud += dev.name + ", "
            });
            stud = "studios : " + stud.slice(0, -2);
            let tags = "";
            response.tags.forEach(tag => {
              tags += tag.name + ", "
            });
            tags = "tags : " + tags.slice(0, -2);
            stud = "studios : " + stud.slice(0, -2);
            let genres = "";
            response.genres.forEach(genre => {
              genres += genre.name + ", "
            });
            genres = "genres : " + genres.slice(0, -2);
            console.log(stud);
            console.log(response);
            let { name, released, description, background_image } = response;
  
            let articleDOM = document.querySelector(".page-detail .article");
            
            articleDOM.querySelector("img.img").src = background_image;
            articleDOM.querySelector("h1.title").innerHTML = name;
            articleDOM.querySelector("p.release-date span").innerHTML = released;
            articleDOM.querySelector("p.description").innerHTML = description;
            articleDOM.querySelector("p.stud").innerHTML = stud;
            articleDOM.querySelector("p.tags").innerHTML = tags;
            articleDOM.querySelector("p.genres").innerHTML = genres;
          });
      };
  
      fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <div class="poster">
                <img class="img"/>
            </div>
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
            <p class="stud"></p>
            <p class="tags"></p>
            <p class="genres"></p>
          </div>
        </section>
      `;
  
      preparePage();
    };
    render();
}

export {PageDetail};