n.d(t, {
    d: function () {
        return _;
    },
    h: function () {
        return d;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(887024),
    o = n(399606),
    s = n(607070),
    l = n(981631);
let u = 20,
    c = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.dG4,
        removeClickListener: l.dG4
    },
    d = i.createContext(c);
function _(e) {
    let { children: t, confettiCanvas: n, spriteCanvas: l, baseConfig: _, addClickListener: E, removeClickListener: f } = e,
        h = (0, a.uR)(n, l),
        p = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        m = i.useMemo(
            () =>
                p
                    ? c
                    : {
                          confettiCanvas: n,
                          cannon: h,
                          createConfetti: (e, t) =>
                              h.createConfetti(
                                  {
                                      ..._,
                                      ...e
                                  },
                                  t
                              ),
                          createConfettiAt: (e, t, n, r) =>
                              h.createConfetti(
                                  {
                                      ..._,
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
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ..._,
                                      ...e
                                  },
                                  t,
                                  n
                              );
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
                                  i = arguments.length > 4 ? arguments[4] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ..._,
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
                          addClickListener: E,
                          removeClickListener: f
                      },
            [E, _, h, n, p, f]
        );
    return (0, r.jsx)(d.Provider, {
        value: m,
        children: t
    });
}
