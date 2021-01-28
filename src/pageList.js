const pageContent = document.getElementById("app");

const PageList = (argument = "") => {
  
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";
  
      const fetchList = (url, argument) => {
        let finalURL = url;
        if (argument) {
          finalURL = url + "?search=" + argument;
        }
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            response.results.forEach((article) => {
              let concat = "";
              article.platforms.forEach(platform => {
              concat += platform.platform.name + " ";
              });
              articles += `
                    <div class="cardGame">
                      <img class="poster" src="${article.background_image}"/>
                      <p>
                        ${concat}
                      </p>
                      <h1>${article.name}</h1>
                      <h2>${article.released}</h2>
                      <a href = "#pagedetail/${article.id}">plus de details</a>
                    </div>
                  `;
            });
            document.querySelector(".page-list .articles").innerHTML = articles;
          });
      };
  
      fetchList("https://api.rawg.io/api/games", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };
export default PageList;