var ctrlSave = false; //if you want to crtl save make it true
var rightclick = true; //if you want to right click or inspect make it true
var f12 = false; //if you want to f12 or see the code

// Validation of Keys
//avoid crtl+s
if (!ctrlSave){
  window.addEventListener("keydown", function (e) {
    if (
      e.keyCode == 83 &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault()
    }
  })
}
//Disable right click
if (!rightclick) {
  document.oncontextmenu = function () {
    console.log("right click disabled")
    return false
  }
}
//Prohibit f12 from developing source code
if (!f12) {
  document.onkeydown = function () {
    var e = window.event || arguments[0]
    if (e.keyCode == 123) {
      console.log("can't f12")
      return false
    }
  }
}