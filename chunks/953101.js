r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
let a = ['allow-pointer-lock', 'allow-scripts', 'allow-same-origin', 'allow-forms'];
function s(e) {
    let { allowPopups: n } = e,
        r = a;
    return n && (r = [...a, 'allow-popups', 'allow-popups-to-escape-sandbox']), r.join(' ');
}
