r.d(n, {
    Z: function () {
        return s;
    },
    v: function () {
        return a;
    }
});
let i = '@silent',
    a = new RegExp('^'.concat(i, '(\\s|$)'));
function s(e) {
    return null == e ? [!1, ''] : null == e.match(a) ? [!1, e] : [!0, e.substring(i.length).trim()];
}
