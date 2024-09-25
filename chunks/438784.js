n.d(t, {
    I: function () {
        return g;
    },
    b: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(481060),
    c = n(554676);
function d() {
    return new Promise((e) => setTimeout(e, 1000));
}
function _() {
    return document.hasFocus();
}
let E = 0.25,
    f = 4,
    h = 1,
    p = 2.8,
    m = {
        config: {
            friction: 50,
            tension: 900,
            mass: 1
        },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 }
    },
    I = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0
    };
function T(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let g = a.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: r = 'currentColor', spacing: o = 2.5 } = e,
            s = a.useRef(_()),
            c = a.useRef(!0);
        a.useEffect(() => () => void (c.current = !1), []);
        let [m] = (0, u.useSpring)(
                () => ({
                    ...I,
                    to: async (e) => {
                        let t = p;
                        for (; c.current; ) {
                            (s.current = _()),
                                s.current
                                    ? ((t += h * f),
                                      await e({
                                          dotCycle: t,
                                          immediate: !1
                                      }))
                                    : t !== p
                                      ? ((t = p),
                                        await e({
                                            dotCycle: t,
                                            immediate: !0
                                        }))
                                      : await d();
                        }
                    }
                }),
                'animate-always'
            ),
            g = (6 * t + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let a = E * e,
                    u = t + t * o * e;
                return (0, i.jsx)(
                    l.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [g, u]) : u,
                        cy: t,
                        r: m.dotCycle
                            .to((e) => T(e - a))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (s.current ? e : t)),
                        fill: r,
                        style: {
                            opacity: m.dotCycle
                                .to((e) => T(e - a))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (s.current ? e : 1))
                        }
                    },
                    e
                );
            })
        });
    }),
    S = a.memo(
        a.forwardRef(function (e, t) {
            let { dotRadius: n, x: r, y: a, hide: o = !1, themed: d = !1, className: E } = e;
            return (0, u.useTransition)(
                o,
                {
                    ...m,
                    key: (e) => (e ? 'true' : 'false')
                },
                _() ? 'animate-always' : 'animate-never'
            )((e, o, u) => {
                let { dotPosition: _ } = e,
                    { key: f } = u;
                return o
                    ? null
                    : (0, i.jsx)(
                          'svg',
                          {
                              ref: t,
                              x: r,
                              y: a,
                              width: 6 * n + (n / 2) * 2,
                              height: 2 * n,
                              className: s()(E, c.dots, d ? c.themed : null),
                              children: (0, i.jsx)(l.animated.g, {
                                  style: { opacity: _.to((e) => Math.min(1, Math.max(e, 0))) },
                                  children: (0, i.jsx)(g, {
                                      dotRadius: n,
                                      dotPosition: _
                                  })
                              })
                          },
                          f
                      );
            });
        })
    );
