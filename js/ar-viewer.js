import QRCode from 'qrcode-svg';
class ARViewer extends HTMLElement {
    constructor() {
        super();
        this.initializationComponent();
    }
   
    initializationComponent(){
        const OS = this.checkOS();
        console.log(OS)
        this.appendChild(this.render(OS))
        
        this.addEventListener('click', () => {
            if (OS == 'android'){
                this.sceneViewer();
            }else if(OS == 'ios'){
                this.quickLook();
            }else if(OS == 'pc'){
                this.showQR();
            }
        })
        return 
    }

    render(OS){
       
        let androidSrc = this.getAttribute('GLB-src');
        let link = this.getAttribute('link');

        let modelEl = /*html*/`
            <model-viewer src="${encodeURIComponent(androidSrc)}" link="${link}"  shadow-intensity="1" ar ar-modes="webxr" camera-controls alt="A 3D model carousel">
                <button slot="ar-button" class="webxr_btn" style="background-color: white; border-radius: 4px; border: none; position: absolute; top: 16px; right: 16px; ">
                    <div id="actBtn" class="ar_action" style='display: none'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="actBtn" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
                        <g id="surface1">
                            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 27.261719 7.261719 C 27.378906 7.316406 27.476562 7.410156 27.535156 7.53125 C 27.539062 7.539062 27.542969 7.542969 27.546875 7.550781 C 27.550781 7.5625 27.554688 7.574219 27.5625 7.589844 C 27.589844 7.664062 27.601562 7.738281 27.601562 7.8125 L 27.601562 12 C 27.601562 12.332031 27.332031 12.601562 27 12.601562 C 26.667969 12.601562 26.398438 12.332031 26.398438 12 L 26.398438 8.769531 L 23.667969 10.136719 C 23.371094 10.285156 23.011719 10.164062 22.863281 9.867188 C 22.714844 9.570312 22.835938 9.210938 23.132812 9.0625 L 25.660156 7.800781 L 23.132812 6.535156 C 22.835938 6.386719 22.714844 6.027344 22.863281 5.730469 C 23.011719 5.433594 23.371094 5.316406 23.667969 5.464844 Z M 27.601562 19.789062 C 27.601562 19.875 27.585938 19.964844 27.546875 20.050781 C 27.515625 20.113281 27.476562 20.171875 27.425781 20.222656 C 27.375 20.273438 27.320312 20.3125 27.261719 20.339844 L 23.667969 22.136719 C 23.371094 22.285156 23.011719 22.164062 22.863281 21.867188 C 22.714844 21.570312 22.835938 21.210938 23.132812 21.0625 L 25.660156 19.800781 L 23.132812 18.535156 C 22.835938 18.390625 22.714844 18.027344 22.863281 17.730469 C 23.011719 17.4375 23.371094 17.316406 23.667969 17.464844 L 26.398438 18.828125 L 26.398438 15.601562 C 26.398438 15.269531 26.667969 15 27 15 C 27.332031 15 27.601562 15.269531 27.601562 15.601562 Z M 9.140625 19.800781 L 11.667969 21.0625 C 11.964844 21.210938 12.085938 21.570312 11.9375 21.867188 C 11.789062 22.164062 11.429688 22.285156 11.132812 22.136719 L 7.539062 20.339844 C 7.421875 20.285156 7.324219 20.191406 7.261719 20.070312 C 7.261719 20.0625 7.257812 20.058594 7.253906 20.050781 C 7.25 20.039062 7.242188 20.023438 7.238281 20.011719 C 7.210938 19.9375 7.199219 19.863281 7.199219 19.789062 L 7.199219 15.601562 C 7.199219 15.269531 7.46875 15 7.800781 15 C 8.132812 15 8.398438 15.269531 8.398438 15.601562 L 8.398438 18.828125 L 11.132812 17.464844 C 11.429688 17.316406 11.789062 17.433594 11.9375 17.730469 C 12.085938 18.027344 11.964844 18.386719 11.667969 18.535156 Z M 8.398438 8.769531 L 8.398438 12 C 8.398438 12.332031 8.132812 12.601562 7.800781 12.601562 C 7.46875 12.601562 7.199219 12.332031 7.199219 12 L 7.199219 7.8125 C 7.199219 7.722656 7.214844 7.632812 7.253906 7.550781 C 7.285156 7.484375 7.324219 7.425781 7.375 7.378906 C 7.425781 7.328125 7.480469 7.289062 7.539062 7.261719 L 11.132812 5.464844 C 11.429688 5.316406 11.789062 5.433594 11.9375 5.730469 C 12.085938 6.027344 11.964844 6.386719 11.667969 6.535156 L 9.140625 7.800781 L 11.667969 9.0625 C 11.964844 9.210938 12.085938 9.570312 11.9375 9.867188 C 11.789062 10.164062 11.429688 10.285156 11.132812 10.136719 Z M 17.121094 2.46875 C 17.203125 2.425781 17.300781 2.398438 17.398438 2.398438 C 17.5 2.398438 17.59375 2.425781 17.679688 2.46875 L 21.269531 4.261719 C 21.566406 4.410156 21.683594 4.773438 21.535156 5.066406 C 21.386719 5.363281 21.027344 5.484375 20.730469 5.335938 L 18 3.972656 L 18 7.199219 C 18 7.53125 17.730469 7.800781 17.398438 7.800781 C 17.070312 7.800781 16.800781 7.53125 16.800781 7.199219 L 16.800781 3.972656 L 14.066406 5.335938 C 13.773438 5.484375 13.410156 5.363281 13.261719 5.066406 C 13.113281 4.773438 13.234375 4.410156 13.53125 4.261719 Z M 17.679688 25.132812 C 17.59375 25.175781 17.5 25.199219 17.398438 25.199219 C 17.300781 25.199219 17.203125 25.175781 17.121094 25.132812 L 13.53125 23.335938 C 13.234375 23.1875 13.113281 22.828125 13.261719 22.53125 C 13.410156 22.234375 13.773438 22.113281 14.066406 22.261719 L 16.800781 23.628906 L 16.800781 20.398438 C 16.800781 20.070312 17.070312 19.800781 17.398438 19.800781 C 17.730469 19.800781 18 20.070312 18 20.398438 L 18 23.628906 L 20.730469 22.261719 C 21.027344 22.113281 21.386719 22.234375 21.535156 22.53125 C 21.683594 22.828125 21.5625 23.1875 21.269531 23.335938 Z M 18 12.972656 L 18 16.199219 C 18 16.53125 17.730469 16.800781 17.398438 16.800781 C 17.070312 16.800781 16.800781 16.53125 16.800781 16.199219 L 16.800781 12.972656 L 13.53125 11.335938 C 13.234375 11.1875 13.113281 10.828125 13.261719 10.53125 C 13.410156 10.234375 13.773438 10.117188 14.066406 10.261719 L 17.398438 11.929688 L 20.730469 10.261719 C 21.027344 10.117188 21.386719 10.234375 21.535156 10.53125 C 21.683594 10.828125 21.5625 11.1875 21.269531 11.335938 Z M 18 12.972656 "/>
                        </g>
                    </svg> 
                    </button>
                <div class="custom_banner"></div>
            </model-viewer>`;
        
        let customEl = /*html*/`
            <div class="customButtonWrapper">
            <div id="actBtn" class="ar_action" style='display: none'></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="actBtn" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
                    <g id="surface1">
                        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 27.261719 7.261719 C 27.378906 7.316406 27.476562 7.410156 27.535156 7.53125 C 27.539062 7.539062 27.542969 7.542969 27.546875 7.550781 C 27.550781 7.5625 27.554688 7.574219 27.5625 7.589844 C 27.589844 7.664062 27.601562 7.738281 27.601562 7.8125 L 27.601562 12 C 27.601562 12.332031 27.332031 12.601562 27 12.601562 C 26.667969 12.601562 26.398438 12.332031 26.398438 12 L 26.398438 8.769531 L 23.667969 10.136719 C 23.371094 10.285156 23.011719 10.164062 22.863281 9.867188 C 22.714844 9.570312 22.835938 9.210938 23.132812 9.0625 L 25.660156 7.800781 L 23.132812 6.535156 C 22.835938 6.386719 22.714844 6.027344 22.863281 5.730469 C 23.011719 5.433594 23.371094 5.316406 23.667969 5.464844 Z M 27.601562 19.789062 C 27.601562 19.875 27.585938 19.964844 27.546875 20.050781 C 27.515625 20.113281 27.476562 20.171875 27.425781 20.222656 C 27.375 20.273438 27.320312 20.3125 27.261719 20.339844 L 23.667969 22.136719 C 23.371094 22.285156 23.011719 22.164062 22.863281 21.867188 C 22.714844 21.570312 22.835938 21.210938 23.132812 21.0625 L 25.660156 19.800781 L 23.132812 18.535156 C 22.835938 18.390625 22.714844 18.027344 22.863281 17.730469 C 23.011719 17.4375 23.371094 17.316406 23.667969 17.464844 L 26.398438 18.828125 L 26.398438 15.601562 C 26.398438 15.269531 26.667969 15 27 15 C 27.332031 15 27.601562 15.269531 27.601562 15.601562 Z M 9.140625 19.800781 L 11.667969 21.0625 C 11.964844 21.210938 12.085938 21.570312 11.9375 21.867188 C 11.789062 22.164062 11.429688 22.285156 11.132812 22.136719 L 7.539062 20.339844 C 7.421875 20.285156 7.324219 20.191406 7.261719 20.070312 C 7.261719 20.0625 7.257812 20.058594 7.253906 20.050781 C 7.25 20.039062 7.242188 20.023438 7.238281 20.011719 C 7.210938 19.9375 7.199219 19.863281 7.199219 19.789062 L 7.199219 15.601562 C 7.199219 15.269531 7.46875 15 7.800781 15 C 8.132812 15 8.398438 15.269531 8.398438 15.601562 L 8.398438 18.828125 L 11.132812 17.464844 C 11.429688 17.316406 11.789062 17.433594 11.9375 17.730469 C 12.085938 18.027344 11.964844 18.386719 11.667969 18.535156 Z M 8.398438 8.769531 L 8.398438 12 C 8.398438 12.332031 8.132812 12.601562 7.800781 12.601562 C 7.46875 12.601562 7.199219 12.332031 7.199219 12 L 7.199219 7.8125 C 7.199219 7.722656 7.214844 7.632812 7.253906 7.550781 C 7.285156 7.484375 7.324219 7.425781 7.375 7.378906 C 7.425781 7.328125 7.480469 7.289062 7.539062 7.261719 L 11.132812 5.464844 C 11.429688 5.316406 11.789062 5.433594 11.9375 5.730469 C 12.085938 6.027344 11.964844 6.386719 11.667969 6.535156 L 9.140625 7.800781 L 11.667969 9.0625 C 11.964844 9.210938 12.085938 9.570312 11.9375 9.867188 C 11.789062 10.164062 11.429688 10.285156 11.132812 10.136719 Z M 17.121094 2.46875 C 17.203125 2.425781 17.300781 2.398438 17.398438 2.398438 C 17.5 2.398438 17.59375 2.425781 17.679688 2.46875 L 21.269531 4.261719 C 21.566406 4.410156 21.683594 4.773438 21.535156 5.066406 C 21.386719 5.363281 21.027344 5.484375 20.730469 5.335938 L 18 3.972656 L 18 7.199219 C 18 7.53125 17.730469 7.800781 17.398438 7.800781 C 17.070312 7.800781 16.800781 7.53125 16.800781 7.199219 L 16.800781 3.972656 L 14.066406 5.335938 C 13.773438 5.484375 13.410156 5.363281 13.261719 5.066406 C 13.113281 4.773438 13.234375 4.410156 13.53125 4.261719 Z M 17.679688 25.132812 C 17.59375 25.175781 17.5 25.199219 17.398438 25.199219 C 17.300781 25.199219 17.203125 25.175781 17.121094 25.132812 L 13.53125 23.335938 C 13.234375 23.1875 13.113281 22.828125 13.261719 22.53125 C 13.410156 22.234375 13.773438 22.113281 14.066406 22.261719 L 16.800781 23.628906 L 16.800781 20.398438 C 16.800781 20.070312 17.070312 19.800781 17.398438 19.800781 C 17.730469 19.800781 18 20.070312 18 20.398438 L 18 23.628906 L 20.730469 22.261719 C 21.027344 22.113281 21.386719 22.234375 21.535156 22.53125 C 21.683594 22.828125 21.5625 23.1875 21.269531 23.335938 Z M 18 12.972656 L 18 16.199219 C 18 16.53125 17.730469 16.800781 17.398438 16.800781 C 17.070312 16.800781 16.800781 16.53125 16.800781 16.199219 L 16.800781 12.972656 L 13.53125 11.335938 C 13.234375 11.1875 13.113281 10.828125 13.261719 10.53125 C 13.410156 10.234375 13.773438 10.117188 14.066406 10.261719 L 17.398438 11.929688 L 20.730469 10.261719 C 21.027344 10.117188 21.386719 10.234375 21.535156 10.53125 C 21.683594 10.828125 21.5625 11.1875 21.269531 11.335938 Z M 18 12.972656 "/>
                    </g>
                </svg> 
            </div>`;
        let div = document.createElement('div');

        div.setAttribute('id', 'customModelViewer')

        let append = '';
        switch (OS) {
            case 'ios':
                append = customEl;
                break;
            case 'pc':
                this.qrGenerate();
                append = customEl;
                break;
            case 'android':
                append = customEl;
                break;
            case 'WebXR':
                let banner = this.getAttribute('custom-banner')
                fetch(banner).then(function (response) {
                    return response.text();
                }).then(function (html) {
                    document.querySelector('.custom_banner').innerHTML = html;
                }).catch(function (err) {
                    console.warn('Something went wrong.', err);
                });
                append = modelEl;
                break;
            
        }
        
        div.innerHTML = append;
        
        return div
    }

    static get observedAttributes() {
        return ['name-attribute'];
    }
    
    checkOS(){
        const IS_ANDROID = /android/i.test(navigator.userAgent);

        const chromeVersion = navigator. userAgent. includes("Chrome") && navigator ? parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10) : null;

        const IS_IOS =
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
        
        let details = navigator.userAgent;

        let regexp = /android|iphone|kindle|ipad/i;
        
        let isMobileDevice = regexp.test(details);
        
        if (isMobileDevice) {
            if(chromeVersion && chromeVersion > 83){
                return 'WebXR'
            }else if(IS_ANDROID){
                return 'android'
                
            }else if(IS_IOS){
                return 'ios'
                
            }
        } else {
            return 'pc'
        }

        
        
    }

    showQR(){
        console.log('dcvmjiomji')
        let popup = document.createElement('div');
        popup.classList.add('mainPopupWrapper');
        popup.innerHTML = /*html*/`
        <div class="shadow_popup">
            <div class="popup">
                <div class="close"></div>
                <div class="qr_wrap">
                    ${this.qrGenerate()}
                </div>
                <div class="scan">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><g><g><path d="M370.07,0H141.928c-24.247,0-43.971,19.725-43.971,43.971v424.057c0,24.245,19.725,43.971,43.971,43.971h228.144    c24.245,0,43.971-19.725,43.971-43.971V43.971C414.041,19.725,394.317,0,370.07,0z M380.65,468.029    c0,5.833-4.745,10.579-10.579,10.579H141.928c-5.833,0-10.579-4.746-10.579-10.579v-57.376H380.65V468.029z M380.65,377.262    H131.348V124.555H380.65V377.262z M380.651,91.163H131.348V43.971c0-5.833,4.745-10.58,10.579-10.58h228.144    c5.833,0,10.579,4.746,10.579,10.58V91.163z"/></g></g><g><g><rect x="208.884" y="45.581" width="94.23" height="33.391"/></g></g><g><g><circle cx="255.999" cy="443.96" r="20.191"/></g></g></svg>
                    <p>Scan with your phone</p>
                </div>
            </div>
        </div>
        `
        this.appendChild(popup)
        // document.querySelector('body').appendChild(popup)
        if(popup.querySelector('.close')){
            popup.querySelector('.close').addEventListener('click', () => {
                popup.remove();
            })
        }
    }

    qrGenerate(){
        // let item = document.querySelector('ar-viewer').getAttribute('item');
        let item = location.pathname.replace('/','').replace('.html', '')
        console.log(item)
        let url = 'https://moen-ar-atlasiko.surge.sh/loaderAR.html'
        url += `#${item}=true`

        let qrcode = new QRCode({ content: url, join: true });
        let svg = qrcode.svg();
        return svg;
    }

    webXR(){
        console.log('webXR');
    }
    
    sceneViewer(){
        console.log('sceneViewer')
        let sceneviewerLink = '';
        let baseIntent = 'intent://arvr.google.com/scene-viewer/1.0?file=';
        sceneviewerLink += `${baseIntent}`;
        let androidSrc = this.getAttribute('GLB-src');
        sceneviewerLink += `${encodeURIComponent(androidSrc)}&mode=ar_only`;
        let link = this.getAttribute('android-link');
        link ? sceneviewerLink += `&link=${encodeURIComponent(link)}` : ``;
        let baseEnd = '#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;';
        sceneviewerLink += baseEnd;
        
        this.activateAR(sceneviewerLink);
        
    }
    quickLook(){
        console.log('quickLook')
        this.setAttribute("ar", "quick-look");
        
        let checkHash = window.location.hash.slice(1, -5);
        let quickLookLink = '';
        if (checkHash){
            quickLookLink = `https://moen-ar-atlasiko.surge.sh/${checkHash}/arc-pulldown-kitchen-faucet.usdz#&customHeight=medium`
        }else{
            quickLookLink = this.getAttribute('USDZ-src');
        }
        
        let quickLookBanner = this.getAttribute('custom-banner');
        
        quickLookLink += `&custom=${encodeURIComponent(quickLookBanner)}`
        this.activateAR(quickLookLink, this, true)

    }
    
    async activateAR(href, button, isQuickLook) {
        console.log('activateAR')
        const anchor = document.createElement("a");
        if (isQuickLook) {
            anchor.appendChild(document.createElement("img"));
            anchor.rel = "ar";
            
        }
        anchor.setAttribute("href", href);
        if (button && isQuickLook) {
            document.querySelector('body').appendChild(anchor);
            let banner = this.getAttribute('custom-banner')
            let extraDiv = document.createElement('div');
            let getBanner = await fetch(banner).then(function (response) {
                return response.text();
            })
            extraDiv.innerHTML = getBanner;
            let bannerLink = extraDiv.querySelector('.buyNow').getAttribute('href');
            anchor.addEventListener("message", function (event) {
                if (event.data == "_apple_ar_quicklook_button_tapped") {
                    window.location.href = bannerLink;
                }
            }, false);
            anchor.click();
        }
    }

    
}



window.customElements.define('ar-viewer', ARViewer);