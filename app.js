window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("navbar").style.background = "#fff";
      document.getElementById("logo").style.fontSize = "20px";
      document.getElementById("logo").style.color = "#000";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("logo").style.color = "#fff"; 
      document.getElementById("logo").style.fontSize = "24px";
    }
  }s