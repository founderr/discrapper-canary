n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    h = n(431),
    m = n(572004),
    x = n(74538),
    f = n(246992),
    p = n(981631),
    b = n(474936),
    g = n(219299),
    v = n(423705);
let j = async () => {
        try {
            let { body: e } = await o.tn.get({ url: p.ANM.USER_OFFER_IDS });
            return e;
        } catch (e) {
            return [];
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.post({ url: p.ANM.CREATE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    _ = async (e, t) => {
        try {
            await o.tn.del({ url: p.ANM.DELETE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    T = async (e, t) => {
        try {
            await o.tn.post({ url: p.ANM.UNACK_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    S = async () => {
        try {
            let { body: e } = await o.tn.get({ url: p.ANM.USER_OFFERS });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    N = async () => {
        try {
            await o.tn.del({ url: p.ANM.USER_OFFERS });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function y(e) {
    var t, n, l, o;
    let { offer: s, offerOptions: u, forceRefetch: h } = e,
        [f, p] = a.useState(!1),
        [g, j] = a.useState(!1),
        [C, S] = a.useState(!1),
        [N, y] = a.useState(!1);
    a.useEffect(() => {
        C && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [C]);
    let { id: k, expires_at: I, redeemed_at: w, trial_id: Z, subscription_trial: E } = s,
        R =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === Z;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        B = null != I,
        O = null != I && new Date(I).getTime() < Date.now(),
        A = (null == E ? void 0 : E.sku_id) === b.Si.TIER_0,
        P = async () => {
            S(!0), B ? await T(k, 'trial') : await (0, d.a)(s), h(), S(!1);
        };
    a.useEffect(() => {
        if (f) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (g) {
            let e = setTimeout(() => {
                j(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, g]);
    let L = 'Active';
    return (
        B && (L = 'Acknowledged'),
        O && (L = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, A ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                S(!0), await _(k, 'trial'), h(), S(!1);
                            },
                            children: (0, r.jsx)(c.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(k), p(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', k]
                        }),
                        f
                            ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(Z), j(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', Z]
                        }),
                        g
                            ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, x.if)({
                                intervalType: null !== (l = null == E ? void 0 : E.interval) && void 0 !== l ? l : b.rV.MONTH,
                                intervalCount: null !== (o = null == E ? void 0 : E.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(c.Clickable, {
                            onClick: P,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: B,
                                [v.expired]: O
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === L ? void 0 : 'always-white',
                                children: L
                            })
                        }),
                        null != w &&
                            (0, r.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: C || N }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function k(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: s } = e,
        [u, h] = a.useState(!1),
        [x, f] = a.useState(!1),
        [p, b] = a.useState(!1),
        [g, j] = a.useState(!1);
    a.useEffect(() => {
        p && j(!0);
        let e = setTimeout(() => {
            j(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: C, expires_at: S, applied_at: N, discount_id: y, discount: k } = l,
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
        w = null != S,
        Z = null != S && new Date(S).getTime() < Date.now(),
        E = async () => {
            b(!0), w ? await T(C, 'discount') : await (0, d.a)(void 0, l), s(), b(!1);
        };
    a.useEffect(() => {
        if (u) {
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
    }, [u, x]);
    let R = 'Active';
    return (
        Z && (R = 'Expired'),
        w && (R = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: I
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                b(!0), await _(C, 'discount'), s(), b(!1);
                            },
                            children: (0, r.jsx)(c.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(C), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', C]
                        }),
                        u
                            ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(y), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
                        }),
                        x
                            ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, r.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'text-normal',
                        children: [k.amount, '% off']
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(c.Clickable, {
                            onClick: E,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: w,
                                [v.expired]: Z
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != N &&
                            (0, r.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: p || g }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function I() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [x, p] = a.useState(),
        [b, _] = a.useState([]),
        [T, I] = a.useState([]),
        [w, Z] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || w) &&
            j().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    r = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), l(r), null == o && m(n[0].value), null == x && p(r[0].value);
            });
    }, [e, n, o, x, w]),
        a.useEffect(() => {
            w &&
                (Z(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                S().then((e) => {
                    _(e.trial.sort((e, t) => e.id.localeCompare(t.id))), I(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [w]);
    let E = async () => {
            null != o && (await C(o, 'trial'), Z(!0));
        },
        R = async () => {
            null != x && (await C(x, 'discount'), Z(!0));
        },
        B = async () => {
            await N(), Z(!0);
        };
    return (0, r.jsx)(c.ScrollerThin, {
        className: i()(g.panel),
        children: (0, r.jsxs)('div', {
            className: v.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.buttons,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: B,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => Z(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, r.jsx)(c.Select, {
                                    className: v.input,
                                    options: e,
                                    isSelected: (e) => o === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => m(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(c.Button, {
                                    onClick: E,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, r.jsx)(c.Select, {
                                    className: v.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(c.Button, {
                                    onClick: R,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                b.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            b.map((t) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => Z(!0)
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
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            T.map((e) =>
                                (0, r.jsx)(
                                    k,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => Z(!0)
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
