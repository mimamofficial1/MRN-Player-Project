const controls=["play-large","rewind","play","fast-forward","progress","current-time","duration","captions","settings","pip","airplay","fullscreen"];

document.addEventListener("DOMContentLoaded",()=>{
    Plyr.setup(".player",{controls});

    gsap.from(".file-info, .disclaimer",{opacity:0,y:20,duration:0.8,ease:"power2.out",delay:1.2,stagger:0.2});

    gsap.from(".action-buttons button",{opacity:0,scale:0.8,stagger:0.1,duration:0.5,ease:"back.out(1.7)",onStart:()=>{
        gsap.to(".action-buttons button",{boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)",repeat:-1,yoyo:true,duration:1.5})
    }});
});

function showMessage(msg,type){
    const popup=document.getElementById("messagePopup");
    popup.textContent=msg;
    popup.classList.add("show");
    setTimeout(()=>popup.classList.remove("show"),3000);
}

const videolink=window.location.href;
const streamlink=videolink.replace("/watch/","/dl/");

function vlc_player(){const p=streamlink.replace(/^https?:\/\//,"");window.location.href=`vlc://${p}`;}
function mx_player(){const p=streamlink.replace(/^https?:\/\//,"");window.location.href=`intent://${p}#Intent;scheme=https;package=com.mxtech.videoplayer.ad;action=android.intent.action.VIEW;end`;}
function playit_player(){const p=streamlink.replace(/^https?:\/\//,"");window.location.href=`intent://${p}#Intent;package=com.playit.videoplayer;action=android.intent.action.VIEW;end`;}
function Download(){window.location.href=streamlink;}

function shareButton(){
    if(navigator.share){
        navigator.share({title:document.title,text:`Watch HD Video`,url:window.location.href});
    }else alert("Browser doesn't support sharing.");
}

window.copy_url=async()=>{
    await navigator.clipboard.writeText(window.location.href);
    showMessage("URL copied!","success");
};

document.addEventListener("contextmenu",e=>{e.preventDefault();showMessage("Right-click disabled","error")});
document.addEventListener("keydown",e=>{
    if(e.key==="F12"||(e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key))){
        e.preventDefault();
        showMessage("Developer Tools Blocked","error");
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    const footer=document.createElement("footer");
    footer.innerHTML=`<h5>© 2025 <a href="https://t.me/Mrn_Officialx" style="color:#0af;">Mrn_Officialx</a></h5>`;
    document.body.appendChild(footer);
});
