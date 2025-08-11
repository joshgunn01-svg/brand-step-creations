// Smooth scrolling for anchor links within the primary menu (no jQuery)
(function(){
  function smoothScroll(e){
    if (!(e.target instanceof HTMLAnchorElement)) return;
    var href = e.target.getAttribute('href') || '';
    if (href.startsWith('#')) {
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    }
  }
  document.addEventListener('click', smoothScroll);
})();
