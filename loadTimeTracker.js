var startTime = new Date().getTime();

window.addEventListener('load', function () {
    var endTime = new Date().getTime();
    var loadTime = endTime - startTime;

    console.log('Page load time: ' + loadTime + ' milliseconds');

    var footer = document.createElement('footer');
    footer.innerHTML = 'Page load time: ' + loadTime + ' milliseconds';
    document.body.appendChild(footer);
});
