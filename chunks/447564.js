n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return A;
        },
        default: function () {
            return S;
        },
        openHDPotionModal: function () {
            return T;
        }
    }),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(311570),
    s = n(692547),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    m = n(997323),
    h = n(324085),
    f = n(688465),
    p = n(333867),
    g = n(63063),
    _ = n(937615),
    E = n(82950),
    C = n(981631),
    I = n(215023),
    x = n(388032),
    N = n(588973),
    v = n(99713);
let T = (e, t) => {
    (0, h.mx)(t),
        (0, c.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) =>
                    (0, l.jsx)(t, {
                        channel: e,
                        ...n
                    });
            },
            { modalKey: A }
        );
};
function S(e) {
    let { transitionState: t, channel: n } = e;
    return (0, l.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, l.jsx)(b, { channel: n })
    });
}
let A = 'HD_STREAMING_POTION_MODAL_KEY';
function b(e) {
    let { channel: t } = e,
        n = (0, h.T$)(t),
        [i, r] = (0, a.useState)(!1),
        { price: s, fetchingPrice: f, error: g } = (0, h.R2)(I.FX),
        { entitlement: _, fetchedEntitlement: E, error: x } = (0, h.t6)(I.FX),
        N = g || x,
        { analyticsLocations: v } = (0, d.ZP)([u.Z.HD_STREAMING_POTION_MODAL]),
        T = null != _ && !_.consumed;
    (0, a.useEffect)(
        () => (
            null != _ && !1 === _.consumed && i && _.type !== C.qc2.DEVELOPER_GIFT && (0, m.Zu)(t.id, I.FX),
            () => {
                N && (0, m.SN)(I.FX);
            }
        ),
        [_, t, i, N]
    );
    let S = (0, a.useMemo)(
            () => () =>
                (0, p.Z)({
                    skuId: I.FX,
                    analyticsLocations: v,
                    onComplete: c.closeAllModals,
                    variantsReturnStyle: o.v.INDIVIDUAL_PRODUCTS
                }),
            [v]
        ),
        A = (0, a.useMemo)(
            () => () => {
                (0, m.Zu)(t.id, I.FX), (0, c.closeAllModals)();
            },
            [t.id]
        ),
        b = (0, a.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == _ ? void 0 : _.type) === C.qc2.DEVELOPER_GIFT ? 1 : T ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == _ ? void 0 : _.type, T]),
        Z = (0, a.useMemo)(() => b(), [b]);
    return (0, l.jsx)(j, {
        channel: t,
        buttonState: Z,
        price: s,
        onActionClick: () => {
            r(!0), (T ? A : S)();
        },
        loading: f || !E
    });
}
let j = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: r, loading: a } = e;
        return a
            ? (0, l.jsx)(O, {})
            : null == i
              ? (0, l.jsx)(y, {})
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: N.modal,
                            children: [(0, l.jsx)(Z, {}), (0, l.jsx)(R, { channel: t })]
                        }),
                        (0, l.jsx)(P, {
                            buttonState: n,
                            price: i,
                            onActionClick: r
                        })
                    ]
                });
    },
    Z = () =>
        (0, l.jsx)('img', {
            className: N.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: x.intl.string(x.t.DdigcX)
        }),
    R = (e) => {
        let { channel: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: N.body,
                    children: [
                        (0, l.jsxs)('div', {
                            className: N.heading,
                            children: [
                                (0, l.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    children: x.intl.string(x.t.K04rOD)
                                }),
                                (0, l.jsx)(f.Z, {})
                            ]
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: x.intl.string(x.t.lq40Pz)
                        }),
                        (0, l.jsx)(c.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: x.intl.format(x.t['1wV4qq'], { helpCenterLink: g.Z.getArticleURL(C.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, l.jsx)(c.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: x.intl.string(x.t.qk07Mj)
                        })
                    ]
                }),
                (0, l.jsx)('div', { className: N.divider }),
                (0, l.jsxs)('div', {
                    className: N.applyingTo,
                    children: [
                        (0, l.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: x.intl.string(x.t.tZyXg4)
                        }),
                        (0, l.jsx)(E.Z, { channel: t })
                    ]
                })
            ]
        });
    };
((r = i || (i = {}))[(r.BUY = 0)] = 'BUY'), (r[(r.REDEEM = 1)] = 'REDEEM'), (r[(r.ACTIVATE = 2)] = 'ACTIVATE'), (r[(r.INELIGIBLE = 3)] = 'INELIGIBLE'), (r[(r.ALREADY_ACTIVE = 4)] = 'ALREADY_ACTIVE');
let P = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e;
        return (0, l.jsxs)('div', {
            className: N.footer,
            children: [
                (0, l.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(A);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: x.intl.string(x.t.Avt5KS)
                }),
                (0, l.jsx)(L, {
                    buttonState: t,
                    price: n,
                    onActionClick: i
                })
            ]
        });
    },
    L = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e,
            r = x.intl.formatToPlainString(x.t.S9LAdX, { price: (0, _.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: x.intl.string(x.t.Qrh2BQ),
                4: x.intl.string(x.t.utRdl5)
            }[t];
            return (0, l.jsx)(c.Tooltip, {
                tooltipContentClassName: N.tooltip,
                text: e,
                children: (e) =>
                    (0, l.jsx)(c.Button, {
                        ...e,
                        disabled: !0,
                        children: r
                    })
            });
        }
        let a = {
            0: r,
            1: x.intl.string(x.t.sl6Tcn),
            2: x.intl.string(x.t.XJ9INj)
        }[t];
        return (0, l.jsx)(c.Button, {
            onClick: i,
            children: (0, l.jsxs)('div', {
                className: N.buttonCopy,
                children: [
                    (0, l.jsx)(c.PotionIcon, {
                        color: s.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    a
                ]
            })
        });
    },
    y = () =>
        (0, l.jsx)('div', {
            className: N.anomaly,
            children: (0, l.jsxs)('div', {
                className: N.error,
                children: [
                    (0, l.jsx)(c.Image, {
                        src: v,
                        width: 178,
                        height: 190
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: x.intl.string(x.t.sIA0OD)
                    })
                ]
            })
        }),
    O = () =>
        (0, l.jsx)('div', {
            className: N.anomaly,
            children: (0, l.jsx)('div', {
                className: N.spinner,
                children: (0, l.jsx)(c.Spinner, {})
            })
        });
