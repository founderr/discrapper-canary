n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
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
        [l, s] = o.useState(0),
        [m, v] = o.useState(0),
        [g, E] = o.useState(0),
        x = o.useRef(0),
        [C, Z] = o.useState(0),
        { timeToLiveMs: _, reappearTimeMs: I } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            a()
        ),
        S = {
            timeToLiveMs: _,
            reappearTimeMs: I
        },
        b = o.useRef(S);
    o.useEffect(() => void (b.current = S)),
        o.useEffect(
            () => (
                (x.current = setInterval(() => {
                    let e = Date.now();
                    v(e),
                        E((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                o = i + b.current.reappearTimeMs;
                            return n > i ? t + o : t;
                        });
                }, 100)),
                () => {
                    clearInterval(x.current);
                }
            ),
            []
        );
    let N = () => {
            s(Date.now()), Z((e) => e + 1);
        },
        O = l > 0 && m - l < 1000,
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
                                  onClick: N,
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
