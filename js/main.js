(function($) {

	"use strict";

	$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  
  });

  $(".toggle-password2").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }

  });

})(jQuery);

//modal on click
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
      const modal = document.getElementById(id);
      modalWrapper.style.display = "flex";
      modal.style.display = "flex";
      //close modal
      const close = document.getElementById("close-modal")
      close.addEventListener("click", () =>{
          modalWrapper.style.display = "none";
          modal.style.display = "none";
      })
    }
}

// copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
  copy.onclick = () =>{
    let elementToCopy = copy.previousElementSibling;
    elementToCopy.select();
    document.execCommand("copy");
  }
})

const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}