r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(653041);
var a = r(47120);
function s(e, n, r) {
    let i;
    let a = [],
        s = function () {
            for (var o = arguments.length, l = Array(o), u = 0; u < o; u++) l[u] = arguments[u];
            let c = Date.now();
            for (null != i && (clearTimeout(i), (i = null)); a.length > 0 && a[0] <= c; ) a.shift();
            a.length < e ? (a.push(c + n), r(...l)) : (i = setTimeout(() => s(...l), a[0] - c));
        };
    return s;
}
