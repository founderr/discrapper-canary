n.d(t, {
    PQ: function () {
        return c;
    },
    e3: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(691324),
    o = n(442837),
    s = n(780384),
    l = n(514361),
    u = n(629935);
let c = 'data-client-themes',
    d = 'custom-theme-background',
    _ = () => {
        let e = (0, o.e7)([l.Z], () => l.Z.gradientPreset);
        return (0, i.useMemo)(() => {
            if (null == e) return null;
            let t = l.Z.getLinearGradient();
            if (null == t) return null;
            let [n, r] = [...e.colors]
                    .sort((e, t) => t.stop - e.stop)
                    .slice(0, 2)
                    .map((e) => a.b[e.token].hex),
                i = (0, u.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, s.wj)(e.theme)
                }),
                o = '\n      '.concat(
                    Object.entries(i)
                        .map((e) => {
                            let [t, n] = e;
                            return ''.concat(t, ': ').concat(n, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(d, ' {\n      --custom-theme-background: ').concat(t, ';\n      ').concat(o, '\n    }');
        }, [e]);
    },
    E = () => {
        let e = _();
        return null === e
            ? {
                  clientThemesCSS: '',
                  clientThemesClassName: ''
              }
            : {
                  clientThemesCSS: e,
                  clientThemesClassName: d
              };
    };
t.ZP = E;
