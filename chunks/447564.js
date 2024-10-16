s.r(a),
    s.d(a, {
        default: function () {
            return N;
        }
    });
var n = s(735250),
    t = s(470079),
    r = s(442837),
    i = s(481060),
    d = s(335131),
    l = s(120619),
    c = s(690221),
    o = s(422034),
    _ = s(938475),
    E = s(937615),
    h = s(215023),
    M = s(689938),
    m = s(912568),
    x = s(99713);
function N(e) {
    let { transitionState: a, channel: s } = e;
    return (0, n.jsx)(i.ModalRoot, {
        size: i.ModalSize.DYNAMIC,
        transitionState: a,
        children: (0, n.jsx)(S, { channel: s })
    });
}
function S(e) {
    let { channel: a } = e,
        s = _.ZP.getVoiceStatesForChannel(a).slice(0, 6),
        N = (0, r.e7)([l.Z], () => l.Z.getFetching(h.FX)),
        S = (0, r.e7)([l.Z], () => l.Z.getPrice(h.FX)),
        b = (0, r.e7)([l.Z], () => l.Z.getErrored(h.FX));
    t.useEffect(
        () => () => {
            (0, d.SN)(h.FX);
        },
        []
    ),
        t.useEffect(() => {
            !N && null == S && !b && (0, d.Gq)(h.FX);
        }, [N, S, b]);
    let u = s.map((e, a) => {
        let { user: t } = e;
        return (0, n.jsx)(
            o.O,
            {
                affinity: t,
                applyMask: a !== s.length - 1,
                size: i.AvatarSizes.SIZE_20
            },
            t.id
        );
    });
    return b
        ? (0, n.jsx)('div', {
              className: m.anomaly,
              children: (0, n.jsxs)('div', {
                  className: m.error,
                  children: [
                      (0, n.jsx)(i.Image, {
                          src: x,
                          width: 178,
                          height: 190
                      }),
                      (0, n.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_ERROR_MESSAGE
                      })
                  ]
              })
          })
        : null == S
          ? (0, n.jsx)('div', {
                className: m.anomaly,
                children: (0, n.jsx)('div', {
                    className: m.spinner,
                    children: (0, n.jsx)(i.Spinner, {})
                })
            })
          : (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)('div', {
                        className: m.modal,
                        children: [
                            (0, n.jsx)('img', {
                                className: m.image,
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_IMAGE_ALT
                            }),
                            (0, n.jsxs)('div', {
                                className: m.body,
                                children: [
                                    (0, n.jsx)(i.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_TITLE
                                    }),
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_DESCR
                                    }),
                                    (0, n.jsx)(c.Z, {
                                        onClick: () => {},
                                        children: (0, n.jsx)(i.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_LINK
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', { className: m.divider }),
                            (0, n.jsxs)('div', {
                                className: m.applyingTo,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: 'eyebrow',
                                        children: M.Z.Messages.CONSUMABLE_HD_STREAMING_APPLYING_TO
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: m.channel,
                                        children: [
                                            (0, n.jsxs)('div', {
                                                className: m.channelLeft,
                                                children: [
                                                    (0, n.jsx)(i.VoiceNormalIcon, {}),
                                                    (0, n.jsx)(i.Text, {
                                                        variant: 'text-md/normal',
                                                        children: a.name
                                                    })
                                                ]
                                            }),
                                            u
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: m.footer,
                        children: [
                            (0, n.jsx)(i.Button, {
                                color: i.Button.Colors.PRIMARY,
                                children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_CANCEL_BUTTON_COPY
                            }),
                            (0, n.jsx)(i.Button, { children: M.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_BUY_BUTTON_COPY.format({ price: (0, E.T4)(S.amount, S.currency) }) })
                        ]
                    })
                ]
            });
}
