const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos(){
    const busca = await fetch("http://localhost:3000/videos");
    //test 
    //const api = fetch("http://localhost:3000/video") error
    const videos = await busca.json();

    // .then(res => res.json())
    // .then((videos) =>
        videos.forEach((video)=> {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe 
                    width="100%" height="60%" src="${video.url}"
                    title"${video.titulo}"
                    frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture"
                    allowfullscreen>
                </iframe>

                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>

                </div>
            </li>
            `;
        
        })
//    )
//    .catch((error) => {
//        containerVideos.innerHTML = `
//        <p> Houve um erro ao carregar os vídeos: ${error}</p>
//        `;
//    })
}

buscarEMostrarVideos();
