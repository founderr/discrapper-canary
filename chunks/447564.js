n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return T;
        },
        default: function () {
            return N;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(120619),
    m = n(955843),
    h = n(688465),
    f = n(690221),
    p = n(333867),
    _ = n(937615),
    g = n(82950),
    E = n(981631),
    C = n(215023),
    I = n(388032),
    x = n(912568),
    v = n(99713);
function N(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(o.ModalRoot, {
        size: o.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(S, { channel: n })
    });
}
let T = 'HD_STREAMING_POTION_MODAL_KEY';
function S(e) {
    let { channel: t } = e,
        n = (0, m.T)(t),
        [N, S, A, b, j, Z] = (0, l.Wu)([u.Z], () => [u.Z.isFetchingPrice(C.FX), u.Z.isEntitlementFetched(C.FX), u.Z.isEntitlementFetching(C.FX), u.Z.getPrice(C.FX), u.Z.getErrored(C.FX), u.Z.getEntitlement(C.FX)]),
        { analyticsLocations: R } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        L = null != Z && !Z.consumed && Z.type === E.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != Z && !1 === Z.consumed && Z.type !== E.qc2.DEVELOPER_GIFT && (0, d.Zu)(t.id);
    }, [Z, t]),
        r.useEffect(
            () => () => {
                (0, d.SN)(C.FX);
            },
            []
        ),
        r.useEffect(() => {
            !N && null == b && !j && (0, d.Gq)(C.FX);
        }, [N, b, j]),
        r.useEffect(() => {
            !S && !A && (0, d.gA)(C.FX);
        }, [S, A]);
    let P = () => (0, o.closeAllModals)();
    return j
        ? (0, i.jsx)('div', {
              className: x.anomaly,
              children: (0, i.jsxs)('div', {
                  className: x.error,
                  children: [
                      (0, i.jsx)(o.Image, {
                          src: v,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: I.intl.string(I.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == b
          ? (0, i.jsx)('div', {
                className: x.anomaly,
                children: (0, i.jsx)('div', {
                    className: x.spinner,
                    children: (0, i.jsx)(o.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: x.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: x.image,
                                src: 'https://cdn.discordapp.com/assets/content/f7cb08dc1c9ca86a0c705f26d6e9af2ba2cc1acd4fd51e039417b2936069bc5b.png',
                                alt: I.intl.string(I.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: x.heading,
                                        children: [
                                            (0, i.jsx)(o.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: I.intl.string(I.t.K04rOD)
                                            }),
                                            (0, i.jsx)(h.Z, {})
                                        ]
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: I.intl.string(I.t.lq40Pz)
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: I.intl.string(I.t['1wV4qq'])
                                        })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/medium',
                                        children: I.intl.string(I.t.qk07Mj)
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: x.divider }),
                            (0, i.jsxs)('div', {
                                className: x.applyingTo,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'eyebrow',
                                        children: I.intl.string(I.t.tZyXg4)
                                    }),
                                    (0, i.jsx)(g.Z, { channel: t })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.footer,
                        children: [
                            (0, i.jsx)(o.Button, {
                                onClick: () => {
                                    (0, o.closeModal)(T);
                                },
                                color: o.Button.Colors.PRIMARY,
                                children: I.intl.string(I.t.Avt5KS)
                            }),
                            n
                                ? (0, i.jsx)(o.Button, {
                                      onClick: () => {
                                          if (L) {
                                              (0, d.Zu)(t.id), (0, o.closeAllModals)();
                                              return;
                                          }
                                          (0, p.Z)({
                                              skuId: C.FX,
                                              analyticsLocations: R,
                                              onComplete: P
                                          });
                                      },
                                      disabled: !n,
                                      children: (0, i.jsxs)('div', {
                                          className: x.buttonCopy,
                                          children: [
                                              (0, i.jsx)(o.PotionIcon, {
                                                  color: a.Z.colors.INTERACTIVE_ACTIVE,
                                                  size: 'sm'
                                              }),
                                              L ? I.intl.string(I.t.sl6Tcn) : I.intl.formatToPlainString(I.t.S9LAdX, { price: (0, _.T4)(b.amount, b.currency) })
                                          ]
                                      })
                                  })
                                : (0, i.jsx)(o.Tooltip, {
                                      text: I.intl.string(I.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: t, onMouseEnter: n, onMouseLeave: r, ...l } = e;
                                          return (0, i.jsx)(o.Button, {
                                              ...l,
                                              disabled: !0,
                                              onClick: t,
                                              onMouseEnter: n,
                                              onMouseLeave: r,
                                              children: I.intl.formatToPlainString(I.t.S9LAdX, { price: (0, _.T4)(b.amount, b.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
