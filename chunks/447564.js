n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return C;
        },
        default: function () {
            return v;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(997323),
    u = n(120619),
    E = n(955843),
    m = n(688465),
    h = n(690221),
    f = n(333867),
    p = n(937615),
    _ = n(82950),
    T = n(981631),
    g = n(215023),
    x = n(388032),
    N = n(1114),
    S = n(99713);
function v(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(s.ModalRoot, {
        size: s.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, r.jsx)(A, { channel: n })
    });
}
let C = 'HD_STREAMING_POTION_MODAL_KEY';
function A(e) {
    let { channel: t } = e,
        n = (0, E.T)(t),
        [v, A] = i.useState(!1),
        [I, M, Z, j, b, y] = (0, l.Wu)([u.Z], () => [u.Z.isFetchingPrice(g.FX), u.Z.isEntitlementFetched(g.FX), u.Z.isEntitlementFetching(g.FX), u.Z.getPrice(g.FX), u.Z.getErrored(g.FX), u.Z.getEntitlement(g.FX)]),
        { analyticsLocations: L } = (0, c.ZP)([o.Z.HD_STREAMING_POTION_MODAL]),
        O = null != y && !y.consumed;
    i.useEffect(() => {
        null != y && !1 === y.consumed && y.type !== T.qc2.DEVELOPER_GIFT && v && (0, d.Zu)(t.id, g.FX);
    }, [y, t, v]),
        i.useEffect(
            () => () => {
                (0, d.SN)(g.FX);
            },
            []
        ),
        i.useEffect(() => {
            !I && null == j && !b && (0, d.Gq)(g.FX);
        }, [I, j, b]),
        i.useEffect(() => {
            !M && !Z && (0, d.gA)(g.FX);
        }, [M, Z]);
    let F = () => (0, s.closeAllModals)();
    return b
        ? (0, r.jsx)('div', {
              className: N.anomaly,
              children: (0, r.jsxs)('div', {
                  className: N.error,
                  children: [
                      (0, r.jsx)(s.Image, {
                          src: S,
                          width: 178,
                          height: 190
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: x.intl.string(x.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == j
          ? (0, r.jsx)('div', {
                className: N.anomaly,
                children: (0, r.jsx)('div', {
                    className: N.spinner,
                    children: (0, r.jsx)(s.Spinner, {})
                })
            })
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: N.modal,
                        children: [
                            (0, r.jsx)('img', {
                                className: N.image,
                                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                                alt: x.intl.string(x.t.DdigcX)
                            }),
                            (0, r.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: N.heading,
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: x.intl.string(x.t.K04rOD)
                                            }),
                                            (0, r.jsx)(m.Z, {})
                                        ]
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: x.intl.string(x.t.lq40Pz)
                                    }),
                                    (0, r.jsx)(h.Z, {
                                        onClick: () => {},
                                        children: (0, r.jsx)(s.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: x.intl.string(x.t['1wV4qq'])
                                        })
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/medium',
                                        children: x.intl.string(x.t.qk07Mj)
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', { className: N.divider }),
                            (0, r.jsxs)('div', {
                                className: N.applyingTo,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'eyebrow',
                                        children: x.intl.string(x.t.tZyXg4)
                                    }),
                                    (0, r.jsx)(_.Z, { channel: t })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: N.footer,
                        children: [
                            (0, r.jsx)(s.Button, {
                                onClick: () => {
                                    (0, s.closeModal)(C);
                                },
                                color: s.Button.Colors.PRIMARY,
                                children: x.intl.string(x.t.Avt5KS)
                            }),
                            n
                                ? (0, r.jsx)(s.Button, {
                                      onClick: () => {
                                          if ((A(!0), O)) {
                                              (0, d.Zu)(t.id, g.FX), (0, s.closeAllModals)();
                                              return;
                                          }
                                          (0, f.Z)({
                                              skuId: g.FX,
                                              analyticsLocations: L,
                                              onComplete: F
                                          });
                                      },
                                      disabled: !n,
                                      children: (0, r.jsxs)('div', {
                                          className: N.buttonCopy,
                                          children: [
                                              (0, r.jsx)(s.PotionIcon, {
                                                  color: a.Z.colors.WHITE,
                                                  size: 'sm'
                                              }),
                                              O ? x.intl.string(x.t.sl6Tcn) : x.intl.formatToPlainString(x.t.S9LAdX, { price: (0, p.T4)(j.amount, j.currency) })
                                          ]
                                      })
                                  })
                                : (0, r.jsx)(s.Tooltip, {
                                      text: x.intl.string(x.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: t, onMouseEnter: n, onMouseLeave: i, ...l } = e;
                                          return (0, r.jsx)(s.Button, {
                                              ...l,
                                              disabled: !0,
                                              onClick: t,
                                              onMouseEnter: n,
                                              onMouseLeave: i,
                                              children: x.intl.formatToPlainString(x.t.S9LAdX, { price: (0, p.T4)(j.amount, j.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
