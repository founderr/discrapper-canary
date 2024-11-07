n.d(t, {
    l: function () {
        return h;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(846519),
    c = n(186325),
    d = n(191539);
((i = r || (r = {}))[(i.TRANSLATE = 1)] = 'TRANSLATE'), (i[(i.SCALE = 2)] = 'SCALE'), (i[(i.FADE = 3)] = 'FADE');
let f = Object.freeze({
        1: d.translate,
        2: d.scale,
        3: d.fade
    }),
    _ = Object.freeze({
        top: d.animatorTop,
        bottom: d.animatorBottom,
        left: d.animatorLeft,
        right: d.animatorRight,
        center: d.animatorCenter,
        window_center: d.animatorCenter
    });
function h(e) {
    let { position: t, type: n, children: r } = e,
        { reducedMotion: i } = s.useContext(c.S),
        o = i.enabled ? 3 : n,
        [h, p] = s.useState(null != t),
        [m] = s.useState(() => new u.V7()),
        [g, E] = s.useState(!0),
        v = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            var e;
            null === (e = v.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    E(!1);
                }),
                setTimeout(() => {
                    E(!1);
                }, 200);
        }, []),
        s.useEffect(() => () => m.stop(), [m]),
        s.useEffect(() => {
            null != t && m.start(10, () => p(!0));
        }, [t, m]),
        (0, a.jsx)('div', {
            'data-popout-animating': g,
            className: l()(null != t ? _[t] : null, {
                [f[o]]: null != t,
                [d.didRender]: h
            }),
            children: r
        })
    );
}
h.Types = r;
