t.r(n),
    t.d(n, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return I;
        },
        default: function () {
            return T;
        }
    }),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    s = t(692547),
    a = t(481060),
    o = t(100527),
    d = t(906732),
    c = t(335131),
    u = t(120619),
    m = t(955843),
    h = t(688465),
    x = t(690221),
    g = t(333867),
    f = t(937615),
    v = t(82950),
    j = t(981631),
    p = t(215023),
    Z = t(388032),
    C = t(912568),
    N = t(99713);
function T(e) {
    let { transitionState: n, channel: t } = e;
    return (0, l.jsx)(a.ModalRoot, {
        size: a.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, l.jsx)(E, { channel: t })
    });
}
let I = 'HD_STREAMING_POTION_MODAL_KEY';
function E(e) {
    let { channel: n } = e,
        t = (0, m.T)(n),
        [T, E] = i.useState(!1),
        [S, b, A, M, _, k] = (0, r.Wu)([u.Z], () => [u.Z.isFetchingPrice(p.FX), u.Z.isEntitlementFetched(p.FX), u.Z.isEntitlementFetching(p.FX), u.Z.getPrice(p.FX), u.Z.getErrored(p.FX), u.Z.getEntitlement(p.FX)]),
        { analyticsLocations: F } = (0, d.ZP)([o.Z.HD_STREAMING_POTION_MODAL]),
        P = null != k && !k.consumed;
    i.useEffect(() => {
        null != k && !1 === k.consumed && k.type !== j.qc2.DEVELOPER_GIFT && T && (0, c.Zu)(n.id);
    }, [k, n, T]),
        i.useEffect(
            () => () => {
                (0, c.SN)(p.FX);
            },
            []
        ),
        i.useEffect(() => {
            !S && null == M && !_ && (0, c.Gq)(p.FX);
        }, [S, M, _]),
        i.useEffect(() => {
            !b && !A && (0, c.gA)(p.FX);
        }, [b, A]);
    let D = () => (0, a.closeAllModals)();
    return _
        ? (0, l.jsx)('div', {
              className: C.anomaly,
              children: (0, l.jsxs)('div', {
                  className: C.error,
                  children: [
                      (0, l.jsx)(a.Image, {
                          src: N,
                          width: 178,
                          height: 190
                      }),
                      (0, l.jsx)(a.Text, {
                          variant: 'text-md/normal',
                          children: Z.intl.string(Z.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == M
          ? (0, l.jsx)('div', {
                className: C.anomaly,
                children: (0, l.jsx)('div', {
                    className: C.spinner,
                    children: (0, l.jsx)(a.Spinner, {})
                })
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)('div', {
                        className: C.modal,
                        children: [
                            (0, l.jsx)('img', {
                                className: C.image,
                                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                                alt: Z.intl.string(Z.t.DdigcX)
                            }),
                            (0, l.jsxs)('div', {
                                className: C.body,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: C.heading,
                                        children: [
                                            (0, l.jsx)(a.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: Z.intl.string(Z.t.K04rOD)
                                            }),
                                            (0, l.jsx)(h.Z, {})
                                        ]
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: Z.intl.string(Z.t.lq40Pz)
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        onClick: () => {},
                                        children: (0, l.jsx)(a.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: Z.intl.string(Z.t['1wV4qq'])
                                        })
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/medium',
                                        children: Z.intl.string(Z.t.qk07Mj)
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', { className: C.divider }),
                            (0, l.jsxs)('div', {
                                className: C.applyingTo,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        variant: 'eyebrow',
                                        children: Z.intl.string(Z.t.tZyXg4)
                                    }),
                                    (0, l.jsx)(v.Z, { channel: n })
                                ]
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: C.footer,
                        children: [
                            (0, l.jsx)(a.Button, {
                                onClick: () => {
                                    (0, a.closeModal)(I);
                                },
                                color: a.Button.Colors.PRIMARY,
                                children: Z.intl.string(Z.t.Avt5KS)
                            }),
                            t
                                ? (0, l.jsx)(a.Button, {
                                      onClick: () => {
                                          if ((E(!0), P)) {
                                              (0, c.Zu)(n.id), (0, a.closeAllModals)();
                                              return;
                                          }
                                          (0, g.Z)({
                                              skuId: p.FX,
                                              analyticsLocations: F,
                                              onComplete: D
                                          });
                                      },
                                      disabled: !t,
                                      children: (0, l.jsxs)('div', {
                                          className: C.buttonCopy,
                                          children: [
                                              (0, l.jsx)(a.PotionIcon, {
                                                  color: s.Z.colors.INTERACTIVE_ACTIVE,
                                                  size: 'sm'
                                              }),
                                              P ? Z.intl.string(Z.t.sl6Tcn) : Z.intl.formatToPlainString(Z.t.S9LAdX, { price: (0, f.T4)(M.amount, M.currency) })
                                          ]
                                      })
                                  })
                                : (0, l.jsx)(a.Tooltip, {
                                      text: Z.intl.string(Z.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: n, onMouseEnter: t, onMouseLeave: i, ...r } = e;
                                          return (0, l.jsx)(a.Button, {
                                              ...r,
                                              disabled: !0,
                                              onClick: n,
                                              onMouseEnter: t,
                                              onMouseLeave: i,
                                              children: Z.intl.formatToPlainString(Z.t.S9LAdX, { price: (0, f.T4)(M.amount, M.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
