n.d(t, {
    P: function () {
        return o;
    },
    Z: function () {
        return a;
    }
});
var r = n(47120);
var i = n(470079);
function a() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, a] = i.useState(void 0),
        [s, l] = i.useState(void 0),
        [u, c] = i.useState(void 0),
        [d, _] = i.useState(void 0),
        E = i.useRef(null);
    return (
        o(
            E,
            (e) => {
                let { width: t, height: n, scrollWidth: r, scrollHeight: i } = e;
                l(n), a(t), c(r), _(i);
            },
            t
        ),
        {
            ref: E,
            width: r,
            height: s,
            scrollHeight: d,
            scrollWidth: u
        }
    );
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    i.useLayoutEffect(() => {
        let n = e.current,
            r = null == n ? void 0 : n.ownerDocument.defaultView;
        if (null != n && null != r) {
            let i = new r.ResizeObserver((n) => {
                var r, i, a, o, s, l;
                let u = n[0],
                    c = null == u ? void 0 : null === (i = u.borderBoxSize) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.inlineSize,
                    d = null == u ? void 0 : null === (o = u.borderBoxSize) || void 0 === o ? void 0 : null === (a = o[0]) || void 0 === a ? void 0 : a.blockSize;
                if (null == c || null == d) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == c && (c = parseFloat(null !== (s = e.width) && void 0 !== s ? s : '0')), null == d && (d = parseFloat(null !== (l = e.height) && void 0 !== l ? l : '0'));
                    }
                }
                t({
                    width: c,
                    height: d,
                    scrollHeight: u.target.scrollHeight,
                    scrollWidth: u.target.scrollWidth
                });
            });
            return i.observe(n), () => i.disconnect();
        }
    }, [e.current, ...n]);
}
