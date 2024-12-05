n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(348327),
    a = n.n(s),
    u = n(752877),
    c = n(481060),
    d = n(667142),
    h = n(333031),
    f = n(70491);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [o, s] = l.useState(0),
        [m, v] = l.useState(0),
        [g, E] = l.useState(0),
        C = l.useRef(0),
        [x, Z] = l.useState(0),
        { timeToLiveMs: _, reappearTimeMs: S } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            a()
        ),
        I = {
            timeToLiveMs: _,
            reappearTimeMs: S
        },
        N = l.useRef(I);
    l.useEffect(() => void (N.current = I)),
        l.useEffect(
            () => (
                (C.current = setInterval(() => {
                    let e = Date.now();
                    v(e),
                        E((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = N.current.timeToLiveMs,
                                l = i + N.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(C.current);
                }
            ),
            []
        );
    let b = () => {
            s(Date.now()), Z((e) => e + 1);
        },
        O = o > 0 && m - o < 1000,
        y = (0, c.useTransition)(g > 0 && g < m && m - g < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        });
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: y(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(u.animated.div, {
                          style: e,
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: r()(f.clickZone, O && f.clickBackground),
                              children: (0, i.jsx)(c.Clickable, {
                                  onClick: b,
                                  className: f.clickable,
                                  children: (0, i.jsxs)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', x, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
