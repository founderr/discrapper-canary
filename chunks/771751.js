n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    c = n(704215),
    s = n(481060),
    u = n(937579),
    d = n(675478),
    h = n(295226),
    m = n(572004),
    x = n(74538),
    f = n(246992),
    g = n(981631),
    p = n(474936),
    b = n(535271),
    v = n(384712);
let _ = async () => {
        try {
            let { body: e } = await o.tn.get({ url: g.ANM.USER_OFFER_IDS });
            return e;
        } catch (e) {
            return [];
        }
    },
    j = async (e, t) => {
        try {
            await o.tn.post({ url: g.ANM.CREATE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, u.T)();
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.del({ url: g.ANM.DELETE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, u.T)();
        }
    },
    T = async (e, t) => {
        try {
            await o.tn.post({ url: g.ANM.UNACK_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, u.T)();
        }
    },
    N = async () => {
        try {
            let { body: e } = await o.tn.get({ url: g.ANM.USER_OFFERS });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    S = async () => {
        try {
            await o.tn.del({ url: g.ANM.USER_OFFERS });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, u.T)();
        }
    };
function y(e) {
    var t, n, l, o;
    let { offer: c, offerOptions: d, forceRefetch: h } = e,
        [f, g] = a.useState(!1),
        [b, _] = a.useState(!1),
        [j, N] = a.useState(!1),
        [S, y] = a.useState(!1);
    a.useEffect(() => {
        j && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: w, expires_at: I, redeemed_at: E, trial_id: k, subscription_trial: R } = c,
        Z =
            null !==
                (n =
                    null ===
                        (t = d.find((e) => {
                            let { value: t } = e;
                            return t === k;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        O = null != I,
        A = null != I && new Date(I).getTime() < Date.now(),
        L = (null == R ? void 0 : R.sku_id) === p.Si.TIER_0,
        B = async () => {
            N(!0), O ? await T(w, 'trial') : await (0, u.a)(c), h(), N(!1);
        };
    a.useEffect(() => {
        if (f) {
            let e = setTimeout(() => {
                g(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (b) {
            let e = setTimeout(() => {
                _(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, b]);
    let P = 'Active';
    return (
        O && (P = 'Acknowledged'),
        A && (P = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, L ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: async () => {
                                N(!0), await C(w, 'trial'), h(), N(!1);
                            },
                            children: (0, r.jsx)(s.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(s.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(w), g(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', w]
                        }),
                        f
                            ? (0, r.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsxs)(s.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(k), _(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', k]
                        }),
                        b
                            ? (0, r.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(s.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, x.if)({
                                intervalType: null !== (l = null == R ? void 0 : R.interval) && void 0 !== l ? l : p.rV.MONTH,
                                intervalCount: null !== (o = null == R ? void 0 : R.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: B,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: O,
                                [v.expired]: A
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === P ? void 0 : 'always-white',
                                children: P
                            })
                        }),
                        null != E &&
                            (0, r.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: j || S }),
                    children: (0, r.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function w(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: c } = e,
        [d, h] = a.useState(!1),
        [x, f] = a.useState(!1),
        [g, p] = a.useState(!1),
        [b, _] = a.useState(!1);
    a.useEffect(() => {
        g && _(!0);
        let e = setTimeout(() => {
            _(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [g]);
    let { id: j, expires_at: N, applied_at: S, discount_id: y, discount: w } = l,
        I =
            null !==
                (n =
                    null ===
                        (t = o.find((e) => {
                            let { value: t } = e;
                            return t === y;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        E = null != N,
        k = null != N && new Date(N).getTime() < Date.now(),
        R = async () => {
            p(!0), E ? await T(j, 'discount') : await (0, u.a)(void 0, l), c(), p(!1);
        };
    a.useEffect(() => {
        if (d) {
            let e = setTimeout(() => {
                h(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (x) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [d, x]);
    let Z = 'Active';
    return (
        k && (Z = 'Expired'),
        E && (Z = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: I
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: async () => {
                                p(!0), await C(j, 'discount'), c(), p(!1);
                            },
                            children: (0, r.jsx)(s.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(s.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(j), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', j]
                        }),
                        d
                            ? (0, r.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsxs)(s.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(y), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
                        }),
                        x
                            ? (0, r.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(s.Text, {
                        variant: 'eyebrow',
                        color: 'text-normal',
                        children: [w.amount, '% off']
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: R,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: E,
                                [v.expired]: k
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === Z ? void 0 : 'always-white',
                                children: Z
                            })
                        }),
                        null != S &&
                            (0, r.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: g || b }),
                    children: (0, r.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function I() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [x, g] = a.useState(),
        [p, C] = a.useState([]),
        [T, I] = a.useState([]),
        [E, k] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || E) &&
            _().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    r = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), l(r), null == o && m(n[0].value), null == x && g(r[0].value);
            });
    }, [e, n, o, x, E]),
        a.useEffect(() => {
            E &&
                (k(!1),
                h.Z.forceReset(),
                (0, u.T)(),
                N().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), I(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [E]);
    let R = async () => {
            null != o && (await j(o, 'trial'), k(!0));
        },
        Z = async () => {
            null != x && (await j(x, 'discount'), k(!0));
        },
        O = async () => {
            await S(), k(!0);
        };
    return (0, r.jsx)(s.ScrollerThin, {
        className: i()(b.panel),
        children: (0, r.jsxs)('div', {
            className: v.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.buttons,
                            children: [
                                (0, r.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: O,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: () => (0, d.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: () => k(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, r.jsx)(s.Select, {
                                    className: v.input,
                                    options: e,
                                    isSelected: (e) => o === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => m(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(s.Button, {
                                    onClick: R,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, r.jsx)(s.Select, {
                                    className: v.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => g(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(s.Button, {
                                    onClick: Z,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                p.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            p.map((t) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => k(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                T.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            T.map((e) =>
                                (0, r.jsx)(
                                    w,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => k(!0)
                                    },
                                    e.id
                                )
                            )
                        ]
                    })
            ]
        })
    });
}
