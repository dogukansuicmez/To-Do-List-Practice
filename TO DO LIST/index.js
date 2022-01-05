/***********
ALTTA LOCAL STORAGE ile ilgili bilmediğim şeyler var onları da tam olarak
öğrendikten sonra bu proje biter güzel bir TO-DO list
40. ve 70. satırlarda bu local storage'lar

********/






$("#myform").submit(function(event) {

  event.preventDefault();
  let myVAL = document.querySelector("#myinput").value;
  if (myVAL) {
    createElementFunct(myVAL)

    document.querySelector("#myinput").value = ""

  } else {
    
    $("body").css("background-image","none");
    $("body").css("background-color","grey")
    $(".pop-up").removeClass("hidden");
    $("#ilksect").css("opacity","0");

    $("body").keydown(function(event) {
      var pressedKey = event.key;
      if (pressedKey.length >0) {
        $("#ilksect").css("opacity","1");
        $(".pop-up").addClass("hidden");
        $("body").css("background-image","linear-gradient(to right, red , blue)");
        $("body").css("background-color","none")
      }
    })
  }







  $("li").mouseover(function() {
    $(this).children("button.var").removeClass("hidden");
    $(this).children("button.yok").removeClass("hidden");
    // $(this).children("button.okay").removeClass("hidden"); buna gerek yok yeni kodu yazdıktan sonra ama kalsın gene de


  })


  // localStorage.removeItem(`${li.innerHTML}.elemanı`) /*eleman silerken local storage'dan da silmek istedim ama olmadı EKSİKLİKLER var*/

  $("li").mouseleave(function() {
    $(this).children("button.yok").addClass("hidden");
    $(this).children("button.var").addClass("hidden");
    // $(this).children("button.okay").addClass("hidden") buna gerek yok yeni kodu yazdıktan sonra ama kalsın gene de

  })



  $("button.okay").click(function() {
    $(this).parent().removeClass("text-dec");
    $(this).addClass("hidden")
  })
  $("button.yok").click(function() {
    $(this).parent().addClass("text-dec");
    $(this).parent().children("button.okay").removeClass("hidden")
  })
  $("button.var").click(function() {
    console.log(this)
    $(this).parent().remove();

  })



})




let userLIST = $(".userlist")

function createElementFunct(whattodo) {
  let liLIST = document.createElement("li");

  liLIST.innerHTML = `${whattodo} <button class="cikkapa hidden yok" >😁</button> <button class="cikkapa hidden okay">😡</button> <button class="cikkapa hidden var" > 🗑️ </button>`;

  $("ul").append(liLIST)

  console.log(whattodo)
  // localStorage.setItem(`${whattodo}.elemanı`,whattodo) /*bunu ekledim ama hala eksiklikler var*/


}
