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
    d = n(481060),
    c = n(667142),
    h = n(333031),
    f = n(290510);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [o, s] = l.useState(0),
        [m, g] = l.useState(0),
        [v, E] = l.useState(0),
        Z = l.useRef(0),
        [C, x] = l.useState(0),
        { timeToLiveMs: S, reappearTimeMs: I } = c.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            a()
        ),
        _ = {
            timeToLiveMs: S,
            reappearTimeMs: I
        },
        O = l.useRef(_);
    l.useEffect(() => void (O.current = _)),
        l.useEffect(
            () => (
                (Z.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        E((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = O.current.timeToLiveMs,
                                l = i + O.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(Z.current);
                }
            ),
            []
        );
    let N = () => {
            s(Date.now()), x((e) => e + 1);
        },
        y = o > 0 && m - o < 1000,
        T = (0, d.useTransition)(v > 0 && v < m && m - v < S, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        });
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: T(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(u.animated.div, {
                          style: e,
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: r()(f.clickZone, y && f.clickBackground),
                              children: (0, i.jsx)(d.Clickable, {
                                  onClick: N,
                                  className: f.clickable,
                                  children: (0, i.jsxs)(d.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', C, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
