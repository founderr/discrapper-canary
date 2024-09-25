n.d(t, {
    m: function () {
        return p;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(526629),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(745510),
    _ = n(762817);
let E = 200,
    f = 20,
    h = 200;
function p(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: r, setShouldFireConfetti: i, tooltipProps: d } = e,
        [f, p] = o.useState(0),
        m = o.useRef(-1),
        I = o.useRef(!0),
        T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { scaleFactor: g } = (0, u.useSpring)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === f ? 0.9 : 2 === f ? 1.2 : 1 },
            config: {
                tension: 380,
                friction: 7
            }
        });
    return (o.useEffect(
        () => () => {
            I.current = !1;
        },
        []
    ),
    T)
        ? (0, a.jsx)(a.Fragment, { children: t })
        : (0, a.jsx)(s.animated.div, {
              className: _.confettiTriggerWrapper,
              style: { transform: g.to((e) => 'scale('.concat(e, ')')) },
              children: (0, a.jsx)(u.Clickable, {
                  className: _.confettiTrigger,
                  onMouseDown: () => {
                      p(1),
                          i(!0),
                          r((e) => Math.min(e + 2, h)),
                          window.clearTimeout(m.current),
                          (m.current = window.setTimeout(() => {
                              I.current && r(0);
                          }, E));
                  },
                  onMouseUp: () => {
                      p(0), i(!1);
                  },
                  onMouseEnter: () => {
                      var e;
                      p(2), null == d || null === (e = d.onMouseEnter) || void 0 === e || e.call(d);
                  },
                  onMouseLeave: () => {
                      var e;
                      p(0), null == d || null === (e = d.onMouseLeave) || void 0 === e || e.call(d);
                  },
                  innerRef: n,
                  children: t
              })
          });
}
function m(e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: r } = e,
        { cannon: i, createMultipleConfettiAt: a } = o.useContext(d.h),
        s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    return (
        o.useEffect(
            () => () => {
                null == i || i.clearConfetti();
            },
            [i]
        ),
        o.useEffect(() => {
            if (!r || s || null == n.current) return;
            let e = n.current.getBoundingClientRect(),
                i = e.left + e.width / 2;
            a(
                i,
                e.top + e.height / 2,
                {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -180,
                            y: -180
                        },
                        maxValue: {
                            x: 180,
                            y: 180
                        }
                    }
                },
                Math.max(t, f)
            );
        }, [t, n, a, r, s]),
        null
    );
}
!(function (e) {
    (e[(e.INACTIVE = 0)] = 'INACTIVE'), (e[(e.PRESSED = 1)] = 'PRESSED'), (e[(e.HOVERED = 2)] = 'HOVERED');
})(r || (r = {})),
    (t.Z = m);
