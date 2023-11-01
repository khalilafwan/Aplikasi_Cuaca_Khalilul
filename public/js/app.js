const weatherform = document.querySelector('#home form')
const search = document.querySelector('#home form input')
const pesanSatu = document.querySelector('#home #pesan-1')
const pesanDua = document.querySelector('#home #pesan-2')


// pesanSatu.textContent = 'From javascript'

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    pesanSatu.textContent = 'Sedang mencari lokasi ..'
    pesanDua.textContent = ''

    fetch('/infoCuaca?address='+ location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                pesanSatu.textContent = data.error
            } else {
                pesanSatu.textContent = data.lokasi
                pesanDua.textContent = data.prediksiCuaca
            }
        })
    })
})

// berita
// Ganti dengan API key Anda dari MediaStack
const apiKey = 'e2483c6dc36c09c33822e211590ef8ca';
const apiUrl = 'https://api.mediastack.com/v1/news';

// Parameter yang ingin Anda tambahkan ke permintaan
const params = {
  access_key: apiKey,
  sources: 'bbc',
  keywords: 'technology',
  language: 'en',
};

// Membuat URL dengan parameter
const url = new URL(apiUrl);
url.search = new URLSearchParams(params).toString();

// Menggunakan fetch untuk mengambil data dari API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Data yang Anda ambil dari API tersedia di sini
    console.log(data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
