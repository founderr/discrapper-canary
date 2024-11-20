n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return w;
        },
        default: function () {
            return E;
        }
    }),
    n(47120);
var r,
    i,
    o = n(200651),
    a = n(192379),
    l = n(311570),
    s = n(692547),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    f = n(997323),
    p = n(955843),
    v = n(688465),
    h = n(333867),
    b = n(63063),
    m = n(937615),
    _ = n(82950),
    g = n(981631),
    x = n(215023),
    C = n(388032),
    I = n(912568),
    S = n(99713);
function E(e) {
    let { transitionState: t, channel: n } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, o.jsx)(A, { channel: n })
    });
}
let w = 'HD_STREAMING_POTION_MODAL_KEY';
function A(e) {
    let { channel: t } = e,
        n = (0, p.T$)(t),
        [r, i] = (0, a.useState)(!1),
        { price: s, fetchingPrice: v, error: b } = (0, p.R2)(x.FX),
        { entitlement: m, fetchedEntitlement: _, error: C } = (0, p.t6)(x.FX),
        I = b || C,
        { analyticsLocations: S } = (0, u.ZP)([d.Z.HD_STREAMING_POTION_MODAL]),
        E = null != m && !m.consumed;
    (0, a.useEffect)(
        () => (
            null != m && !1 === m.consumed && r && (0, f.Zu)(t.id, x.FX),
            () => {
                I && (0, f.SN)(x.FX);
            }
        ),
        [m, t, r, I]
    );
    let w = (0, a.useMemo)(
            () => () =>
                (0, h.Z)({
                    skuId: x.FX,
                    analyticsLocations: S,
                    onComplete: c.closeAllModals,
                    variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
                }),
            [S]
        ),
        A = (0, a.useMemo)(
            () => () => {
                (0, f.Zu)(t.id, x.FX), (0, c.closeAllModals)();
            },
            [t.id]
        ),
        y = (0, a.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == m ? void 0 : m.type) === g.qc2.DEVELOPER_GIFT ? 1 : E ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == m ? void 0 : m.type, E]),
        N = (0, a.useMemo)(() => y(), [y]);
    return (0, o.jsx)(j, {
        channel: t,
        buttonState: N,
        price: s,
        onActionClick: () => {
            i(!0), (E ? A : w)();
        },
        loading: v || !_
    });
}
let j = (e) => {
        let { channel: t, buttonState: n, price: r, onActionClick: i, loading: a } = e;
        return a
            ? (0, o.jsx)(O, {})
            : null == r
              ? (0, o.jsx)(M, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)('div', {
                            className: I.modal,
                            children: [(0, o.jsx)(y, {}), (0, o.jsx)(N, { channel: t })]
                        }),
                        (0, o.jsx)(P, {
                            buttonState: n,
                            price: r,
                            onActionClick: i
                        })
                    ]
                });
    },
    y = () =>
        (0, o.jsx)('img', {
            className: I.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: C.intl.string(C.t.DdigcX)
        }),
    N = (e) => {
        let { channel: t } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)('div', {
                    className: I.body,
                    children: [
                        (0, o.jsxs)('div', {
                            className: I.heading,
                            children: [
                                (0, o.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    children: C.intl.string(C.t.K04rOD)
                                }),
                                (0, o.jsx)(v.Z, {})
                            ]
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t.lq40Pz)
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: C.intl.format(C.t['1wV4qq'], { helpCenterLink: b.Z.getArticleURL(g.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: C.intl.string(C.t.qk07Mj)
                        })
                    ]
                }),
                (0, o.jsx)('div', { className: I.divider }),
                (0, o.jsxs)('div', {
                    className: I.applyingTo,
                    children: [
                        (0, o.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: C.intl.string(C.t.tZyXg4)
                        }),
                        (0, o.jsx)(_.Z, { channel: t })
                    ]
                })
            ]
        });
    };
((i = r || (r = {}))[(i.BUY = 0)] = 'BUY'), (i[(i.REDEEM = 1)] = 'REDEEM'), (i[(i.ACTIVATE = 2)] = 'ACTIVATE'), (i[(i.INELIGIBLE = 3)] = 'INELIGIBLE'), (i[(i.ALREADY_ACTIVE = 4)] = 'ALREADY_ACTIVE');
let P = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e;
        return (0, o.jsxs)('div', {
            className: I.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(w);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: C.intl.string(C.t.Avt5KS)
                }),
                (0, o.jsx)(T, {
                    buttonState: t,
                    price: n,
                    onActionClick: r
                })
            ]
        });
    },
    T = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e,
            i = C.intl.formatToPlainString(C.t.S9LAdX, { price: (0, m.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: C.intl.string(C.t.Qrh2BQ),
                4: C.intl.string(C.t.utRdl5)
            }[t];
            return (0, o.jsx)(c.Tooltip, {
                tooltipContentClassName: I.tooltip,
                text: e,
                children: (e) =>
                    (0, o.jsx)(c.Button, {
                        ...e,
                        disabled: !0,
                        children: i
                    })
            });
        }
        let a = {
            0: i,
            1: C.intl.string(C.t.sl6Tcn),
            2: C.intl.string(C.t.XJ9INj)
        }[t];
        return (0, o.jsx)(c.Button, {
            onClick: r,
            children: (0, o.jsxs)('div', {
                className: I.buttonCopy,
                children: [
                    (0, o.jsx)(c.PotionIcon, {
                        color: s.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    a
                ]
            })
        });
    },
    M = () =>
        (0, o.jsx)('div', {
            className: I.anomaly,
            children: (0, o.jsxs)('div', {
                className: I.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: S,
                        width: 178,
                        height: 190
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t.sIA0OD)
                    })
                ]
            })
        }),
    O = () =>
        (0, o.jsx)('div', {
            className: I.anomaly,
            children: (0, o.jsx)('div', {
                className: I.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
