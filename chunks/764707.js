r(47120);
var n = r(979590),
    a = r.n(n),
    s = r(399606),
    o = r(607070),
    i = r(168631);
let l = (e, t) => {
        let r = e.toRgb(),
            n = t.toRgb(),
            [s, o, l] = (0, i.J2)([r.r, r.g, r.b], [n.r, n.g, n.b], 50);
        return a()({
            r: s,
            g: o,
            b: l
        });
    },
    c = (e, t) =>
        0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                    primary: t[0],
                    secondary: t[0],
                    border: t[0].setAlpha(0.4),
                    label: t[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: t[0],
                    secondary: t[1],
                    border: l(t[0], t[1]).setAlpha(0.4),
                    label: l(t[0], t[1]).isLight() ? e.dark : e.light
                },
    d = (e, t) =>
        0 === t.length
            ? void 0
            : 1 === t.length
              ? {
                    primary: t[0],
                    secondary: t[0],
                    text: t[0].isLight() ? e.dark : e.light
                }
              : {
                    primary: t[0],
                    secondary: t[1],
                    text: l(t[0], t[1]).isLight() ? e.dark : e.light
                },
    u = (e, t) => {
        let { h: r, s: n, l: s } = e.toHsl();
        return a()({
            h: r,
            s: n * t,
            l: s
        });
    };
t.Z = (e) => (t) => {
    let r = (0, s.e7)([o.Z], () => o.Z.saturation);
    if (null == t) return {};
    let n = {
        backgroundColors: c(e, t.backgroundColors),
        buttonColors: d(e, t.buttonColors),
        confettiColors: t.confettiColors
    };
    return 1 === r
        ? { ...n }
        : {
              backgroundColors:
                  null != n.backgroundColors
                      ? {
                            primary: u(n.backgroundColors.primary, r),
                            secondary: u(n.backgroundColors.secondary, r),
                            border: u(n.backgroundColors.border, r),
                            label: u(n.backgroundColors.label, r)
                        }
                      : void 0,
              buttonColors:
                  null != n.buttonColors
                      ? {
                            primary: u(n.buttonColors.primary, r),
                            secondary: u(n.buttonColors.secondary, r),
                            text: u(n.buttonColors.text, r)
                        }
                      : void 0,
              confettiColors: n.confettiColors.map((e) => u(e, r))
          };
};
