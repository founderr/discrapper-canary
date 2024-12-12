n.extend = i;
var r = Object.prototype.hasOwnProperty;
function i(e) {
    var n,
        i,
        a,
        s,
        o = Array.prototype.slice.call(arguments, 1);
    for (n = 0, i = o.length; n < i; n += 1) {
        if (!!(a = o[n])) for (s in a) r.call(a, s) && (e[s] = a[s]);
    }
    return e;
}
n.hop = r;
