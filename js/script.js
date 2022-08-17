let newPath = window.location.hash.slice(1, -5);

let arLink = `https://moen-ar-atlasiko.surge.sh/${newPath}/arc-pulldown-kitchen-faucet.usdz#&customHeight=medium`
document.querySelector('ar-viewer').setAttribute('USDZ-src', arLink)

let arBanner = `https://moen-ar-atlasiko.surge.sh/${newPath}/banner.html`
document.querySelector('ar-viewer').setAttribute('custom-banner', arBanner)
document.getElementById('actBtn').click();

setTimeout(() => {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.wrapper .buy_btn').style.display = 'block';
}, 3000);

let goBack = document.querySelector('.buy_btn a');
let link = window.location.protocol + "//" + window.location.host + "/" + newPath +'.html' + window.location.search
goBack.setAttribute('href',  link);