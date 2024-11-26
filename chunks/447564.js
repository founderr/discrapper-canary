n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return A;
        },
        default: function () {
            return T;
        },
        openHDPotionModal: function () {
            return x;
        }
    }),
    n(47120);
var r,
    i,
    o = n(200651),
    a = n(192379),
    l = n(311570),
    s = n(692547),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(997323),
    _ = n(324085),
    p = n(688465),
    m = n(333867),
    h = n(63063),
    v = n(937615),
    E = n(82950),
    b = n(981631),
    g = n(215023),
    S = n(388032),
    C = n(588973),
    I = n(99713);
let x = (e, t) => {
    (0, _.mx)(t),
        (0, u.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) =>
                    (0, o.jsx)(t, {
                        channel: e,
                        ...n
                    });
            },
            { modalKey: A }
        );
};
function T(e) {
    let { transitionState: t, channel: n } = e;
    return (0, o.jsx)(u.ModalRoot, {
        size: u.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, o.jsx)(N, { channel: n })
    });
}
let A = 'HD_STREAMING_POTION_MODAL_KEY';
function N(e) {
    let { channel: t } = e,
        n = (0, _.T$)(t),
        [r, i] = (0, a.useState)(!1),
        { price: s, fetchingPrice: p, error: h } = (0, _.R2)(g.FX),
        { entitlement: v, fetchedEntitlement: E, error: S } = (0, _.t6)(g.FX),
        C = h || S,
        { analyticsLocations: I } = (0, d.ZP)([c.Z.HD_STREAMING_POTION_MODAL]),
        x = null != v && !v.consumed;
    (0, a.useEffect)(
        () => (
            null != v && !1 === v.consumed && r && v.type !== b.qc2.DEVELOPER_GIFT && (0, f.Zu)(t.id, g.FX),
            () => {
                C && (0, f.SN)(g.FX);
            }
        ),
        [v, t, r, C]
    );
    let T = (0, a.useMemo)(
            () => () =>
                (0, m.Z)({
                    skuId: g.FX,
                    analyticsLocations: I,
                    onComplete: u.closeAllModals,
                    variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
                }),
            [I]
        ),
        A = (0, a.useMemo)(
            () => () => {
                (0, f.Zu)(t.id, g.FX), (0, u.closeAllModals)();
            },
            [t.id]
        ),
        N = (0, a.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == v ? void 0 : v.type) === b.qc2.DEVELOPER_GIFT ? 1 : x ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == v ? void 0 : v.type, x]),
        y = (0, a.useMemo)(() => N(), [N]);
    return (0, o.jsx)(w, {
        channel: t,
        buttonState: y,
        price: s,
        onActionClick: () => {
            i(!0), (x ? A : T)();
        },
        loading: p || !E
    });
}
let w = (e) => {
        let { channel: t, buttonState: n, price: r, onActionClick: i, loading: a } = e;
        return a
            ? (0, o.jsx)(P, {})
            : null == r
              ? (0, o.jsx)(j, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)('div', {
                            className: C.modal,
                            children: [(0, o.jsx)(y, {}), (0, o.jsx)(L, { channel: t })]
                        }),
                        (0, o.jsx)(Z, {
                            buttonState: n,
                            price: r,
                            onActionClick: i
                        })
                    ]
                });
    },
    y = () =>
        (0, o.jsx)('img', {
            className: C.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: S.intl.string(S.t.DdigcX)
        }),
    L = (e) => {
        let { channel: t } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)('div', {
                    className: C.body,
                    children: [
                        (0, o.jsxs)('div', {
                            className: C.heading,
                            children: [
                                (0, o.jsx)(u.Heading, {
                                    variant: 'heading-lg/bold',
                                    children: S.intl.string(S.t.K04rOD)
                                }),
                                (0, o.jsx)(p.Z, {})
                            ]
                        }),
                        (0, o.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            children: S.intl.string(S.t.lq40Pz)
                        }),
                        (0, o.jsx)(u.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: S.intl.format(S.t['1wV4qq'], { helpCenterLink: h.Z.getArticleURL(b.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, o.jsx)(u.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: S.intl.string(S.t.qk07Mj)
                        })
                    ]
                }),
                (0, o.jsx)('div', { className: C.divider }),
                (0, o.jsxs)('div', {
                    className: C.applyingTo,
                    children: [
                        (0, o.jsx)(u.Text, {
                            variant: 'eyebrow',
                            children: S.intl.string(S.t.tZyXg4)
                        }),
                        (0, o.jsx)(E.Z, { channel: t })
                    ]
                })
            ]
        });
    };
((i = r || (r = {}))[(i.BUY = 0)] = 'BUY'), (i[(i.REDEEM = 1)] = 'REDEEM'), (i[(i.ACTIVATE = 2)] = 'ACTIVATE'), (i[(i.INELIGIBLE = 3)] = 'INELIGIBLE'), (i[(i.ALREADY_ACTIVE = 4)] = 'ALREADY_ACTIVE');
let Z = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e;
        return (0, o.jsxs)('div', {
            className: C.footer,
            children: [
                (0, o.jsx)(u.Button, {
                    onClick: () => {
                        (0, u.closeModal)(A);
                    },
                    color: u.Button.Colors.PRIMARY,
                    children: S.intl.string(S.t.Avt5KS)
                }),
                (0, o.jsx)(M, {
                    buttonState: t,
                    price: n,
                    onActionClick: r
                })
            ]
        });
    },
    M = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e,
            i = S.intl.formatToPlainString(S.t.S9LAdX, { price: (0, v.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: S.intl.string(S.t.Qrh2BQ),
                4: S.intl.string(S.t.utRdl5)
            }[t];
            return (0, o.jsx)(u.Tooltip, {
                tooltipContentClassName: C.tooltip,
                text: e,
                children: (e) =>
                    (0, o.jsx)(u.Button, {
                        ...e,
                        disabled: !0,
                        children: i
                    })
            });
        }
        let a = {
            0: i,
            1: S.intl.string(S.t.sl6Tcn),
            2: S.intl.string(S.t.XJ9INj)
        }[t];
        return (0, o.jsx)(u.Button, {
            onClick: r,
            children: (0, o.jsxs)('div', {
                className: C.buttonCopy,
                children: [
                    (0, o.jsx)(u.PotionIcon, {
                        color: s.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    a
                ]
            })
        });
    },
    j = () =>
        (0, o.jsx)('div', {
            className: C.anomaly,
            children: (0, o.jsxs)('div', {
                className: C.error,
                children: [
                    (0, o.jsx)(u.Image, {
                        src: I,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        children: S.intl.string(S.t.sIA0OD)
                    })
                ]
            })
        }),
    P = () =>
        (0, o.jsx)('div', {
            className: C.anomaly,
            children: (0, o.jsx)('div', {
                className: C.spinner,
                children: (0, o.jsx)(u.Spinner, {})
            })
        });
