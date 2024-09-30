import{i as a,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="46122064-27fc1540b81cd289c7b100078",y="https://pixabay.com/api/",g=s=>fetch(`${y}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>r.hits);function h(s){const r=document.querySelector(".gallery");r.innerHTML="",s.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const i=s.map(({webformatURL:c,largeImageURL:e,tags:t,likes:l,views:u,comments:d,downloads:m})=>`<li class="gallery-item"> 
        <a href="${e}" class="gallery-link">
  <img src="${c}" alt="${t}" class="card-img"/>
  <ul class="desc-list">
    <li class="desc-item">
      <p class="desc-value">Likes</p>
      <p class="desc-quantity">${l}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Views</p>
      <p class="desc-quantity">${u}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Comments</p>
      <p class="desc-quantity">${d}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Downloads</p>
      <p class="desc-quantity">${m}</p>
    </li>
  </ul>
 </li>`).join("");r.innerHTML=i}const q=new f(".gallery a"),n=document.querySelector(".search-form"),o=document.querySelector(".loader"),L=document.querySelector(".gallery"),b=L.querySelectorAll("li");n.addEventListener("submit",S);function S(s){s.preventDefault();const r=s.target.elements.query.value.trim();r&&(b.forEach(i=>i.remove()),o.classList.add("isVisible"),g(r).then(i=>{h(i),q.refresh()}).catch(i=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{o.classList.remove("isVisible"),n.reset()}))}
//# sourceMappingURL=index.js.map
