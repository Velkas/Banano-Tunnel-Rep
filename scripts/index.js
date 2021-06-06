let kaliumImgs = ['assets/kalium/green_radium_hentai.jpg', 'assets/kalium/thanos_hentai.jpg'];
let vaultImgs = [];

function chooseRandomImg(pool) {
  switch (pool) {
    case 'kalium':
      document.getElementById(pool + 'Img').src = kaliumImgs[Math.floor(Math.random() * kaliumImgs.length)];
      break;
    case 'vault':
      document.getElementById(pool + 'Img').src = vaultImgs[Math.floor(Math.random() * vaultImgs.length)];
      break;
    default:
      break;
  }
}

function openGuide(evt, guide) {
  chooseRandomImg(guide);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(guide).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function publishDate() {
  var el = document.getElementById('date');

  console.log(el.innerText);
  el.textContent = new Date().getFullYear();
}
