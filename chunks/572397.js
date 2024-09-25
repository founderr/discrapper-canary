n.d(t, {
    J: function () {
        return p;
    },
    q: function () {
        return m;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(524437),
    s = n(781391),
    l = n(740492),
    u = n(581883),
    c = n(626135),
    d = n(238302),
    _ = n(514361),
    E = n(981631),
    f = n(474936),
    h = n(874893);
let p = () => {
        let e = (0, a.e7)([_.Z], () => _.Z.gradientPreset),
            t = (0, a.e7)([l.ZP], () => l.ZP.useSystemTheme === h.K.ON),
            [n, r] = (0, i.useState)(t);
        return (
            (0, i.useEffect)(() => {
                if (null == e) r(t);
            }, [e, t]),
            (0, i.useCallback)(() => {
                if (null == e) return;
                if (((0, d.kj)(), !!n)) (0, s.hi)(h.K.ON);
            }, [e, n])
        );
    },
    m = () => {
        let { previewPaneVariant: e } = (0, a.cj)([_.Z], () => ({ previewPaneVariant: _.Z.isPreview ? f.h1.FREE : f.h1.PREMIUM_STANDARD })),
            t = (0, a.e7)([u.Z], () => {
                var e;
                let t = null === (e = u.Z.settings.appearance) || void 0 === e ? void 0 : e.theme;
                return 'default '.concat(t === o.Q2.LIGHT ? E.BRd.LIGHT : E.BRd.DARK);
            });
        return (0, i.useCallback)(
            (n) => {
                c.default.track(n, {
                    preview_pane_variant: e,
                    original_theme: t
                });
            },
            [e, t]
        );
    };
