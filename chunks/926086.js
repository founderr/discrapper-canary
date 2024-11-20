n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    u = n(100621),
    c = n(481060),
    d = n(667142),
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
        [l, a] = r.useState(0),
        [m, v] = r.useState(0),
        [g, E] = r.useState(0),
        _ = r.useRef(0),
        [C, S] = r.useState(0),
        { timeToLiveMs: Z, reappearTimeMs: I } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        x = {
            timeToLiveMs: Z,
            reappearTimeMs: I
        },
        N = r.useRef(x);
    r.useEffect(() => void (N.current = x)),
        r.useEffect(
            () => (
                (_.current = setInterval(() => {
                    let e = Date.now();
                    v(e),
                        E((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = N.current.timeToLiveMs,
                                r = i + N.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(_.current);
                }
            ),
            []
        );
    let O = () => {
            a(Date.now()), S((e) => e + 1);
        },
        T = l > 0 && m - l < 1000,
        b = (0, c.useTransition)(g > 0 && g < m && m - g < Z, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        });
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: b(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(u.animated.div, {
                          style: e,
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: o()(f.clickZone, T && f.clickBackground),
                              children: (0, i.jsx)(c.Clickable, {
                                  onClick: O,
                                  className: f.clickable,
                                  children: (0, i.jsxs)(c.Text, {
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
