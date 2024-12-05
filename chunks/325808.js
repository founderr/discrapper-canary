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
    g = n(600164),
    h = n(313201),
    p = n(131951),
    x = n(358085),
    T = n(962100),
    S = n(981631),
    _ = n(388032),
    E = n(973936),
    C = n(232186);
let f = !x.isPlatformEmbedded,
    I = (0, h.hQ)();
function N(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function A(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: s, delay: r } = (0, a.cj)([p.Z], () => p.Z.getModeOptions());
    return (
        (t =
            x.isPlatformEmbedded || n !== S.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: l()(E.pttToolsMessage, C.marginBottom8),
                      children: _.intl.format(_.t.HVvn5e, { onClick: () => d.Z.setSection(S.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: l()(E.pttToolsMessage, E.pttToolsWarning, C.marginBottom8),
                      children: _.intl.format(_.t.zvMPOT, { onDownloadClick: () => (0, T.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: E.pttTools,
            children: [
                (0, i.jsxs)(g.Z, {
                    children: [
                        (0, i.jsx)(g.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(o.FormItem, {
                                title: _.intl.string(_.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: s,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)(g.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsxs)(o.FormItem, {
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: I,
                                        tag: o.FormTitleTags.H5,
                                        className: C.marginBottom8,
                                        children: _.intl.string(_.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: r,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: N,
                                        maxValue: S.qhL,
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
                value: S.pM4.VOICE_ACTIVITY,
                name: _.intl.string(_.t.cHCEOD)
            },
            {
                value: S.pM4.PUSH_TO_TALK,
                name: f ? _.intl.string(_.t['1AINrK']) : _.intl.string(_.t.Q8gkVF)
            }
        ],
        l = s.useCallback(
            (t) => {
                let { value: s } = t;
                s === S.pM4.PUSH_TO_TALK &&
                    f &&
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: _.intl.string(_.t.Kdt0GR),
                                confirmText: _.intl.string(_.t['1WjMbG']),
                                cancelText: _.intl.string(_.t.BddRzc),
                                onConfirm: () => (0, T.y)('PTT Limited Modal'),
                                body: _.intl.string(_.t.NIozvr),
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
                title: _.intl.string(_.t['pS+K2N']),
                className: C.marginBottom20,
                children: (0, i.jsx)(o.RadioGroup, {
                    onChange: l,
                    options: r,
                    value: t
                })
            }),
            t === S.pM4.PUSH_TO_TALK && (0, i.jsx)(A, { inputMode: t })
        ]
    });
}
