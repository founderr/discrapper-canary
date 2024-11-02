n.d(t, {
    d: function () {
        return d;
    },
    h: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(703533),
    s = n(399606),
    o = n(607070),
    l = n(981631);
let u = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.dG4,
        removeClickListener: l.dG4
    },
    c = i.createContext(u);
function d(e) {
    let { children: t, confettiCanvas: n, spriteCanvas: l, baseConfig: d, addClickListener: f, removeClickListener: _ } = e,
        h = (0, a.uR)(n, l),
        p = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        m = i.useMemo(
            () =>
                p
                    ? u
                    : {
                          confettiCanvas: n,
                          cannon: h,
                          createConfetti: (e, t) =>
                              h.createConfetti(
                                  {
                                      ...d,
                                      ...e
                                  },
                                  t
                              ),
                          createConfettiAt: (e, t, n, r) =>
                              h.createConfetti(
                                  {
                                      ...d,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: t
                                          }
                                      },
                                      ...n
                                  },
                                  r
                              ),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ...d,
                                      ...e
                                  },
                                  t,
                                  n
                              );
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  i = arguments.length > 4 ? arguments[4] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ...d,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: t
                                          }
                                      },
                                      ...n
                                  },
                                  r,
                                  i
                              );
                          },
                          addClickListener: f,
                          removeClickListener: _
                      },
            [f, d, h, n, p, _]
        );
    return (0, r.jsx)(c.Provider, {
        value: m,
        children: t
    });
}
