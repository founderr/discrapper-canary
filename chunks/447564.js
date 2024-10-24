n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return x;
        },
        default: function () {
            return T;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(100527),
    o = n(906732),
    c = n(335131),
    u = n(120619),
    d = n(690221),
    h = n(333867),
    p = n(422034),
    m = n(938475),
    _ = n(937615),
    f = n(981631),
    E = n(215023),
    g = n(689938),
    C = n(912568),
    I = n(99713);
function T(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(l.ModalRoot, {
        size: l.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(S, { channel: n })
    });
}
let x = 'HD_STREAMING_POTION_MODAL_KEY';
function S(e) {
    let { channel: t } = e,
        n = m.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [T, S, v, N, A, Z] = (0, a.Wu)([u.Z], () => [u.Z.isFetchingPrice(E.FX), u.Z.isEntitlementFetched(E.FX), u.Z.isEntitlementFetching(E.FX), u.Z.getPrice(E.FX), u.Z.getErrored(E.FX), u.Z.getEntitlement(E.FX)]),
        { analyticsLocations: M } = (0, o.ZP)([r.Z.HD_STREAMING_POTION_MODAL]),
        b = null != Z && !Z.consumed && Z.type === f.qc2.DEVELOPER_GIFT;
    s.useEffect(() => {
        null != Z && !1 === Z.consumed && Z.type !== f.qc2.DEVELOPER_GIFT && (0, c.Zu)(t.id);
    }, [Z, t]),
        s.useEffect(
            () => () => {
                (0, c.SN)(E.FX);
            },
            []
        ),
        s.useEffect(() => {
            !T && null == N && !A && (0, c.Gq)(E.FX);
        }, [T, N, A]),
        s.useEffect(() => {
            !S && !v && (0, c.gA)(E.FX);
        }, [S, v]);
    let R = () => {
            (0, l.closeModal)(x);
        },
        L = n.map((e, t) => {
            let { user: s } = e;
            return (0, i.jsx)(
                p.O,
                {
                    affinity: s,
                    applyMask: t !== n.length - 1,
                    size: l.AvatarSizes.SIZE_20
                },
                s.id
            );
        });
    return A
        ? (0, i.jsx)('div', {
              className: C.anomaly,
              children: (0, i.jsxs)('div', {
                  className: C.error,
                  children: [
                      (0, i.jsx)(l.Image, {
                          src: I,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_ERROR_MESSAGE
                      })
                  ]
              })
          })
        : null == N
          ? (0, i.jsx)('div', {
                className: C.anomaly,
                children: (0, i.jsx)('div', {
                    className: C.spinner,
                    children: (0, i.jsx)(l.Spinner, {})
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
                                alt: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_IMAGE_ALT
                            }),
                            (0, i.jsxs)('div', {
                                className: C.body,
                                children: [
                                    (0, i.jsx)(l.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_TITLE
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_DESCR
                                    }),
                                    (0, i.jsx)(d.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(l.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_LINK
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: C.divider }),
                            (0, i.jsxs)('div', {
                                className: C.applyingTo,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'eyebrow',
                                        children: g.Z.Messages.CONSUMABLE_HD_STREAMING_APPLYING_TO
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: C.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: C.channelLeft,
                                                children: [
                                                    (0, i.jsx)(l.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(l.Text, {
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
                            (0, i.jsx)(l.Button, {
                                color: l.Button.Colors.PRIMARY,
                                children: g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_CANCEL_BUTTON_COPY
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: () => {
                                    if (b) {
                                        (0, c.Zu)(t.id), (0, l.closeModal)(x);
                                        return;
                                    }
                                    (0, h.Z)({
                                        skuId: E.FX,
                                        analyticsLocations: M,
                                        onComplete: R
                                    });
                                },
                                children: b ? g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_BUY_FREEBIE_COPY : g.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_BUY_BUTTON_COPY.format({ price: (0, _.T4)(N.amount, N.currency) })
                            })
                        ]
                    })
                ]
            });
}
