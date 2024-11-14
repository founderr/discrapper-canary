n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(733860);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(118012),
    h = n(675478),
    g = n(581883),
    p = n(883904),
    x = n(68985),
    S = n(211644),
    T = n(804501),
    C = n(957436),
    _ = n(113207);
function E(e) {
    let { contents: t, content: n, onChange: s } = e,
        r = o.z[n],
        { isDismissed: l, handleToggleDismissState: a } = (0, T.x)(r, t);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(d.FormSwitch, {
            value: l,
            onChange: () => {
                s(n), a();
            },
            children: (0, i.jsx)(d.FormText, {
                size: m.Z.Sizes.SIZE_16,
                className: _.marginTop4,
                children: ''.concat(n.toLowerCase(), ' (').concat(o.z[n], ')')
            })
        })
    });
}
function f(e) {
    let { items: t, dismissedContents: n, handleChange: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, i.jsx)(
                    E,
                    {
                        contents: n,
                        content: e,
                        onChange: s
                    },
                    e
                )
            )
    });
}
function I() {
    var e;
    let t = (0, S.ZP)((e) => e.recentlyShown),
        { dailyCapReached: n, dailyCapOverridden: r } = (0, a.cj)([x.Z], () => ({
            dailyCapReached: x.Z.hasUserHitDCCap(),
            dailyCapOverridden: x.Z.dailyCapOverridden
        })),
        [m, T] = s.useState(''),
        E =
            null !==
                (e = (0, a.e7)([g.Z], () => {
                    var e;
                    return null === (e = g.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        [I, N] = (function (e, t) {
            let [n, i] = s.useState(() => {
                let n = c.K.get(e);
                return null != n ? n : t;
            });
            return (
                s.useEffect(() => {
                    c.K.set(e, n);
                }, [e, n]),
                [n, i]
            );
        })('RecentDismissibleOverrides', []),
        A = (e) => {
            N((t) => {
                let n = new Set(t);
                n.delete(e);
                let i = Array.from(n).slice(0, 4);
                return i.unshift(e), i;
            });
        },
        b = t.map((e) => o.z[e]),
        v = I.filter((e) => e.toLowerCase().includes(m.toLowerCase())).filter((e) => !b.includes(e)),
        j = Object.keys(o.z)
            .filter((e) => !b.includes(e))
            .filter((e) => !I.includes(e))
            .filter((e) => e.toLowerCase().includes(m.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.FormSection, {
                title: 'Dismissible Content Fatigue',
                tag: d.FormTitleTags.H1,
                className: _.marginBottom60,
                children: [
                    (0, i.jsx)(d.FormItem, {
                        children: (0, i.jsxs)(d.FormText, {
                            className: _.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, i.jsx)(d.FormSwitch, {
                        value: r,
                        onChange: p.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, i.jsxs)(d.FormItem, {
                        children: [
                            (0, i.jsx)(d.Button, {
                                onClick: () => (0, p.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, i.jsx)(d.FormText, {
                                className: _.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(d.FormSection, {
                title: 'Dismissible Contents',
                tag: d.FormTitleTags.H1,
                children: [
                    (0, i.jsx)(d.SearchBar, {
                        className: _.marginBottom20,
                        size: d.SearchBar.Sizes.LARGE,
                        query: m,
                        onChange: T,
                        onClear: () => T('')
                    }),
                    (0, i.jsxs)(d.FormItem, {
                        className: C.buttonsContainer,
                        children: [
                            (0, i.jsx)(d.Button, {
                                onClick: h.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, i.jsx)(d.Button, {
                                onClick: h.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, i.jsxs)('div', {
                              className: _.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: _.marginBottom20,
                                      children: (0, i.jsx)(d.FormTitle, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(f, {
                                      items: b,
                                      dismissedContents: E,
                                      handleChange: A
                                  })
                              ]
                          })
                        : null,
                    v.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: _.marginBottom20,
                                      children: (0, i.jsx)(d.FormTitle, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(f, {
                                      items: v,
                                      dismissedContents: E,
                                      handleChange: A
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: l()(_.marginBottom20, _.marginTop20),
                        children: (0, i.jsx)(d.FormTitle, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(f, {
                        items: j,
                        dismissedContents: E,
                        handleChange: A
                    })
                ]
            })
        ]
    });
}
