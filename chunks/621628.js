t.d(s, {
    Z: function () {
        return O;
    }
}),
    t(47120),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(733860);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(704215),
    c = t(433517),
    d = t(481060),
    _ = t(600164),
    u = t(112831),
    E = t(675478),
    T = t(581883),
    S = t(883904),
    I = t(68985),
    N = t(211644),
    A = t(804501),
    m = t(957436),
    C = t(113207);
function g(e) {
    let { contents: s, content: t, onChange: a } = e,
        i = l.z[t],
        { isDismissed: r, handleToggleDismissState: o } = (0, A.x)(i, s);
    return (0, n.jsx)(n.Fragment, {
        children: (0, n.jsx)(d.FormSwitch, {
            value: r,
            onChange: () => {
                a(t), o();
            },
            children: (0, n.jsx)(d.FormText, {
                size: u.Z.Sizes.SIZE_16,
                className: C.marginTop4,
                children: ''.concat(t.toLowerCase(), ' (').concat(l.z[t], ')')
            })
        })
    });
}
function h(e) {
    let { items: s, dismissedContents: t, handleChange: a } = e;
    return (0, n.jsx)(n.Fragment, {
        children: s
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, n.jsx)(
                    g,
                    {
                        contents: t,
                        content: e,
                        onChange: a
                    },
                    e
                )
            )
    });
}
function O() {
    var e;
    let s = (0, N.ZP)((e) => e.recentlyShown),
        { dailyCapReached: t, dailyCapOverridden: i } = (0, o.cj)([I.Z], () => ({
            dailyCapReached: I.Z.hasUserHitDCCap(),
            dailyCapOverridden: I.Z.dailyCapOverridden
        })),
        [u, A] = a.useState(''),
        g =
            null !==
                (e = (0, o.e7)([T.Z], () => {
                    var e;
                    return null === (e = T.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        [O, p] = (function (e, s) {
            let [t, n] = a.useState(() => {
                let t = c.K.get(e);
                return null != t ? t : s;
            });
            return (
                a.useEffect(() => {
                    c.K.set(e, t);
                }, [e, t]),
                [t, n]
            );
        })('RecentDismissibleOverrides', []),
        R = (e) => {
            p((s) => {
                let t = new Set(s);
                t.delete(e);
                let n = Array.from(t).slice(0, 4);
                return n.unshift(e), n;
            });
        },
        x = s.map((e) => l.z[e]),
        f = O.filter((e) => e.toLowerCase().includes(u.toLowerCase())).filter((e) => !x.includes(e)),
        M = Object.keys(l.z)
            .filter((e) => !x.includes(e))
            .filter((e) => !O.includes(e))
            .filter((e) => e.toLowerCase().includes(u.toLowerCase()))
            .sort((e, s) => e.localeCompare(s));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.FormSection, {
                title: 'Dismissible Content Fatigue',
                tag: d.FormTitleTags.H1,
                className: C.marginBottom60,
                children: [
                    (0, n.jsx)(d.FormItem, {
                        children: (0, n.jsxs)(d.FormText, {
                            className: C.marginBottom4,
                            children: ['Daily Cap Reached: ', t ? 'Yes' : 'No']
                        })
                    }),
                    (0, n.jsx)(d.FormSwitch, {
                        value: i,
                        onChange: S.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, n.jsxs)(d.FormItem, {
                        children: [
                            (0, n.jsx)(d.Button, {
                                onClick: () => (0, S.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, n.jsx)(d.FormText, {
                                className: C.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)(d.FormSection, {
                title: 'Dismissible Contents',
                tag: d.FormTitleTags.H1,
                children: [
                    (0, n.jsx)(d.SearchBar, {
                        className: C.marginBottom20,
                        size: d.SearchBar.Sizes.LARGE,
                        query: u,
                        onChange: A,
                        onClear: () => A('')
                    }),
                    (0, n.jsxs)(d.FormItem, {
                        className: m.buttonsContainer,
                        children: [
                            (0, n.jsx)(d.Button, {
                                onClick: E.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, n.jsx)(d.Button, {
                                onClick: E.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    s.length > 0
                        ? (0, n.jsxs)('div', {
                              className: C.marginBottom20,
                              children: [
                                  (0, n.jsx)('div', {
                                      className: C.marginBottom20,
                                      children: (0, n.jsx)(d.FormTitle, { children: 'Recently Shown' })
                                  }),
                                  (0, n.jsx)(h, {
                                      items: x,
                                      dismissedContents: g,
                                      handleChange: R
                                  })
                              ]
                          })
                        : null,
                    f.length > 0
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('div', {
                                      className: C.marginBottom20,
                                      children: (0, n.jsx)(d.FormTitle, { children: 'Recent Overrides' })
                                  }),
                                  (0, n.jsx)(h, {
                                      items: f,
                                      dismissedContents: g,
                                      handleChange: R
                                  })
                              ]
                          })
                        : null,
                    (0, n.jsx)(_.Z, {
                        className: r()(C.marginBottom20, C.marginTop20),
                        children: (0, n.jsx)(d.FormTitle, { children: 'Available Dismissible Contents' })
                    }),
                    (0, n.jsx)(h, {
                        items: M,
                        dismissedContents: g,
                        handleChange: R
                    })
                ]
            })
        ]
    });
}
