const navlinks=document.querySelectorAll('.nav-link');
const activePage=window.location.pathname;

navlinks.forEach(link => {
    const navlinkpath=new URL(link.href).pathname;
    if(navlinkpath==activePage){
        
        link.classList.add('active');
        
    }
    
});
 // Get references to the checkbox and link
 const checkbox = document.getElementById('myCheckbox');
 const nextLink = document.getElementById('next-link');
 const tnextLink = document.getElementById('tnext-link');

 // Add a click event listener to the checkbox
 checkbox.addEventListener('click', function() {
     // Enable or disable the link based on the checkbox state
     if (checkbox.checked) {
         nextLink.removeAttribute('disabled');
         tnextLink.removeAttribute('disabled'); // Enable the link
     } else {
         nextLink.setAttribute('disabled', 'disabled');
         tnextLink.setAttribute('disabled', 'disabled'); // Disable the link
     }
 });