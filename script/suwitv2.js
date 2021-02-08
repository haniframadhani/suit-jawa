function getPilihanKoputer() {
  // membangkitkan bilangan random
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp > 0.34 && comp < 0.67) return 'semut'
  return 'orang'
}

function getHasil(comp, player) {
  // rules
  if (player == comp) return '<p>Seri!</p>';
  if (player == 'gajah') return (comp == 'orang') ? '<p>Menang!</p>' : '<p>Kalah!</p>';
  if (player == 'semut') return (comp == 'gajah') ? '<p>Menang!</p>' : '<p>Kalah!</p>';
  if (player == 'orang') return (comp == 'semut') ? '<p>Menang!</p>' : '<p>Kalah!</p>';
}

function putar() {
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pKomputer = getPilihanKoputer();
    const pPlayer = pil.className;
    const hasil = getHasil(pKomputer, pPlayer);

    putar();

    setTimeout(function () {

      // ganti gambar komputer
      const imgKomputer = document.querySelector('.img-komputer');
      imgKomputer.setAttribute('src', 'img/' + pKomputer + '.png');

      // menampilkan hasil
      const info = document.querySelector('.info');
      info.innerHTML = hasil;

      //skor

      function skor() {
        let sPlayer = document.querySelector('.score-player p');
        let sKomputer = document.querySelector('.score-com p');
        let menang = 1;
        let kalah = 1;

        if (hasil == '<p>Menang!</p>') {
          sPlayer.innerHTML = menang++;
        }
        if (hasil == '<p>Kalah!</p>') {
          sKomputer.innerHTML = kalah++;
        }
      }

      skor();

    }, 1000)

  });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pKomputer = getPilihanKoputer();
//     const pPlayer = pGajah.className;
//     const hasil = getHasil(pKomputer, pPlayer);

//     // ganti gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pKomputer + '.png');

//     // menampilkan hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pKomputer = getPilihanKoputer();
//     const pPlayer = pSemut.className;
//     const hasil = getHasil(pKomputer, pPlayer);

//     // ganti gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pKomputer + '.png');

//     // menampilkan hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pKomputer = getPilihanKoputer();
//     const pPlayer = pOrang.className;
//     const hasil = getHasil(pKomputer, pPlayer);

//     // ganti gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pKomputer + '.png');

//     // menampilkan hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });