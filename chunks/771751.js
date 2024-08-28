r.d(t, {
    Z: function () {
        return N;
    }
}),
    r(47120);
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(544891),
    c = r(704215),
    s = r(481060),
    d = r(937579),
    u = r(675478),
    h = r(295226),
    m = r(572004),
    g = r(74538),
    p = r(246992),
    b = r(981631),
    f = r(474936),
    x = r(535271),
    y = r(384712);
let k = async () => {
        try {
            let { body: e } = await l.tn.get({ url: b.ANM.USER_OFFER_IDS });
            return e;
        } catch (e) {
            return [];
        }
    },
    v = async (e, t) => {
        try {
            await l.tn.post({ url: b.ANM.CREATE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    _ = async (e, t) => {
        try {
            await l.tn.del({ url: b.ANM.DELETE_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    j = async (e, t) => {
        try {
            await l.tn.post({ url: b.ANM.UNACK_USER_OFFER(e, t) });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    w = async () => {
        try {
            let { body: e } = await l.tn.get({ url: b.ANM.USER_OFFERS });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    C = async () => {
        try {
            await l.tn.del({ url: b.ANM.USER_OFFERS });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function T(e) {
    var t, r, i, l;
    let { offer: c, offerOptions: u, forceRefetch: h } = e,
        [p, b] = n.useState(!1),
        [x, k] = n.useState(!1),
        [v, w] = n.useState(!1),
        [C, T] = n.useState(!1);
    n.useEffect(() => {
        v && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: S, expires_at: N, redeemed_at: E, trial_id: I, subscription_trial: Z } = c,
        R =
            null !==
                (r =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === I;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== r
                ? r
                : 'Unknown',
        O = null != N,
        L = null != N && new Date(N).getTime() < Date.now(),
        A = (null == Z ? void 0 : Z.sku_id) === f.Si.TIER_0,
        B = async () => {
            w(!0), O ? await j(S, 'trial') : await (0, d.a)(c), h(), w(!1);
        };
    n.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (x) {
            let e = setTimeout(() => {
                k(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, x]);
    let P = 'Active';
    return (
        O && (P = 'Acknowledged'),
        L && (P = 'Expired'),
        (0, a.jsxs)('div', {
            className: o()(y.card, A ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: o()(y.row, y.nameRow),
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, a.jsx)(s.Clickable, {
                            onClick: async () => {
                                w(!0), await _(S, 'trial'), h(), w(!1);
                            },
                            children: (0, a.jsx)(s.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(y.icon, y.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(s.Clickable, {
                    className: o()(y.row, y.idRow),
                    onClick: () => {
                        (0, m.JG)(S), b(!0);
                    },
                    children: [
                        (0, a.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', S]
                        }),
                        p
                            ? (0, a.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(y.icon, y.noMargin)
                              })
                            : (0, a.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.icon
                              })
                    ]
                }),
                (0, a.jsxs)(s.Clickable, {
                    className: o()(y.row, y.idRow),
                    onClick: () => {
                        (0, m.JG)(I), k(!0);
                    },
                    children: [
                        (0, a.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', I]
                        }),
                        x
                            ? (0, a.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(y.icon, y.noMargin)
                              })
                            : (0, a.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.icon
                              })
                    ]
                }),
                (0, a.jsx)('div', {
                    children: (0, a.jsxs)(s.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, g.if)({
                                intervalType: null !== (i = null == Z ? void 0 : Z.interval) && void 0 !== i ? i : f.rV.MONTH,
                                intervalCount: null !== (l = null == Z ? void 0 : Z.interval_count) && void 0 !== l ? l : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(s.Clickable, {
                            onClick: B,
                            className: o()(y.badge, y.clickable, {
                                [y.acked]: O,
                                [y.expired]: L
                            }),
                            children: (0, a.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === P ? void 0 : 'always-white',
                                children: P
                            })
                        }),
                        null != E &&
                            (0, a.jsx)('div', {
                                className: o()(y.badge, y.__invalid_badgeBottom, y.redeemed),
                                children: (0, a.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: o()(y.loadingContainer, { [y.isLoading]: v || C }),
                    children: (0, a.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function S(e) {
    var t, r;
    let { offer: i, offerOptions: l, forceRefetch: c } = e,
        [u, h] = n.useState(!1),
        [g, p] = n.useState(!1),
        [b, f] = n.useState(!1),
        [x, k] = n.useState(!1);
    n.useEffect(() => {
        b && k(!0);
        let e = setTimeout(() => {
            k(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [b]);
    let { id: v, expires_at: w, applied_at: C, discount_id: T, discount: S } = i,
        N =
            null !==
                (r =
                    null ===
                        (t = l.find((e) => {
                            let { value: t } = e;
                            return t === T;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== r
                ? r
                : 'Unknown',
        E = null != w,
        I = null != w && new Date(w).getTime() < Date.now(),
        Z = async () => {
            f(!0), E ? await j(v, 'discount') : await (0, d.a)(void 0, i), c(), f(!1);
        };
    n.useEffect(() => {
        if (u) {
            let e = setTimeout(() => {
                h(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (g) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, g]);
    let R = 'Active';
    return (
        I && (R = 'Expired'),
        E && (R = 'Acknowledged'),
        (0, a.jsxs)('div', {
            className: o()(y.card, y.discount),
            children: [
                (0, a.jsxs)('div', {
                    className: o()(y.row, y.nameRow),
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: N
                        }),
                        (0, a.jsx)(s.Clickable, {
                            onClick: async () => {
                                f(!0), await _(v, 'discount'), c(), f(!1);
                            },
                            children: (0, a.jsx)(s.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(y.icon, y.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(s.Clickable, {
                    className: o()(y.row, y.idRow),
                    onClick: () => {
                        (0, m.JG)(v), h(!0);
                    },
                    children: [
                        (0, a.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', v]
                        }),
                        u
                            ? (0, a.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(y.icon, y.noMargin)
                              })
                            : (0, a.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.icon
                              })
                    ]
                }),
                (0, a.jsxs)(s.Clickable, {
                    className: o()(y.row, y.idRow),
                    onClick: () => {
                        (0, m.JG)(T), p(!0);
                    },
                    children: [
                        (0, a.jsxs)(s.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', T]
                        }),
                        g
                            ? (0, a.jsx)(s.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(y.icon, y.noMargin)
                              })
                            : (0, a.jsx)(s.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.icon
                              })
                    ]
                }),
                (0, a.jsx)('div', {
                    children: (0, a.jsxs)(s.Text, {
                        variant: 'eyebrow',
                        color: 'text-normal',
                        children: [S.amount, '% off']
                    })
                }),
                (0, a.jsxs)('div', {
                    className: y.badgeContainer,
                    children: [
                        (0, a.jsx)(s.Clickable, {
                            onClick: Z,
                            className: o()(y.badge, y.clickable, {
                                [y.acked]: E,
                                [y.expired]: I
                            }),
                            children: (0, a.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != C &&
                            (0, a.jsx)('div', {
                                className: o()(y.badge, y.__invalid_badgeBottom, y.redeemed),
                                children: (0, a.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: o()(y.loadingContainer, { [y.isLoading]: b || x }),
                    children: (0, a.jsx)(s.Spinner, {})
                })
            ]
        })
    );
}
function N() {
    let [e, t] = n.useState([]),
        [r, i] = n.useState([]),
        [l, m] = n.useState(),
        [g, b] = n.useState(),
        [f, _] = n.useState([]),
        [j, N] = n.useState([]),
        [E, I] = n.useState(!0);
    n.useEffect(() => {
        (0 === e.length || 0 === r.length || E) &&
            k().then((e) => {
                let r = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    a = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(r), i(a), null == l && m(r[0].value), null == g && b(a[0].value);
            });
    }, [e, r, l, g, E]),
        n.useEffect(() => {
            E &&
                (I(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                w().then((e) => {
                    _(e.trial.sort((e, t) => e.id.localeCompare(t.id))), N(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [E]);
    let Z = async () => {
            null != l && (await v(l, 'trial'), I(!0));
        },
        R = async () => {
            null != g && (await v(g, 'discount'), I(!0));
        },
        O = async () => {
            await C(), I(!0);
        };
    return (0, a.jsx)(s.ScrollerThin, {
        className: o()(x.panel),
        children: (0, a.jsxs)('div', {
            className: y.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: y.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, a.jsxs)('div', {
                            className: y.buttons,
                            children: [
                                (0, a.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: O,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, a.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    onClick: () => I(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: y.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: y.inputRow,
                            children: [
                                (0, a.jsx)(s.Select, {
                                    className: y.input,
                                    options: e,
                                    isSelected: (e) => l === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => m(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(s.Button, {
                                    onClick: Z,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: y.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: y.inputRow,
                            children: [
                                (0, a.jsx)(s.Select, {
                                    className: y.input,
                                    options: r,
                                    isSelected: (e) => g === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => b(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(s.Button, {
                                    onClick: R,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                f.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: y.section,
                        children: [
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            f.map((t) =>
                                (0, a.jsx)(
                                    T,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => I(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                j.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: y.section,
                        children: [
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            j.map((e) =>
                                (0, a.jsx)(
                                    S,
                                    {
                                        offer: e,
                                        offerOptions: r,
                                        forceRefetch: () => I(!0)
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
