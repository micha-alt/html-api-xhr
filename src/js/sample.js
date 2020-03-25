document.getElementById('btnRates').addEventListener('click', () => {

  // XHR Objekt erzeugen
  const xhr = new XMLHttpRequest();

  // Event-Handler setzen (heutzutage auch über addEventListener)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);

      const results = document.querySelector('.results');
      results.querySelector('th:last-child').textContent = 'Kurs vom ' + new Date(data.date).toLocaleDateString();

      const tbody = results.querySelector('tbody');
      for (const currency in data.rates) {
        if (data.rates.hasOwnProperty(currency)) {
          const rate = data.rates[currency];
          tbody.insertAdjacentHTML('beforeend', `<tr><td>${currency}</td><td>${rate}</td></th>`);

        }
      }

      results.classList.add('success');

      setTimeout(() => {
        const sample = document.querySelector('article.sample');
        sample.scrollIntoView(true);
      }, );
    }
  };

  // Verbindung öffnen
  xhr.open('GET', 'https://api.exchangeratesapi.io/latest');

  // Request abzusetzen
  xhr.send(null);

});
