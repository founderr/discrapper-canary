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
    C = n(388032),
    _ = n(592142),
    E = n(113207);
let f = !x.isPlatformEmbedded,
    I = (0, g.hQ)();
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
                      className: l()(_.pttToolsMessage, E.marginBottom8),
                      children: C.intl.format(C.t.HVvn5e, { onClick: () => d.Z.setSection(T.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: l()(_.pttToolsMessage, _.pttToolsWarning, E.marginBottom8),
                      children: C.intl.format(C.t.zvMPOT, { onDownloadClick: () => (0, S.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: _.pttTools,
            children: [
                (0, i.jsxs)(h.Z, {
                    children: [
                        (0, i.jsx)(h.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(o.FormItem, {
                                title: C.intl.string(C.t.YkDjVF),
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
                                        id: I,
                                        tag: o.FormTitleTags.H5,
                                        className: E.marginBottom8,
                                        children: C.intl.string(C.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: r,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: N,
                                        maxValue: T.qhL,
                                        'aria-labelledby': I
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
                name: C.intl.string(C.t.cHCEOD)
            },
            {
                value: T.pM4.PUSH_TO_TALK,
                name: f ? C.intl.string(C.t['1AINrK']) : C.intl.string(C.t.Q8gkVF)
            }
        ],
        l = s.useCallback(
            (t) => {
                let { value: s } = t;
                s === T.pM4.PUSH_TO_TALK &&
                    f &&
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: C.intl.string(C.t.Kdt0GR),
                                confirmText: C.intl.string(C.t['1WjMbG']),
                                cancelText: C.intl.string(C.t.BddRzc),
                                onConfirm: () => (0, S.y)('PTT Limited Modal'),
                                body: C.intl.string(C.t.NIozvr),
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
                title: C.intl.string(C.t['pS+K2N']),
                className: E.marginBottom20,
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
