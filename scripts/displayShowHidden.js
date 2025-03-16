document.getElementById('getShow').addEventListener('click',function() {
    const inputPass=document.getElementById('inputPass').value;
    const inputName=document.getElementById('inputName').value;
    console.log(inputPass);

    if (inputName==='') {
      alert('Enter Name')
    }
 else if (inputPass==='123456') {
    document.getElementById('hedar').classList.remove('hidden')
    document.getElementById('learn').classList.remove('hidden')
    document.getElementById('faq').classList.remove('hidden')
    document.getElementById('banner').classList.add('hidden')

    // aleart

    Swal.fire({
        title: "অভিনন্দন!",
        text: "এগিয়ে যান!",
        icon: "success"
      });



      const learnSection = document.getElementById("learn");
      const faqSection = document.getElementById("faq");

      if (window.location.hash === "#learn") {
        history.replaceState(null, null, window.location.pathname);
        learnSection.scrollIntoView({ behavior: "smooth" });
        window.location.hash = "#learn"; 
    } else if (window.location.hash === "#faq") {
        history.replaceState(null, null, window.location.pathname);
        faqSection.scrollIntoView({ behavior: "smooth" });
        window.location.hash = "#faq"; 
    } else {
        history.replaceState(null, null, window.location.pathname);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


     
  }else{
    alert('worng password')
  }
})


const hiddenLogout=()=>{
    document.getElementById('hedar').classList.add('hidden')
    document.getElementById('learn').classList.add('hidden')
    document.getElementById('faq').classList.add('hidden')
    document.getElementById('banner').classList.remove('hidden')
}

