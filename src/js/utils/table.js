const tables = document.querySelectorAll('.wp-block-table');
if (tables.length) {
    tables.forEach(table => {
        if (!table.classList.contains('_scroll')) return;

        const tableElem = table.querySelector('table');
        let tableWidth = tableElem.offsetWidth  + 'px';
        const caption = table.querySelector('figcaption')
        if (!caption) return;

        window.addEventListener('resize', function () {
            setWidth();
        })
        setWidth();

        function setWidth() {
            if (window.innerWidth <= 992) {
                tableWidth = tableElem.offsetWidth - 60 + 'px';
            }
            else {
                tableWidth = '100%'
            }
            caption.style.width = tableWidth;
        }
    })
}