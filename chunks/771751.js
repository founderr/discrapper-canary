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
    s = n(704215),
    c = n(481060),
    u = n(937579),
    d = n(675478),
    h = n(295226),
    m = n(572004),
    f = n(74538),
    x = n(246992),
    g = n(981631),
    p = n(474936),
    b = n(219299),
    v = n(423705);
let _ = async () => {
        try {
            let { body: e } = await o.tn.get({ url: g.ANM.USER_OFFER_IDS });
            return e;
        } catch (e) {
            return [];
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.post({ url: g.ANM.CREATE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, u.T)();
        }
    },
    j = async (e, t) => {
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
    let { offer: s, offerOptions: d, forceRefetch: h } = e,
        [x, g] = a.useState(!1),
        [b, _] = a.useState(!1),
        [C, N] = a.useState(!1),
        [S, y] = a.useState(!1);
    a.useEffect(() => {
        C && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [C]);
    let { id: I, expires_at: w, redeemed_at: k, trial_id: E, subscription_trial: R } = s,
        Z =
            null !==
                (n =
                    null ===
                        (t = d.find((e) => {
                            let { value: t } = e;
                            return t === E;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        O = null != w,
        A = null != w && new Date(w).getTime() < Date.now(),
        L = (null == R ? void 0 : R.sku_id) === p.Si.TIER_0,
        P = async () => {
            N(!0), O ? await T(I, 'trial') : await (0, u.a)(s), h(), N(!1);
        };
    a.useEffect(() => {
        if (x) {
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
    }, [x, b]);
    let B = 'Active';
    return (
        O && (B = 'Acknowledged'),
        A && (B = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(v.card, L ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                N(!0), await j(I, 'trial'), h(), N(!1);
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
                        (0, m.JG)(I), g(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', I]
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
                (0, r.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(E), _(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', E]
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
                            (0, f.if)({
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
                        (0, r.jsx)(c.Clickable, {
                            onClick: P,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: O,
                                [v.expired]: A
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === B ? void 0 : 'always-white',
                                children: B
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
                    className: i()(v.loadingContainer, { [v.isLoading]: C || S }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function I(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: s } = e,
        [d, h] = a.useState(!1),
        [f, x] = a.useState(!1),
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
    let { id: C, expires_at: N, applied_at: S, discount_id: y, discount: I } = l,
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
        k = null != N,
        E = null != N && new Date(N).getTime() < Date.now(),
        R = async () => {
            p(!0), k ? await T(C, 'discount') : await (0, u.a)(void 0, l), s(), p(!1);
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
        if (f) {
            let e = setTimeout(() => {
                x(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [d, f]);
    let Z = 'Active';
    return (
        E && (Z = 'Expired'),
        k && (Z = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: w
                        }),
                        (0, r.jsx)(c.Clickable, {
                            onClick: async () => {
                                p(!0), await j(C, 'discount'), s(), p(!1);
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
                        d
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
                        (0, m.JG)(y), x(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
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
                            onClick: R,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: k,
                                [v.expired]: E
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === Z ? void 0 : 'always-white',
                                children: Z
                            })
                        }),
                        null != S &&
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
                    className: i()(v.loadingContainer, { [v.isLoading]: g || b }),
                    children: (0, r.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function w() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, m] = a.useState(),
        [f, g] = a.useState(),
        [p, j] = a.useState([]),
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
                t(n), l(r), null == o && m(n[0].value), null == f && g(r[0].value);
            });
    }, [e, n, o, f, k]),
        a.useEffect(() => {
            k &&
                (E(!1),
                h.Z.forceReset(),
                (0, u.T)(),
                N().then((e) => {
                    j(e.trial.sort((e, t) => e.id.localeCompare(t.id))), w(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let R = async () => {
            null != o && (await C(o, 'trial'), E(!0));
        },
        Z = async () => {
            null != f && (await C(f, 'discount'), E(!0));
        },
        O = async () => {
            await S(), E(!0);
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
                                    onClick: () => (0, d.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
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
                                    popoutLayerContext: x.O$
                                }),
                                (0, r.jsx)(c.Button, {
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
                                    isSelected: (e) => f === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => g(e),
                                    popoutLayerContext: x.O$
                                }),
                                (0, r.jsx)(c.Button, {
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
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            p.map((t) =>
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
