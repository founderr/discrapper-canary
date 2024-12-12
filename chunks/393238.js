r.d(n, {
    P: function () {
        return o;
    },
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379);
function s() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let [i, s] = a.useState(void 0),
        [l, u] = a.useState(void 0),
        [c, d] = a.useState(void 0),
        [f, _] = a.useState(void 0),
        h = a.useRef(null);
    return (
        o(
            h,
            (e) => {
                let { width: n, height: r, scrollWidth: i, scrollHeight: a } = e;
                u(r), s(n), d(i), _(a);
            },
            n
        ),
        {
            ref: h,
            width: i,
            height: l,
            scrollHeight: f,
            scrollWidth: c
        }
    );
}
function o(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    a.useLayoutEffect(() => {
        let r = e.current,
            i = null == r ? void 0 : r.ownerDocument.defaultView;
        if (null != r && null != i) {
            let a = new i.ResizeObserver((r) => {
                var i, a, s, o, l, u;
                let c = r[0],
                    d = null == c ? void 0 : null === (a = c.borderBoxSize) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.inlineSize,
                    f = null == c ? void 0 : null === (o = c.borderBoxSize) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s.blockSize;
                if (null == d || null == f) {
                    let n = e.current;
                    if (null != n) {
                        let e = window.getComputedStyle(n);
                        null == d && (d = parseFloat(null !== (l = e.width) && void 0 !== l ? l : '0')), null == f && (f = parseFloat(null !== (u = e.height) && void 0 !== u ? u : '0'));
                    }
                }
                n({
                    width: d,
                    height: f,
                    scrollHeight: c.target.scrollHeight,
                    scrollWidth: c.target.scrollWidth
                });
            });
            return a.observe(r), () => a.disconnect();
        }
    }, [e.current, ...r]);
}
