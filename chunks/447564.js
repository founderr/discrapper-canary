n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return N;
        },
        default: function () {
            return x;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(335131),
    d = n(120619),
    u = n(690221),
    m = n(333867),
    h = n(422034),
    f = n(938475),
    p = n(937615),
    _ = n(981631),
    g = n(215023),
    E = n(388032),
    C = n(912568),
    I = n(99713);
function x(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(a.ModalRoot, {
        size: a.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(v, { channel: n })
    });
}
let N = 'HD_STREAMING_POTION_MODAL_KEY';
function v(e) {
    let { channel: t } = e,
        n = f.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [x, v, T, S, A, b] = (0, l.Wu)([d.Z], () => [d.Z.isFetchingPrice(g.FX), d.Z.isEntitlementFetched(g.FX), d.Z.isEntitlementFetching(g.FX), d.Z.getPrice(g.FX), d.Z.getErrored(g.FX), d.Z.getEntitlement(g.FX)]),
        { analyticsLocations: j } = (0, s.ZP)([o.Z.HD_STREAMING_POTION_MODAL]),
        Z = null != b && !b.consumed && b.type === _.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != b && !1 === b.consumed && b.type !== _.qc2.DEVELOPER_GIFT && (0, c.Zu)(t.id);
    }, [b, t]),
        r.useEffect(
            () => () => {
                (0, c.SN)(g.FX);
            },
            []
        ),
        r.useEffect(() => {
            !x && null == S && !A && (0, c.Gq)(g.FX);
        }, [x, S, A]),
        r.useEffect(() => {
            !v && !T && (0, c.gA)(g.FX);
        }, [v, T]);
    let R = () => {
            (0, a.closeModal)(N);
        },
        L = n.map((e, t) => {
            let { user: r } = e;
            return (0, i.jsx)(
                h.O,
                {
                    affinity: r,
                    applyMask: t !== n.length - 1,
                    size: a.AvatarSizes.SIZE_20
                },
                r.id
            );
        });
    return A
        ? (0, i.jsx)('div', {
              className: C.anomaly,
              children: (0, i.jsxs)('div', {
                  className: C.error,
                  children: [
                      (0, i.jsx)(a.Image, {
                          src: I,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(a.Text, {
                          variant: 'text-md/normal',
                          children: E.intl.string(E.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == S
          ? (0, i.jsx)('div', {
                className: C.anomaly,
                children: (0, i.jsx)('div', {
                    className: C.spinner,
                    children: (0, i.jsx)(a.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: C.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: C.image,
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: E.intl.string(E.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: C.body,
                                children: [
                                    (0, i.jsx)(a.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: E.intl.string(E.t.K04rOD)
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.intl.string(E.t.xwRQWl)
                                    }),
                                    (0, i.jsx)(u.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(a.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: E.intl.string(E.t.sxVfiY)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: C.divider }),
                            (0, i.jsxs)('div', {
                                className: C.applyingTo,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'eyebrow',
                                        children: E.intl.string(E.t.tZyXg4)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: C.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: C.channelLeft,
                                                children: [
                                                    (0, i.jsx)(a.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: C.avatars,
                                                children: L
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.footer,
                        children: [
                            (0, i.jsx)(a.Button, {
                                onClick: () => {
                                    (0, a.closeModal)(N);
                                },
                                color: a.Button.Colors.PRIMARY,
                                children: E.intl.string(E.t.Avt5KS)
                            }),
                            (0, i.jsx)(a.Button, {
                                onClick: () => {
                                    if (Z) {
                                        (0, c.Zu)(t.id), (0, a.closeModal)(N);
                                        return;
                                    }
                                    (0, m.Z)({
                                        skuId: g.FX,
                                        analyticsLocations: j,
                                        onComplete: R
                                    });
                                },
                                children: Z ? E.intl.string(E.t.sl6Tcn) : E.intl.formatToPlainString(E.t.S9LAdX, { price: (0, p.T4)(S.amount, S.currency) })
                            })
                        ]
                    })
                ]
            });
}
