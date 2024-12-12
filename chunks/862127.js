function i(e, n) {
    return e
        .replace(RegExp('(^|\\s)' + n + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
}
function a(e, n) {
    e.classList ? e.classList.remove(n) : 'string' == typeof e.className ? (e.className = i(e.className, n)) : e.setAttribute('class', i((e.className && e.className.baseVal) || '', n));
}
r.d(n, {
    Z: function () {
        return a;
    }
});
