n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return T;
        },
        default: function () {
            return I;
        }
    });
var i = n(735250),
    s = n(470079),
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
    f = n(215023),
    E = n(689938),
    g = n(912568),
    C = n(99713);
function I(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(l.ModalRoot, {
        size: l.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(x, { channel: n })
    });
}
let T = 'HD_STREAMING_POTION_MODAL_KEY';
function x(e) {
    let { channel: t } = e,
        n = m.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        I = (0, a.e7)([u.Z], () => u.Z.getFetching(f.FX)),
        x = (0, a.e7)([u.Z], () => u.Z.getPrice(f.FX)),
        S = (0, a.e7)([u.Z], () => u.Z.getErrored(f.FX)),
        { analyticsLocations: v } = (0, o.ZP)([r.Z.HD_STREAMING_POTION_MODAL]),
        N = (0, a.e7)([u.Z], () => u.Z.getEntitlement());
    s.useEffect(() => {
        null != N && N.sku_id === f.FX && !1 === N.consumed && (0, c.Zu)(t.id);
    }, [N, t]),
        s.useEffect(
            () => () => {
                (0, c.SN)(f.FX);
            },
            []
        ),
        s.useEffect(() => {
            !I && null == x && !S && (0, c.Gq)(f.FX);
        }, [I, x, S]);
    let A = () => {
            (0, l.closeModal)(T);
        },
        Z = n.map((e, t) => {
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
    return S
        ? (0, i.jsx)('div', {
              className: g.anomaly,
              children: (0, i.jsxs)('div', {
                  className: g.error,
                  children: [
                      (0, i.jsx)(l.Image, {
                          src: C,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_ERROR_MESSAGE
                      })
                  ]
              })
          })
        : null == x
          ? (0, i.jsx)('div', {
                className: g.anomaly,
                children: (0, i.jsx)('div', {
                    className: g.spinner,
                    children: (0, i.jsx)(l.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: g.image,
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_IMAGE_ALT
                            }),
                            (0, i.jsxs)('div', {
                                className: g.body,
                                children: [
                                    (0, i.jsx)(l.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_TITLE
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_DESCR
                                    }),
                                    (0, i.jsx)(d.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(l.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_LINK
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: g.divider }),
                            (0, i.jsxs)('div', {
                                className: g.applyingTo,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'eyebrow',
                                        children: E.Z.Messages.CONSUMABLE_HD_STREAMING_APPLYING_TO
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: g.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: g.channelLeft,
                                                children: [
                                                    (0, i.jsx)(l.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: g.avatars,
                                                children: Z
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.footer,
                        children: [
                            (0, i.jsx)(l.Button, {
                                color: l.Button.Colors.PRIMARY,
                                children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_CANCEL_BUTTON_COPY
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: () => {
                                    (0, h.Z)({
                                        skuId: f.FX,
                                        analyticsLocations: v,
                                        onComplete: A
                                    });
                                },
                                children: E.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_BUY_BUTTON_COPY.format({ price: (0, _.T4)(x.amount, x.currency) })
                            })
                        ]
                    })
                ]
            });
}
