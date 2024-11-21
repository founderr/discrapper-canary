n.d(t, {
    G: function () {
        return s;
    },
    z: function () {
        return i;
    }
});
var r = n(492543);
function i(e, t) {
    let n = a(e, t, 'left'),
        r = a(e, t, 'top'),
        i = t.offsetWidth,
        s = t.offsetHeight,
        o = e.scrollLeft,
        l = e.scrollTop,
        { borderTopWidth: u, borderLeftWidth: c } = getComputedStyle(e),
        d = e.scrollLeft + parseInt(c, 10),
        f = e.scrollTop + parseInt(u, 10),
        _ = d + e.clientWidth,
        p = f + e.clientHeight;
    n <= o ? (o = n - parseInt(c, 10)) : n + i > _ && (o += n + i - _), r <= f ? (l = r - parseInt(u, 10)) : r + s > p && (l += r + s - p), (e.scrollLeft = o), (e.scrollTop = l);
}
function a(e, t, n) {
    let r = 'left' === n ? 'offsetLeft' : 'offsetTop',
        i = 0;
    for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[r];
            break;
        }
        t = t.offsetParent;
    }
    return i;
}
function s(e, t) {
    if (document.contains(e)) {
        let l = document.scrollingElement || document.documentElement;
        if ('hidden' === window.getComputedStyle(l).overflow) for (let t of (0, r.H)(e)) i(t, e);
        else {
            var n, a, s, o;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, { block: 'nearest' });
            let { left: l, top: u } = e.getBoundingClientRect();
            (Math.abs(r - l) > 1 || Math.abs(i - u) > 1) &&
                (null == t ||
                    null === (s = t.containingElement) ||
                    void 0 === s ||
                    null === (a = s.scrollIntoView) ||
                    void 0 === a ||
                    a.call(s, {
                        block: 'center',
                        inline: 'center'
                    }),
                null === (o = e.scrollIntoView) || void 0 === o || o.call(e, { block: 'nearest' }));
        }
    }
}
