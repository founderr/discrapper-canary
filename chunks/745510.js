r.d(n, {
    d: function () {
        return _;
    },
    h: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(119617),
    o = r(399606),
    l = r(607070),
    u = r(981631);
let c = 20,
    d = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => u.dG4,
        removeClickListener: u.dG4
    },
    f = a.createContext(d);
function _(e) {
    let { children: n, confettiCanvas: r, spriteCanvas: u, baseConfig: _, addClickListener: h, removeClickListener: p } = e,
        m = (0, s.uR)(r, u),
        g = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        E = a.useMemo(
            () =>
                g
                    ? d
                    : {
                          confettiCanvas: r,
                          cannon: m,
                          createConfetti: (e, n) =>
                              m.createConfetti(
                                  {
                                      ..._,
                                      ...e
                                  },
                                  n
                              ),
                          createConfettiAt: (e, n, r, i) =>
                              m.createConfetti(
                                  {
                                      ..._,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: n
                                          }
                                      },
                                      ...r
                                  },
                                  i
                              ),
                          createMultipleConfetti: function (e) {
                              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                                  r = arguments.length > 2 ? arguments[2] : void 0;
                              return m.createMultipleConfetti(
                                  {
                                      ..._,
                                      ...e
                                  },
                                  n,
                                  r
                              );
                          },
                          createMultipleConfettiAt: function (e, n, r) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
                                  a = arguments.length > 4 ? arguments[4] : void 0;
                              return m.createMultipleConfetti(
                                  {
                                      ..._,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: n
                                          }
                                      },
                                      ...r
                                  },
                                  i,
                                  a
                              );
                          },
                          addClickListener: h,
                          removeClickListener: p
                      },
            [h, _, m, r, g, p]
        );
    return (0, i.jsx)(f.Provider, {
        value: E,
        children: n
    });
}
