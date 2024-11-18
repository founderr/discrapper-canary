n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return S;
        },
        default: function () {
            return I;
        }
    }),
    n(47120);
var r,
    l,
    i = n(200651),
    a = n(192379),
    s = n(692547),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(997323),
    E = n(955843),
    m = n(688465),
    h = n(333867),
    p = n(63063),
    f = n(937615),
    x = n(82950),
    T = n(981631),
    _ = n(215023),
    N = n(388032),
    g = n(1114),
    A = n(99713);
function I(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(o.ModalRoot, {
        size: o.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(C, { channel: n })
    });
}
let S = 'HD_STREAMING_POTION_MODAL_KEY';
function C(e) {
    let { channel: t } = e,
        n = (0, E.T$)(t),
        [r, l] = (0, a.useState)(!1),
        { price: s, fetchingPrice: m, error: p } = (0, E.R2)(_.FX),
        { entitlement: f, fetchedEntitlement: x, error: N } = (0, E.t6)(_.FX),
        g = p || N,
        { analyticsLocations: A } = (0, d.ZP)([c.Z.HD_STREAMING_POTION_MODAL]),
        I = null != f && !f.consumed;
    (0, a.useEffect)(
        () => (
            null != f && !1 === f.consumed && r && (0, u.Zu)(t.id, _.FX),
            () => {
                g && (0, u.SN)(_.FX);
            }
        ),
        [f, t, r, g]
    );
    let S = (0, a.useMemo)(
            () => () =>
                (0, h.Z)({
                    skuId: _.FX,
                    analyticsLocations: A,
                    onComplete: o.closeAllModals
                }),
            [A]
        ),
        C = (0, a.useMemo)(
            () => () => {
                (0, u.Zu)(t.id, _.FX), (0, o.closeAllModals)();
            },
            [t.id]
        ),
        j = (0, a.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == f ? void 0 : f.type) === T.qc2.DEVELOPER_GIFT ? 1 : I ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == f ? void 0 : f.type, I]),
        M = (0, a.useMemo)(() => j(), [j]);
    return (0, i.jsx)(v, {
        channel: t,
        buttonState: M,
        price: s,
        onActionClick: () => {
            l(!0), (I ? C : S)();
        },
        loading: m || !x
    });
}
let v = (e) => {
        let { channel: t, buttonState: n, price: r, onActionClick: l, loading: a } = e;
        return a
            ? (0, i.jsx)(R, {})
            : null == r
              ? (0, i.jsx)(b, {})
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.modal,
                            children: [(0, i.jsx)(j, {}), (0, i.jsx)(M, { channel: t })]
                        }),
                        (0, i.jsx)(Z, {
                            buttonState: n,
                            price: r,
                            onActionClick: l
                        })
                    ]
                });
    },
    j = () =>
        (0, i.jsx)('img', {
            className: g.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: N.intl.string(N.t.DdigcX)
        }),
    M = (e) => {
        let { channel: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: g.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.heading,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-lg/bold',
                                    children: N.intl.string(N.t.K04rOD)
                                }),
                                (0, i.jsx)(m.Z, {})
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: N.intl.string(N.t.lq40Pz)
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: N.intl.format(N.t['1wV4qq'], { helpCenterLink: p.Z.getArticleURL(T.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: N.intl.string(N.t.qk07Mj)
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: g.divider }),
                (0, i.jsxs)('div', {
                    className: g.applyingTo,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'eyebrow',
                            children: N.intl.string(N.t.tZyXg4)
                        }),
                        (0, i.jsx)(x.Z, { channel: t })
                    ]
                })
            ]
        });
    };
((l = r || (r = {}))[(l.BUY = 0)] = 'BUY'), (l[(l.REDEEM = 1)] = 'REDEEM'), (l[(l.ACTIVATE = 2)] = 'ACTIVATE'), (l[(l.INELIGIBLE = 3)] = 'INELIGIBLE'), (l[(l.ALREADY_ACTIVE = 4)] = 'ALREADY_ACTIVE');
let Z = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e;
        return (0, i.jsxs)('div', {
            className: g.footer,
            children: [
                (0, i.jsx)(o.Button, {
                    onClick: () => {
                        (0, o.closeModal)(S);
                    },
                    color: o.Button.Colors.PRIMARY,
                    children: N.intl.string(N.t.Avt5KS)
                }),
                (0, i.jsx)(L, {
                    buttonState: t,
                    price: n,
                    onActionClick: r
                })
            ]
        });
    },
    L = (e) => {
        let { buttonState: t, price: n, onActionClick: r } = e,
            l = N.intl.formatToPlainString(N.t.S9LAdX, { price: (0, f.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: N.intl.string(N.t.Qrh2BQ),
                4: N.intl.string(N.t.utRdl5)
            }[t];
            return (0, i.jsx)(o.Tooltip, {
                tooltipContentClassName: g.tooltip,
                text: e,
                children: (e) =>
                    (0, i.jsx)(o.Button, {
                        ...e,
                        disabled: !0,
                        children: l
                    })
            });
        }
        let a = {
            0: l,
            1: N.intl.string(N.t.sl6Tcn),
            2: N.intl.string(N.t.XJ9INj)
        }[t];
        return (0, i.jsx)(o.Button, {
            onClick: r,
            children: (0, i.jsxs)('div', {
                className: g.buttonCopy,
                children: [
                    (0, i.jsx)(o.PotionIcon, {
                        color: s.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    a
                ]
            })
        });
    },
    b = () =>
        (0, i.jsx)('div', {
            className: g.anomaly,
            children: (0, i.jsxs)('div', {
                className: g.error,
                children: [
                    (0, i.jsx)(o.Image, {
                        src: A,
                        width: 178,
                        height: 190
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.sIA0OD)
                    })
                ]
            })
        }),
    R = () =>
        (0, i.jsx)('div', {
            className: g.anomaly,
            children: (0, i.jsx)('div', {
                className: g.spinner,
                children: (0, i.jsx)(o.Spinner, {})
            })
        });
