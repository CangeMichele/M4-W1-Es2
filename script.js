function search() {
    const input = document.getElementById("searchField").value;
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`
    console.log(url);
    
    document.getElementById(input).classList.remove('d-none');

    fetch(url)
        .then(response => response.json())

        .then(data => {
            const dataAlbums = data.data;
            console.log(dataAlbums);

            dataAlbums.forEach(album => {

                let card = document.createElement('div');
                card.classList.add('card');

                let cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = album['title'];


                let imgCard = document.createElement('img');
                imgCard.setAttribute('src', album['album']['cover_medium']);
                imgCard.setAttribute('alt', 'copertina album');
                imgCard.classList.add('card-img-top');

                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                let trackList = album['tracklist'];
                
                
                let paragrafo = document.createElement('p');
                paragrafo.classList.add('card-text');
                paragrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vel?';

                cardBody.appendChild(paragrafo);
                card.appendChild(cardTitle);
                card.appendChild(imgCard);
                card.appendChild(cardBody);

                document.getElementById(input + 'Section').appendChild(card);
            });

        })








}



