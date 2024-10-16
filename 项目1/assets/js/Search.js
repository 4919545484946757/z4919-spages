const index = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('body');

    documents.forEach(function (doc) {
        this.add(doc);
    }, this);
});

document.getElementById('search').addEventListener('input', function () {
    const query = this.value;
    const results = index.search(query);
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(function (result) {
        const doc = documents.find(document => document.id === parseInt(result.ref));
        const li = document.createElement('li');
        li.textContent = doc.title;
        resultsContainer.appendChild(li);
    });
});