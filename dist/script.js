const signUpButton=document.getElementById("signUp"),signInButton=document.getElementById("signIn"),container=document.getElementById("container"),info=document.getElementsByClassName("sign-up"),button=document.querySelector("#sign-up-btn"),input=document.querySelector("#phone"),generateCSV=e=>{e.preventDefault();const t=[];for(let e=0;e<info.length;e++)t.push(info[e].value);let n="data:text/csv;charset=utf-8,"+[["name","email","phone"],t].map((e=>e.join(" "))).join("\n");var i=encodeURI(n);window.open(i)},slideRight=()=>{container.classList.add("right-panel-active")},slideLeft=()=>{container.classList.remove("right-panel-active")};signUpButton.addEventListener("click",slideRight,signInButton.addEventListener("click",slideLeft)),button.addEventListener("click",generateCSV);
//# sourceMappingURL=script.js.map