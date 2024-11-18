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
    b = n(474936),
    g = n(986310),
    v = n(907555);
let C = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: p.ANM.USER_OFFER_IDS,
                rejectWithError: !1
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    _ = async (e, t) => {
        try {
            await o.tn.post({
                url: p.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !1
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    j = async (e, t) => {
        try {
            await o.tn.del({
                url: p.ANM.DELETE_USER_OFFER(e, t),
                rejectWithError: !1
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
                rejectWithError: !1
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
                rejectWithError: !1
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
                rejectWithError: !1
            });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function N(e) {
    var t, n, l, o;
    let { offer: c, offerOptions: u, forceRefetch: h } = e,
        [f, p] = a.useState(!1),
        [g, C] = a.useState(!1),
        [_, S] = a.useState(!1),
        [y, N] = a.useState(!1);
    a.useEffect(() => {
        _ && N(!0);
        let e = setTimeout(() => {
            N(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [_]);
    let { id: I, expires_at: k, redeemed_at: w, trial_id: E, subscription_trial: Z, referrer: R } = c,
        O =
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
                : 'Unknown';
    null != R && (O = ''.concat(O, ' from @').concat(R.username));
    let A = null != k,
        B = null != k && new Date(k).getTime() < Date.now(),
        P = (null == Z ? void 0 : Z.sku_id) === b.Si.TIER_0,
        L = async () => {
            S(!0), A ? await T(I, 'trial') : await (0, d.a)(c), h(), S(!1);
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
                C(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, g]);
    let D = 'Active';
    return (
        A && (D = 'Acknowledged'),
        B && (D = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, P ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: O
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
                        (0, m.JG)(E), C(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', E]
                        }),
                        g
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
                                intervalType: null !== (l = null == Z ? void 0 : Z.interval) && void 0 !== l ? l : b.rV.MONTH,
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
                            onClick: L,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: A,
                                [v.expired]: B
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === D ? void 0 : 'always-white',
                                children: D
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
                    className: i()(v.loadingContainer, { [v.isLoading]: _ || y }),
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
        [p, b] = a.useState(!1),
        [g, C] = a.useState(!1);
    a.useEffect(() => {
        p && C(!0);
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: _, expires_at: S, applied_at: y, discount_id: N, discount: I } = l,
        k =
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
        w = null != S,
        E = null != S && new Date(S).getTime() < Date.now(),
        Z = async () => {
            b(!0), w ? await T(_, 'discount') : await (0, d.a)(void 0, l), c(), b(!1);
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
                                b(!0), await j(_, 'discount'), c(), b(!1);
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
                        (0, m.JG)(_), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', _]
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
                        (0, m.JG)(N), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', N]
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
                        null != y &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: p || g }),
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
        [b, j] = a.useState([]),
        [T, k] = a.useState([]),
        [w, E] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || w) &&
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
            null != o && (await _(o, 'trial'), E(!0));
        },
        R = async () => {
            null != x && (await _(x, 'discount'), E(!0));
        },
        O = async () => {
            await y(), E(!0);
        };
    return (0, r.jsx)(s.ScrollerThin, {
        className: i()(g.panel),
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
                b.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            b.map((t) =>
                                (0, r.jsx)(
                                    N,
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
