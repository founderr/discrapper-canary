r.d(n, {
    as: function () {
        return s;
    },
    tX: function () {
        return l;
    }
});
let i = 'undefined' != typeof global ? global : self,
    a = i.MutationObserver || i.WebKitMutationObserver;
function s(e) {
    return function () {
        let n = setTimeout(i, 0),
            r = setInterval(i, 50);
        function i() {
            clearTimeout(n), clearInterval(r), e();
        }
    };
}
function o(e) {
    let n = 1,
        r = new a(e),
        i = document.createTextNode('');
    return (
        r.observe(i, { characterData: !0 }),
        function () {
            (n = -n), (i.data = n);
        }
    );
}
let l = 'function' == typeof a ? o : s;
