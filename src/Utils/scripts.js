// // ---------- Home Page Scripts ----------
// export const initHomePageScripts = () => {
//     // Google Analytics (Home Page)
//     const gaScript = document.createElement("script");
//     gaScript.async = true;
//     gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-LYY3D5Q070";
//     document.head.appendChild(gaScript);

//     gaScript.onload = () => {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() { window.dataLayer.push(arguments); }
//         gtag('js', new Date());
//         gtag('config', 'G-LYY3D5Q070');
//     };

//     // Microsoft Clarity (Home Page)
//     const clarityScript = document.createElement("script");
//     clarityScript.type = "text/javascript";
//     clarityScript.innerHTML = `
//       (function(c,l,a,r,i,t,y){
//           c[a]=c[a]||function(){
//               (c[a].q=c[a].q||[]).push(arguments)
//           };
//           t=l.createElement(r);t.async=1;
//           t.src="https://www.clarity.ms/tag/"+i;
//           y=l.getElementsByTagName(r)[0];
//           y.parentNode.insertBefore(t,y);
//       })(window, document, "clarity", "script", "ti9fhhd6yh");
//     `;
//     document.head.appendChild(clarityScript);

//     return () => {
//         document.head.removeChild(gaScript);
//         document.head.removeChild(clarityScript);
//     };
// };


// // ---------- Thank You Page Scripts ----------
// export const initThankYouPageScripts = () => {
//     // Google Conversion Event (Thank You Page)
//     const conversionScript = document.createElement("script");
//     conversionScript.innerHTML = `
//       gtag('event', 'conversion', {'send_to': 'AW-17465611354/NS0-CL_R96MbENqooIhB'});
//     `;
//     document.head.appendChild(conversionScript);

//     // Google Ads Tag (Thank You Page)
//     const adsScript = document.createElement("script");
//     adsScript.async = true;
//     adsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17465611354";
//     document.head.appendChild(adsScript);

//     adsScript.onload = () => {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() { window.dataLayer.push(arguments); }
//         gtag('js', new Date());
//         gtag('config', 'AW-17465611354');
//     };

//     return () => {
//         document.head.removeChild(conversionScript);
//         document.head.removeChild(adsScript);
//     };
// };
