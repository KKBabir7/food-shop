//open and close tab menu
$('.nav-tabs-dropdown')
    .on("click", "li:not('.active') a", function(event) {  $(this).closest('ul').removeClass("open");
    })
    .on("click", "li.active a", function(event) {        $(this).closest('ul').toggleClass("open");
    });


//totlip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


  $(function(){  
  
     $('#dismiss, .overlay').on('click', function () {
         $('#navbar-sidebar').removeClass('active');
        
     });
     $('#sidebarCollapse').on('click', function () {
     $('#navbar-sidebar').addClass('active');
     $('.collapse.in').toggleClass('in');
    
     });
 });

//seacrhbar
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);
let titles = document.querySelectorAll('.items-menu .row ');
let searchTerm = '';
let tit = '';

function search(e) {

  searchTerm = e.target.value.toLowerCase();

  titles.forEach((title) => {
  
    tit = title.textContent.toLowerCase();
   
    tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';
  });
}



// back to top 
		
const scrollToTopButton = document.getElementById('js-top');
window.addEventListener('scroll', () => {
  let ye = window.scrollY;
  if (ye > 100) {
    scrollToTopButton.style.bottom = '10px'
  } else {
    scrollToTopButton.style.bottom = '-200px'
  }
})

// clousp media quary
function doSomething(matches) {

    if (matches) {
        $('.menuCatagory').attr('data-toggle','collapse');
    } else {   
        return false
    }
}
const query = window.matchMedia("(max-width: 992px)");
query.addEventListener("change", ({ matches }) => doSomething(matches));
doSomething(query.matches);