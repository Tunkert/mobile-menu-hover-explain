function mobileExpand() {
  const nav = document.querySelector('nav');

  nav.classList.toggle('expand');
}

function mobileExplain() {
  const explainBlock = document.createElement('div');

  explainBlock.className = 'mobile-explain';
  explainBlock.id = 'explainBlock';
  const whatNode = explainBlock.appendChild(document.createTextNode('Menu'));

  document.querySelector('header').appendChild(explainBlock);
}

function explainAway() {
  const goAway = document.getElementById('explainBlock');

  goAway.parentNode.removeChild(goAway);
}