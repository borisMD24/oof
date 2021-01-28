var pageContent = document.getElementById("app");
const Home = () =>{

        const fetchList = () =>{
        fetch("https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31")
          .then((response) => response.json())
          .then((response) => {
            let articles = "";
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
  
      fetchList();
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `;
  
      fetchList();
    };
  
    render();
}

export default Home;