n.d(t, {
    Z: function () {
        return E;
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
    g = n(474936),
    b = n(941469),
    v = n(509345);
let C = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: p.ANM.USER_OFFER_IDS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    j = async (e, t) => {
        try {
            await o.tn.post({
                url: p.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    _ = async (e, t) => {
        try {
            await o.tn.del({
                url: p.ANM.DELETE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    T = async (e, t) => {
        try {
            await o.tn.post({
                url: p.ANM.UNACK_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    S = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: p.ANM.USER_OFFERS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    y = async () => {
        try {
            await o.tn.del({
                url: p.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function N(e) {
    var t, n, l, o;
    let { offer: s, offerOptions: u, forceRefetch: h } = e,
        [f, p] = a.useState(!1),
        [b, C] = a.useState(!1),
        [j, S] = a.useState(!1),
        [y, N] = a.useState(!1);
    a.useEffect(() => {
        j && N(!0);
        let e = setTimeout(() => {
            N(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: I, expires_at: E, redeemed_at: k, trial_id: w, subscription_trial: Z, referrer: R } = s,
        O =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === w;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != R && (O = ''.concat(O, ' from @').concat(R.username));
    let A = null != E,
        L = null != E && new Date(E).getTime() < Date.now(),
        P = (null == Z ? void 0 : Z.sku_id) === g.Si.TIER_0,
        B = async () => {
            S(!0), A ? await T(I, 'trial') : await (0, d.a)(s), h(), S(!1);
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
                C(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, b]);
    let D = 'Active';
    return (
        A && (D = 'Acknowledged'),
        L && (D = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, P ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: O
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                S(!0), await _(I, 'trial'), h(), S(!1);
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
                        (0, m.JG)(I), p(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', I]
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
                        (0, m.JG)(w), C(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', w]
                        }),
                        b
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
                        (0, r.jsx)(c.Clickable, {
                            onClick: B,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: A,
                                [v.expired]: L
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === D ? void 0 : 'always-white',
                                children: D
                            })
                        }),
                        null != k &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: j || y }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function I(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: s } = e,
        [u, h] = a.useState(!1),
        [x, f] = a.useState(!1),
        [p, g] = a.useState(!1),
        [b, C] = a.useState(!1);
    a.useEffect(() => {
        p && C(!0);
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: j, expires_at: S, applied_at: y, discount_id: N, discount: I } = l,
        E =
            null !==
                (n =
                    null ===
                        (t = o.find((e) => {
                            let { value: t } = e;
                            return t === N;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        k = null != S,
        w = null != S && new Date(S).getTime() < Date.now(),
        Z = async () => {
            g(!0), k ? await T(j, 'discount') : await (0, d.a)(void 0, l), s(), g(!1);
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
        w && (R = 'Expired'),
        k && (R = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: E
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                g(!0), await _(j, 'discount'), s(), g(!1);
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
                        (0, m.JG)(j), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', j]
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
                        (0, m.JG)(N), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', N]
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
                        children: [I.amount, '% off']
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, r.jsx)(c.Clickable, {
                            onClick: Z,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: k,
                                [v.expired]: w
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != y &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: p || b }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function E() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [x, p] = a.useState(),
        [g, _] = a.useState([]),
        [T, E] = a.useState([]),
        [k, w] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || k) &&
            C().then((e) => {
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
    }, [e, n, o, x, k]),
        a.useEffect(() => {
            k &&
                (w(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                S().then((e) => {
                    _(e.trial.sort((e, t) => e.id.localeCompare(t.id))), E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let Z = async () => {
            null != o && (await j(o, 'trial'), w(!0));
        },
        R = async () => {
            null != x && (await j(x, 'discount'), w(!0));
        },
        O = async () => {
            await y(), w(!0);
        };
    return (0, r.jsx)(c.ScrollerThin, {
        className: i()(b.panel),
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
                                    onClick: O,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => w(!0),
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
                g.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            g.map((t) =>
                                (0, r.jsx)(
                                    N,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => w(!0)
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
                                    I,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => w(!0)
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
