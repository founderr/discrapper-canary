n.d(t, {
    m: function () {
        return _;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(752877),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(745510),
    f = n(762817);
function _(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: r, setShouldFireConfetti: i, tooltipProps: d } = e,
        [_, p] = s.useState(0),
        h = s.useRef(-1),
        m = s.useRef(!0),
        g = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { scaleFactor: E } = (0, u.useSpring)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === _ ? 0.9 : 2 === _ ? 1.2 : 1 },
            config: {
                tension: 380,
                friction: 7
            }
        });
    return (s.useEffect(
        () => () => {
            m.current = !1;
        },
        []
    ),
    g)
        ? (0, a.jsx)(a.Fragment, { children: t })
        : (0, a.jsx)(o.animated.div, {
              className: f.confettiTriggerWrapper,
              style: { transform: E.to((e) => 'scale('.concat(e, ')')) },
              children: (0, a.jsx)(u.Clickable, {
                  className: f.confettiTrigger,
                  onMouseDown: () => {
                      p(1),
                          i(!0),
                          r((e) => Math.min(e + 2, 200)),
                          window.clearTimeout(h.current),
                          (h.current = window.setTimeout(() => {
                              m.current && r(0);
                          }, 200));
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
((i = r || (r = {}))[(i.INACTIVE = 0)] = 'INACTIVE'), (i[(i.PRESSED = 1)] = 'PRESSED'), (i[(i.HOVERED = 2)] = 'HOVERED');
t.Z = function (e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: r } = e,
        { cannon: i, createMultipleConfettiAt: a } = s.useContext(d.h),
        o = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    return (
        s.useEffect(
            () => () => {
                null == i || i.clearConfetti();
            },
            [i]
        ),
        s.useEffect(() => {
            if (!r || o || null == n.current) return;
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
                Math.max(t, 20)
            );
        }, [t, n, a, r, o]),
        null
    );
};
