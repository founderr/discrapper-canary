n(47120);
var r = n(979590),
    a = n.n(r),
    i = n(399606),
    o = n(607070),
    s = n(168631);
let l = (t, e) => {
        let n = t.toRgb(),
            r = e.toRgb(),
            [i, o, l] = (0, s.J2)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
        return a()({
            r: i,
            g: o,
            b: l
        });
    },
    c = (t, e) =>
        0 === e.length
            ? void 0
            : 1 === e.length
              ? {
                    primary: e[0],
                    secondary: e[0],
                    border: e[0].setAlpha(0.4),
                    label: e[0].isLight() ? t.dark : t.light
                }
              : {
                    primary: e[0],
                    secondary: e[1],
                    border: l(e[0], e[1]).setAlpha(0.4),
                    label: l(e[0], e[1]).isLight() ? t.dark : t.light
                },
    d = (t, e) =>
        0 === e.length
            ? void 0
            : 1 === e.length
              ? {
                    primary: e[0],
                    secondary: e[0],
                    text: e[0].isLight() ? t.dark : t.light
                }
              : {
                    primary: e[0],
                    secondary: e[1],
                    text: l(e[0], e[1]).isLight() ? t.dark : t.light
                },
    u = (t, e) => {
        let { h: n, s: r, l: i } = t.toHsl();
        return a()({
            h: n,
            s: r * e,
            l: i
        });
    };
e.Z = (t) => (e) => {
    let n = (0, i.e7)([o.Z], () => o.Z.saturation);
    if (null == e) return {};
    let r = {
        backgroundColors: c(t, e.backgroundColors),
        buttonColors: d(t, e.buttonColors),
        confettiColors: e.confettiColors
    };
    return 1 === n
        ? { ...r }
        : {
              backgroundColors:
                  null != r.backgroundColors
                      ? {
                            primary: u(r.backgroundColors.primary, n),
                            secondary: u(r.backgroundColors.secondary, n),
                            border: u(r.backgroundColors.border, n),
                            label: u(r.backgroundColors.label, n)
                        }
                      : void 0,
              buttonColors:
                  null != r.buttonColors
                      ? {
                            primary: u(r.buttonColors.primary, n),
                            secondary: u(r.buttonColors.secondary, n),
                            text: u(r.buttonColors.text, n)
                        }
                      : void 0,
              confettiColors: r.confettiColors.map((t) => u(t, n))
          };
};
