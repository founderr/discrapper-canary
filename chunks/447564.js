n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return E;
        },
        default: function () {
            return I;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(335131),
    u = n(120619),
    d = n(690221),
    h = n(333867),
    m = n(422034),
    p = n(938475),
    f = n(937615),
    g = n(981631),
    C = n(215023),
    x = n(388032),
    v = n(912568),
    _ = n(99713);
function I(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(s.ModalRoot, {
        size: s.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(b, { channel: n })
    });
}
let E = 'HD_STREAMING_POTION_MODAL_KEY';
function b(e) {
    let { channel: t } = e,
        n = p.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [I, b, S, Z, T, N] = (0, r.Wu)([u.Z], () => [u.Z.isFetchingPrice(C.FX), u.Z.isEntitlementFetched(C.FX), u.Z.isEntitlementFetching(C.FX), u.Z.getPrice(C.FX), u.Z.getErrored(C.FX), u.Z.getEntitlement(C.FX)]),
        { analyticsLocations: j } = (0, o.ZP)([a.Z.HD_STREAMING_POTION_MODAL]),
        A = null != N && !N.consumed && N.type === g.qc2.DEVELOPER_GIFT;
    l.useEffect(() => {
        null != N && !1 === N.consumed && N.type !== g.qc2.DEVELOPER_GIFT && (0, c.Zu)(t.id);
    }, [N, t]),
        l.useEffect(
            () => () => {
                (0, c.SN)(C.FX);
            },
            []
        ),
        l.useEffect(() => {
            !I && null == Z && !T && (0, c.Gq)(C.FX);
        }, [I, Z, T]),
        l.useEffect(() => {
            !b && !S && (0, c.gA)(C.FX);
        }, [b, S]);
    let y = () => {
            (0, s.closeModal)(E);
        },
        P = n.map((e, t) => {
            let { user: l } = e;
            return (0, i.jsx)(
                m.O,
                {
                    affinity: l,
                    applyMask: t !== n.length - 1,
                    size: s.AvatarSizes.SIZE_20
                },
                l.id
            );
        });
    return T
        ? (0, i.jsx)('div', {
              className: v.anomaly,
              children: (0, i.jsxs)('div', {
                  className: v.error,
                  children: [
                      (0, i.jsx)(s.Image, {
                          src: _,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: x.intl.string(x.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == Z
          ? (0, i.jsx)('div', {
                className: v.anomaly,
                children: (0, i.jsx)('div', {
                    className: v.spinner,
                    children: (0, i.jsx)(s.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: v.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: v.image,
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: x.intl.string(x.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: v.body,
                                children: [
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: x.intl.string(x.t.K04rOD)
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: x.intl.string(x.t.xwRQWl)
                                    }),
                                    (0, i.jsx)(d.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(s.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: x.intl.string(x.t.sxVfiY)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: v.divider }),
                            (0, i.jsxs)('div', {
                                className: v.applyingTo,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'eyebrow',
                                        children: x.intl.string(x.t.tZyXg4)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: v.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: v.channelLeft,
                                                children: [
                                                    (0, i.jsx)(s.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: v.avatars,
                                                children: P
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: v.footer,
                        children: [
                            (0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                children: x.intl.string(x.t.Avt5KS)
                            }),
                            (0, i.jsx)(s.Button, {
                                onClick: () => {
                                    if (A) {
                                        (0, c.Zu)(t.id), (0, s.closeModal)(E);
                                        return;
                                    }
                                    (0, h.Z)({
                                        skuId: C.FX,
                                        analyticsLocations: j,
                                        onComplete: y
                                    });
                                },
                                children: A ? x.intl.string(x.t.sl6Tcn) : x.intl.formatToPlainString(x.t.S9LAdX, { price: (0, f.T4)(Z.amount, Z.currency) })
                            })
                        ]
                    })
                ]
            });
}
