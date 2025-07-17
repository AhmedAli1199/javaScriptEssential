let articlesDiv = document.getElementById('articles');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'health_article.json', true);

xhr.onload = function(){

    articleJson = JSON.parse(xhr.responseText);
    if(xhr.status >= 200 && xhr.status < 300){

        articleJson.articles.forEach( function(article) {
            
            // Create a new div for each article
            const articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <h4>${article.description}</h4>
                <p> <strong>Ways to Achieve</strong>  </p>
            `;

            const ways_list = document.createElement('ul');
            // Loop through each way to achieve and create a list item
            article.ways_to_achieve.forEach(function(way) {
                const list_item = document.createElement('li');
                list_item.textContent = way;
                ways_list.appendChild(list_item);
            });
            articleDiv.appendChild(ways_list);
            articleDiv.innerHTML += `
                <p><strong>Benefits:</strong></p>
            `;


            // Create a list for benefits
            const benefits_list = document.createElement('ul');
            article.benefits.forEach( function(benefit){
                const benefit_item = document.createElement('li');
                benefit_item.textContent = benefit;
                benefits_list.appendChild(benefit_item);

            })
            articleDiv.appendChild(benefits_list);

            articlesDiv.appendChild(articleDiv);
            articlesDiv.innerHTML += '<hr>';
        }


        )

    
    
    
    
    
    
    }else{
        console.error('Failed to load articles:', xhr.statusText);
    }



}


xhr.onerror = function() {
    console.error('Request failed');
}

xhr.send();
