n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n(500923),
    a = n.n(s),
    o = n(963838),
    c = n(353368),
    u = n(48549);
let d = async (e) => {
    var t;
    let { animationType: n, animationId: i, url: l, shouldResize: s } = e,
        a = null !== (t = o.Jw[n]) && void 0 !== t ? t : o.Jw[c.q.BASIC],
        u = JSON.parse(JSON.stringify(null != i && i < a.length ? a[i] : (0, r.sample)(a)));
    return (u.assets[0].p = s ? await (0, o.lv)(l) : l), u;
};
function h(e) {
    let { containerDimensions: t, effect: n, onComplete: r } = e,
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            let e;
            return (
                !(async function () {
                    if (null != s.current) {
                        let t = await d(n);
                        (e = a().loadAnimation({
                            container: s.current,
                            renderer: 'svg',
                            loop: !1,
                            autoplay: !0,
                            animationData: t,
                            rendererSettings: { preserveAspectRatio: 'xMidYMax slice' }
                        })),
                            n.animationType === c.q.PREMIUM && e.setSpeed(0.8),
                            e.addEventListener('complete', () => (null == r ? void 0 : r(n.id)));
                    }
                })(),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [r, n]),
        (0, i.jsx)('div', {
            className: u.effect,
            style: {
                height: t.height,
                width: t.width
            },
            ref: s
        })
    );
}
