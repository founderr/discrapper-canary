n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(374470);
function s(e, t) {
    let n = e.offsetTop,
        s = e.offsetParent;
    for (; null != s; ) {
        var a;
        if (s === t || !(0, i.k)(s, HTMLElement)) break;
        (n += null !== (a = s.offsetTop) && void 0 !== a ? a : 0), (s = s.offsetParent);
    }
    return n;
}
