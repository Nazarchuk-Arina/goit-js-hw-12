import{a as y,i as l,S as h}from"./assets/vendor-D73Uttp0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const L="46122064-27fc1540b81cd289c7b100078",b="https://pixabay.com/api/";async function q(e,a=1){const i=`${b}?key=${L}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${a}`;try{const{data:r}=await y.get(i);return r}catch(r){throw console.error("Error fetching images:",r),new Error}}function v(e){const a=document.querySelector(".gallery");e.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const i=e.map(({webformatURL:r,largeImageURL:t,tags:s,likes:o,views:f,comments:g,downloads:p})=>`<li class="gallery-item"> 
        <a href="${t}" class="gallery-link">
  <img src="${r}" alt="${s}" class="card-img"/>
  <ul class="desc-list">
    <li class="desc-item">
      <p class="desc-value">Likes</p>
      <p class="desc-quantity">${o}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Views</p>
      <p class="desc-quantity">${f}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Comments</p>
      <p class="desc-quantity">${g}</p>
    </li>
    <li class="desc-item">
      <p class="desc-value">Downloads</p>
      <p class="desc-quantity">${p}</p>
    </li>
  </ul>
 </li>`).join("");a.insertAdjacentHTML("beforeend",i)}const w=document.querySelector(".search-form"),n=document.querySelector(".loader"),S=document.querySelector(".gallery"),c=document.querySelector(".load-more");let $=new h(".gallery a"),d=1,u="";c.classList.add("hidden");w.addEventListener("submit",E);async function E(e){if(e.preventDefault(),u=e.currentTarget.elements.query.value.trim(),d=1,!u){l.error({message:"Please enter a search term."});return}S.innerHTML="",n.classList.add("isVisible"),await m(),n.classList.remove("isVisible")}async function m(){try{const e=await q(u,d);v(e.hits),$.refresh(),P(e.hits.length),d*15>=e.totalHits&&(l.info({message:"We're sorry, but you've reached the end of search results."}),c.classList.add("hidden"))}catch{l.error({message:"Failed loading images."})}}function P(e){e<15?c.classList.add("hidden"):c.classList.remove("hidden")}c.addEventListener("click",async()=>{d+=1,n.classList.add("isVisible"),await m(),n.classList.remove("isVisible"),O()});function O(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
