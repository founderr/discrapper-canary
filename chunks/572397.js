r.d(n, {
    J: function () {
        return g;
    },
    q: function () {
        return E;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(524437),
    l = r(781391),
    u = r(740492),
    c = r(581883),
    d = r(626135),
    f = r(238302),
    _ = r(514361),
    h = r(981631),
    p = r(474936),
    m = r(874893);
let g = () => {
        let e = (0, s.e7)([_.Z], () => _.Z.gradientPreset),
            n = (0, s.e7)([u.ZP], () => u.ZP.useSystemTheme === m.K.ON),
            [r, i] = (0, a.useState)(n);
        return (
            (0, a.useEffect)(() => {
                if (null == e) i(n);
            }, [e, n]),
            (0, a.useCallback)(() => {
                if (null == e) return;
                if (((0, f.kj)(), !!r)) (0, l.hi)(m.K.ON);
            }, [e, r])
        );
    },
    E = () => {
        let { previewPaneVariant: e } = (0, s.cj)([_.Z], () => ({ previewPaneVariant: _.Z.isPreview ? p.h1.FREE : p.h1.PREMIUM_STANDARD })),
            n = (0, s.e7)([c.Z], () => {
                var e;
                let n = null === (e = c.Z.settings.appearance) || void 0 === e ? void 0 : e.theme;
                return 'default '.concat(n === o.Q2.LIGHT ? h.BRd.LIGHT : h.BRd.DARK);
            });
        return (0, a.useCallback)(
            (r) => {
                d.default.track(r, {
                    preview_pane_variant: e,
                    original_theme: n
                });
            },
            [e, n]
        );
    };
