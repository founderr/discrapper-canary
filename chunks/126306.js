n.d(t, {
    l: function () {
        return h;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(846519),
    c = n(186325),
    d = n(647338);
let _ = 200;
!(function (e) {
    (e[(e.TRANSLATE = 1)] = 'TRANSLATE'), (e[(e.SCALE = 2)] = 'SCALE'), (e[(e.FADE = 3)] = 'FADE');
})(r || (r = {}));
let E = Object.freeze({
        1: d.translate,
        2: d.scale,
        3: d.fade
    }),
    f = Object.freeze({
        top: d.animatorTop,
        bottom: d.animatorBottom,
        left: d.animatorLeft,
        right: d.animatorRight,
        center: d.animatorCenter,
        window_center: d.animatorCenter
    });
function h(e) {
    let { position: t, type: n, children: r } = e,
        { reducedMotion: i } = o.useContext(c.S),
        s = i.enabled ? 3 : n,
        [h, p] = o.useState(null != t),
        [m] = o.useState(() => new u.V7()),
        [I, T] = o.useState(!0),
        g = o.useRef(null);
    return (
        o.useLayoutEffect(() => {
            var e;
            null === (e = g.current) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                    T(!1);
                }),
                setTimeout(() => {
                    T(!1);
                }, _);
        }, []),
        o.useEffect(() => () => m.stop(), [m]),
        o.useEffect(() => {
            null != t && m.start(10, () => p(!0));
        }, [t, m]),
        (0, a.jsx)('div', {
            'data-popout-animating': I,
            className: l()(null != t ? f[t] : null, {
                [E[s]]: null != t,
                [d.didRender]: h
            }),
            children: r
        })
    );
}
h.Types = r;
