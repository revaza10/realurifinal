function toggleMenu() {
    var menu = document.querySelector('.hidden-menu');
    menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
  
    // var navLinks = document.querySelectorAll('.navbar a');
    // navLinks.forEach(link => {
    //   link.style.display === 'block' ? link.style.display = 'none' : link.style.display = 'block';
    // });
    
  }
  document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
  
    dropdownToggle.addEventListener('click', function() {
      var dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownMenu.classList.toggle('active');
    });
  });