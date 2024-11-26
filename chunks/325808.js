n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    h = n(600164),
    g = n(313201),
    p = n(131951),
    x = n(358085),
    S = n(962100),
    T = n(981631),
    E = n(388032),
    _ = n(973936),
    C = n(232186);
let I = !x.isPlatformEmbedded,
    f = (0, g.hQ)();
function N(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function A(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: s, delay: r } = (0, a.cj)([p.Z], () => p.Z.getModeOptions());
    return (
        (t =
            x.isPlatformEmbedded || n !== T.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: l()(_.pttToolsMessage, C.marginBottom8),
                      children: E.intl.format(E.t.HVvn5e, { onClick: () => d.Z.setSection(T.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: l()(_.pttToolsMessage, _.pttToolsWarning, C.marginBottom8),
                      children: E.intl.format(E.t.zvMPOT, { onDownloadClick: () => (0, S.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: _.pttTools,
            children: [
                (0, i.jsxs)(h.Z, {
                    children: [
                        (0, i.jsx)(h.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(o.FormItem, {
                                title: E.intl.string(E.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: s,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)(h.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsxs)(o.FormItem, {
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: f,
                                        tag: o.FormTitleTags.H5,
                                        className: C.marginBottom8,
                                        children: E.intl.string(E.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: r,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: N,
                                        maxValue: T.qhL,
                                        'aria-labelledby': f
                                    })
                                ]
                            })
                        })
                    ]
                }),
                t
            ]
        })
    );
}
function b() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, a.e7)([p.Z], () => p.Z.getMode()),
        r = [
            {
                value: T.pM4.VOICE_ACTIVITY,
                name: E.intl.string(E.t.cHCEOD)
            },
            {
                value: T.pM4.PUSH_TO_TALK,
                name: I ? E.intl.string(E.t['1AINrK']) : E.intl.string(E.t.Q8gkVF)
            }
        ],
        l = s.useCallback(
            (t) => {
                let { value: s } = t;
                s === T.pM4.PUSH_TO_TALK &&
                    I &&
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: E.intl.string(E.t.Kdt0GR),
                                confirmText: E.intl.string(E.t['1WjMbG']),
                                cancelText: E.intl.string(E.t.BddRzc),
                                onConfirm: () => (0, S.y)('PTT Limited Modal'),
                                body: E.intl.string(E.t.NIozvr),
                                ...t
                            });
                    }),
                    c.Z.setMode(s, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.FormItem, {
                title: E.intl.string(E.t['pS+K2N']),
                className: C.marginBottom20,
                children: (0, i.jsx)(o.RadioGroup, {
                    onChange: l,
                    options: r,
                    value: t
                })
            }),
            t === T.pM4.PUSH_TO_TALK && (0, i.jsx)(A, { inputMode: t })
        ]
    });
}
