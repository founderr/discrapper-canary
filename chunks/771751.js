n.d(t, {
    Z: function () {
        return w;
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
    d = n(937579),
    u = n(675478),
    h = n(295226),
    m = n(572004),
    f = n(74538),
    x = n(246992),
    p = n(981631),
    g = n(474936),
    b = n(219299),
    v = n(423705);
let _ = async () => {
        try {
            let { body: e } = await o.tn.get({ url: p.ANM.USER_OFFER_IDS });
            return e;
        } catch (e) {
            return [];
        }
    },
    j = async (e, t) => {
        try {
            await o.tn.post({ url: p.ANM.CREATE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    C = async (e, t) => {
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
        [x, p] = a.useState(!1),
        [b, _] = a.useState(!1),
        [j, S] = a.useState(!1),
        [N, y] = a.useState(!1);
    a.useEffect(() => {
        j && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: I, expires_at: w, redeemed_at: k, trial_id: E, subscription_trial: R } = c,
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
                : 'Unknown',
        Z = null != w,
        A = null != w && new Date(w).getTime() < Date.now(),
        B = (null == R ? void 0 : R.sku_id) === g.Si.TIER_0,
        L = async () => {
            S(!0), Z ? await T(I, 'trial') : await (0, d.a)(c), h(), S(!1);
        };
    a.useEffect(() => {
        if (x) {
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
    }, [x, b]);
    let P = 'Active';
    return (
        Z && (P = 'Acknowledged'),
        A && (P = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, B ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
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
                                S(!0), await C(I, 'trial'), h(), S(!1);
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
                            (0, f.if)({
                                intervalType: null !== (l = null == R ? void 0 : R.interval) && void 0 !== l ? l : g.rV.MONTH,
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
                            onClick: L,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: Z,
                                [v.expired]: A
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === P ? void 0 : 'always-white',
                                children: P
                            })
                        }),
                        null != k &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: j || N }),
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
        [f, x] = a.useState(!1),
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
    let { id: j, expires_at: S, applied_at: N, discount_id: y, discount: I } = l,
        w =
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
        k = null != S,
        E = null != S && new Date(S).getTime() < Date.now(),
        R = async () => {
            g(!0), k ? await T(j, 'discount') : await (0, d.a)(void 0, l), c(), g(!1);
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
        if (f) {
            let e = setTimeout(() => {
                x(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, f]);
    let O = 'Active';
    return (
        E && (O = 'Expired'),
        k && (O = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: w
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: async () => {
                                g(!0), await C(j, 'discount'), c(), g(!1);
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
                        (0, m.JG)(y), x(!0);
                    },
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
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
                            onClick: R,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: k,
                                [v.expired]: E
                            }),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === O ? void 0 : 'always-white',
                                children: O
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
function w() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [f, p] = a.useState(),
        [g, C] = a.useState([]),
        [T, w] = a.useState([]),
        [k, E] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || k) &&
            _().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    r = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), l(r), null == o && m(n[0].value), null == f && p(r[0].value);
            });
    }, [e, n, o, f, k]),
        a.useEffect(() => {
            k &&
                (E(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                S().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), w(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let R = async () => {
            null != o && (await j(o, 'trial'), E(!0));
        },
        O = async () => {
            null != f && (await j(f, 'discount'), E(!0));
        },
        Z = async () => {
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
                                    onClick: Z,
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
                                    popoutLayerContext: x.O$
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
                                    isSelected: (e) => f === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: x.O$
                                }),
                                (0, r.jsx)(s.Button, {
                                    onClick: O,
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
