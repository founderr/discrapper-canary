n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return A;
        },
        default: function () {
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
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(997323),
    p = n(955843),
    h = n(688465),
    v = n(333867),
    _ = n(63063),
    m = n(937615),
    b = n(82950),
    g = n(981631),
    E = n(215023),
    C = n(388032),
    S = n(1114),
    I = n(99713);
function x(e) {
    let { transitionState: t, channel: n } = e;
    return (0, o.jsx)(c.ModalRoot, {
        size: c.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, o.jsx)(T, { channel: n })
    });
}
let A = 'HD_STREAMING_POTION_MODAL_KEY';
function T(e) {
    let { channel: t } = e,
        n = (0, p.T$)(t),
        [r, i] = (0, a.useState)(!1),
        { price: s, fetchingPrice: h, error: _ } = (0, p.R2)(E.FX),
        { entitlement: m, fetchedEntitlement: b, error: C } = (0, p.t6)(E.FX),
        S = _ || C,
        { analyticsLocations: I } = (0, d.ZP)([u.Z.HD_STREAMING_POTION_MODAL]),
        x = null != m && !m.consumed;
    (0, a.useEffect)(
        () => (
            null != m && !1 === m.consumed && r && (0, f.Zu)(t.id, E.FX),
            () => {
                S && (0, f.SN)(E.FX);
            }
        ),
        [m, t, r, S]
    );
    let A = (0, a.useMemo)(
            () => () =>
                (0, v.Z)({
                    skuId: E.FX,
                    analyticsLocations: I,
                    onComplete: c.closeAllModals,
                    variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
                }),
            [I]
        ),
        T = (0, a.useMemo)(
            () => () => {
                (0, f.Zu)(t.id, E.FX), (0, c.closeAllModals)();
            },
            [t.id]
        ),
        w = (0, a.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == m ? void 0 : m.type) === g.qc2.DEVELOPER_GIFT ? 1 : x ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == m ? void 0 : m.type, x]),
        y = (0, a.useMemo)(() => w(), [w]);
    return (0, o.jsx)(N, {
        channel: t,
        buttonState: y,
        price: s,
        onActionClick: () => {
            i(!0), (x ? T : A)();
        },
        loading: h || !b
    });
}
let N = (e) => {
        let { channel: t, buttonState: n, price: r, onActionClick: i, loading: a } = e;
        return a
            ? (0, o.jsx)(P, {})
            : null == r
              ? (0, o.jsx)(L, {})
              : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)('div', {
                            className: S.modal,
                            children: [(0, o.jsx)(w, {}), (0, o.jsx)(y, { channel: t })]
                        }),
                        (0, o.jsx)(M, {
                            buttonState: n,
                            price: r,
                            onActionClick: i
                        })
                    ]
                });
    },
    w = () =>
        (0, o.jsx)('img', {
            className: S.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: C.intl.string(C.t.DdigcX)
        }),
    y = (e) => {
        let { channel: t } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)('div', {
                    className: S.body,
                    children: [
                        (0, o.jsxs)('div', {
                            className: S.heading,
                            children: [
                                (0, o.jsx)(c.Heading, {
                                    variant: 'heading-lg/bold',
                                    children: C.intl.string(C.t.K04rOD)
                                }),
                                (0, o.jsx)(h.Z, {})
                            ]
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t.lq40Pz)
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: C.intl.format(C.t['1wV4qq'], { helpCenterLink: _.Z.getArticleURL(g.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: C.intl.string(C.t.qk07Mj)
                        })
                    ]
                }),
                (0, o.jsx)('div', { className: S.divider }),
                (0, o.jsxs)('div', {
                    className: S.applyingTo,
                    children: [
                        (0, o.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: C.intl.string(C.t.tZyXg4)
                        }),
                        (0, o.jsx)(b.Z, { channel: t })
                    ]
                })
            ]
        });
    };
((i = r || (r = {}))[(i.BUY = 0)] = 'BUY'), (i[(i.REDEEM = 1)] = 'REDEEM'), (i[(i.ACTIVATE = 2)] = 'ACTIVATE'), (i[(i.INELIGIBLE = 3)] = 'INELIGIBLE'), (i[(i.ALREADY_ACTIVE = 4)] = 'ALREADY_ACTIVE');
let M = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e;
        return (0, o.jsxs)('div', {
            className: S.footer,
            children: [
                (0, o.jsx)(c.Button, {
                    onClick: () => {
                        (0, c.closeModal)(A);
                    },
                    color: c.Button.Colors.PRIMARY,
                    children: C.intl.string(C.t.Avt5KS)
                }),
                (0, o.jsx)(O, {
                    buttonState: t,
                    price: n,
                    onActionClick: r
                })
            ]
        });
    },
    O = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e,
            i = C.intl.formatToPlainString(C.t.S9LAdX, { price: (0, m.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: C.intl.string(C.t.Qrh2BQ),
                4: C.intl.string(C.t.utRdl5)
            }[t];
            return (0, o.jsx)(c.Tooltip, {
                tooltipContentClassName: S.tooltip,
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
                className: S.buttonCopy,
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
    L = () =>
        (0, o.jsx)('div', {
            className: S.anomaly,
            children: (0, o.jsxs)('div', {
                className: S.error,
                children: [
                    (0, o.jsx)(c.Image, {
                        src: I,
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
    P = () =>
        (0, o.jsx)('div', {
            className: S.anomaly,
            children: (0, o.jsx)('div', {
                className: S.spinner,
                children: (0, o.jsx)(c.Spinner, {})
            })
        });
