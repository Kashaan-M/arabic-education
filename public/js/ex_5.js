var abs=document.querySelectorAll("div[id^=ab]"),wbs=document.querySelectorAll("div[id^=wb]"),sM=document.querySelector("#success-modal"),mO=document.querySelector("#modal-overlay"),sT=document.querySelector("#success-text"),b=["کیا بات ہے !","زبردست!","بہت خوب !","اور آگے بڑھو !","ماشاء اللہ"],r={0:[[4,2,3]],1:[[0,2,1]],2:[[0,5,3]],3:[[0,2,3]],4:[[4,3,5]],5:[[0,2,1]],6:[[0,1,3]],7:[[0,2,3]],8:[[0,2,5]],9:[[0,4,5]],10:[[3,2,4]],11:[[0,2,1]],12:[[3,5,4]],13:[[0,5,1]],14:[[1,2,5]],15:[[3,4,5]],16:[[5,2,3]],17:[[3,2,5]]};function cR(r,c){var n=!1,o=Array.from(c.children);try{var t=!0,a=!1,e=void 0;try{for(var u,d=r[Symbol.iterator]();!(t=(u=d.next()).done);t=!0){if(n=u.value.every((function(r,c){return r===Number(o[c].dataset.key)})))break}}catch(r){a=!0,e=r}finally{try{t||null==d.o||d.o()}finally{if(a)throw e}}}catch(r){}n?o.length===r[0].length?(c.classList.remove("unsolved"),c.classList.add("correct")):o.length!==r[0].length&&(c.classList.remove("correct"),c.classList.add("unsolved")):(c.classList.remove("correct"),c.classList.add("unsolved"))}function cA(){Array.from(abs).every((function(r){return r.classList.contains("correct")}))&&(sM.classList.remove("d-none"),mO.classList.remove("d-none"),sT.innerText=b[Math.floor(Math.random()*b.length)])}abs.forEach((function(c,n){dragula([c,wbs[n]]).on("dragend",(function(o){cR(r[n],c),cA()}))}));