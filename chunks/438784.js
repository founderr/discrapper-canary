n.d(t, {
    I: function () {
        return h;
    },
    b: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(481060),
    u = n(554676);
function c() {
    return document.hasFocus();
}
let d = {
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
    f = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0
    };
function _(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let h = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = 'currentColor', spacing: s = 2.5 } = e,
            u = i.useRef(c()),
            d = i.useRef(!0);
        i.useEffect(() => () => void (d.current = !1), []);
        let [h] = (0, l.useSpring)(
                () => ({
                    ...f,
                    to: async (e) => {
                        let t = 2.8;
                        for (; d.current; ) {
                            (u.current = c()),
                                u.current
                                    ? ((t += 4),
                                      await e({
                                          dotCycle: t,
                                          immediate: !1
                                      }))
                                    : 2.8 !== t
                                      ? ((t = 2.8),
                                        await e({
                                            dotCycle: t,
                                            immediate: !0
                                        }))
                                      : await new Promise((e) => setTimeout(e, 1000));
                        }
                    }
                }),
                'animate-always'
            ),
            p = (6 * t + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = 0.25 * e,
                    l = t + t * s * e;
                return (0, r.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [p, l]) : l,
                        cy: t,
                        r: h.dotCycle
                            .to((e) => _(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (u.current ? e : t)),
                        fill: a,
                        style: {
                            opacity: h.dotCycle
                                .to((e) => _(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (u.current ? e : 1))
                        }
                    },
                    e
                );
            })
        });
    }),
    p = i.memo(
        i.forwardRef(function (e, t) {
            let { dotRadius: n, x: i, y: a, hide: f = !1, themed: _ = !1, className: p } = e;
            return (0, l.useTransition)(
                f,
                {
                    ...d,
                    key: (e) => (e ? 'true' : 'false')
                },
                c() ? 'animate-always' : 'animate-never'
            )((e, l, c) => {
                let { dotPosition: d } = e,
                    { key: f } = c;
                return l
                    ? null
                    : (0, r.jsx)(
                          'svg',
                          {
                              ref: t,
                              x: i,
                              y: a,
                              width: 6 * n + (n / 2) * 2,
                              height: 2 * n,
                              className: s()(p, u.dots, _ ? u.themed : null),
                              children: (0, r.jsx)(o.animated.g, {
                                  style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
                                  children: (0, r.jsx)(h, {
                                      dotRadius: n,
                                      dotPosition: d
                                  })
                              })
                          },
                          f
                      );
            });
        })
    );
