
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function openTab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
                console.log(tabcontent)

            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }
// opentab(tabname)


const sidemenu=document.getElementById("sidemenu");
console.log(sidemenu);
function closemenu(){
    sidemenu.style.right="-200px"
}

function openmenu(){
    sidemenu.style.right="0"
}