n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    c = n(704215),
    s = n(481060),
    d = n(937579),
    u = n(675478),
    h = n(431),
    m = n(572004),
    x = n(74538),
    f = n(246992),
    p = n(981631),
    g = n(474936),
    b = n(986310),
    v = n(907555);
let _ = async () => {
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
    j = async (e, t) => {
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
    let { offer: c, offerOptions: u, forceRefetch: h } = e,
        [f, p] = a.useState(!1),
        [b, _] = a.useState(!1),
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
    let { id: I, expires_at: k, redeemed_at: w, trial_id: E, subscription_trial: Z } = c,
        R =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === E;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        O = null != k,
        A = null != k && new Date(k).getTime() < Date.now(),
        B = (null == Z ? void 0 : Z.sku_id) === g.Si.TIER_0,
        P = async () => {
            S(!0), O ? await T(I, 'trial') : await (0, d.a)(c), h(), S(!1);
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
        if (b) {
            let e = setTimeout(() => {
                _(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, b]);
    let L = 'Active';
    return (
        O && (L = 'Acknowledged'),
        A && (L = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, B ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: async () => {
                                S(!0), await j(I, 'trial'), h(), S(!1);
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
                        (0, m.JG)(I), p(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', I]
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
                        (0, m.JG)(E), _(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', E]
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
                                intervalType: null !== (l = null == Z ? void 0 : Z.interval) && void 0 !== l ? l : g.rV.MONTH,
                                intervalCount: null !== (o = null == Z ? void 0 : Z.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: P,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: O,
                                [v.expired]: A
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === L ? void 0 : 'always-white',
                                children: L
                            })
                        }),
                        null != w &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: C || N }),
                    children: (0, r.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function I(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: c } = e,
        [u, h] = a.useState(!1),
        [x, f] = a.useState(!1),
        [p, g] = a.useState(!1),
        [b, _] = a.useState(!1);
    a.useEffect(() => {
        p && _(!0);
        let e = setTimeout(() => {
            _(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: C, expires_at: S, applied_at: N, discount_id: y, discount: I } = l,
        k =
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
        E = null != S && new Date(S).getTime() < Date.now(),
        Z = async () => {
            g(!0), w ? await T(C, 'discount') : await (0, d.a)(void 0, l), c(), g(!1);
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
        E && (R = 'Expired'),
        w && (R = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: k
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: async () => {
                                g(!0), await j(C, 'discount'), c(), g(!1);
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
                        (0, m.JG)(C), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', C]
                        }),
                        u
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
                        children: [I.amount, '% off']
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: Z,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: w,
                                [v.expired]: E
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != N &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: p || b }),
                    children: (0, r.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function k() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [x, p] = a.useState(),
        [g, j] = a.useState([]),
        [T, k] = a.useState([]),
        [w, E] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || w) &&
            _().then((e) => {
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
                (E(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                S().then((e) => {
                    j(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [w]);
    let Z = async () => {
            null != o && (await C(o, 'trial'), E(!0));
        },
        R = async () => {
            null != x && (await C(x, 'discount'), E(!0));
        },
        O = async () => {
            await N(), E(!0);
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
                                    onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: () => E(!0),
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
                                    onClick: Z,
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
                                    select: (e) => p(e),
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
                g.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            g.map((t) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => E(!0)
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
                                    I,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => E(!0)
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
