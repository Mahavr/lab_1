!function(){var r=document.querySelector("#form"),n=document.querySelectorAll(".input"),e=document.querySelector(".results");r.addEventListener("submit",(function(r){r.preventDefault(),Array.from(n).map((function(r){return r.value.length})).every((function(r,n,e){return r===e[0]}))?(n.forEach((function(r){t.push(r.value.split(",").map(Number))})),console.log(t)):alert("Всі рядки мають різну довжину. Будь ласка, введіть рядки однакової довжини.");u=t,o=u.length,e.innerHTML="",function(r,n){for(var e=0;e<n;e++)if(1!==r[e][e])return!1;return!0}(u,o)?e.innerHTML+="<p> Відношення рефлексивне </p>":e.innerHTML+="<p>Відношення не рефлексивне </p>",function(r,n){for(var e=0;e<n;e++)if(0!==r[e][e])return!1;return!0}(u,o)?e.innerHTML+="<p> Відношення антирефлексивне </p>":e.innerHTML+="<p>Відношення не є антирефлексивна </p>",function(r,n){for(var e=0;e<n;e++)for(var t=0;t<n;t++)if(r[e][t]!==r[t][e])return!1;return!0}(u,o)?e.innerHTML+="<p> Відношення симетричне </p>":e.innerHTML+="<p> Відношення не симетричне </p>",function(r,n){for(var e=0;e<n;e++)for(var t=0;t<n;t++)if(e!==t&&1===r[e][t]&&1===r[t][e])return!1;return!0}(u,o)?e.innerHTML+="<p> Відношення антисиметричне </p>":e.innerHTML+="<p> Відношення не є антисиметричним </p>",function(r,n){for(var e=0;e<n;e++)for(var t=0;t<n;t++)for(var u=0;u<n;u++)if(1===r[e][t]&&1===r[t][u]&&1!==r[e][u])return!1;return!0}(u,o)?e.innerHTML+="<p> Відношення транзитивне </p>":e.innerHTML+="<p> Відношення не є транзитивним </p>";var u,o}));var t=[]}();
//# sourceMappingURL=thirtLab.693ea394.js.map