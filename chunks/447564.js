t.r(n),
    t.d(n, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return N;
        },
        default: function () {
            return E;
        }
    }),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    s = t(692547),
    a = t(481060),
    o = t(100527),
    c = t(906732),
    d = t(335131),
    u = t(120619),
    m = t(955843),
    f = t(688465),
    h = t(690221),
    x = t(333867),
    g = t(937615),
    v = t(82950),
    j = t(981631),
    p = t(215023),
    Z = t(388032),
    b = t(912568),
    C = t(99713);
function E(e) {
    let { transitionState: n, channel: t } = e;
    return (0, l.jsx)(a.ModalRoot, {
        size: a.ModalSize.DYNAMIC,
        transitionState: n,
        children: (0, l.jsx)(T, { channel: t })
    });
}
let N = 'HD_STREAMING_POTION_MODAL_KEY';
function T(e) {
    let { channel: n } = e,
        t = (0, m.T)(n),
        [E, T, I, A, S, M] = (0, r.Wu)([u.Z], () => [u.Z.isFetchingPrice(p.FX), u.Z.isEntitlementFetched(p.FX), u.Z.isEntitlementFetching(p.FX), u.Z.getPrice(p.FX), u.Z.getErrored(p.FX), u.Z.getEntitlement(p.FX)]),
        { analyticsLocations: _ } = (0, c.ZP)([o.Z.HD_STREAMING_POTION_MODAL]),
        F = null != M && !M.consumed && M.type === j.qc2.DEVELOPER_GIFT;
    i.useEffect(() => {
        null != M && !1 === M.consumed && M.type !== j.qc2.DEVELOPER_GIFT && (0, d.Zu)(n.id);
    }, [M, n]),
        i.useEffect(
            () => () => {
                (0, d.SN)(p.FX);
            },
            []
        ),
        i.useEffect(() => {
            !E && null == A && !S && (0, d.Gq)(p.FX);
        }, [E, A, S]),
        i.useEffect(() => {
            !T && !I && (0, d.gA)(p.FX);
        }, [T, I]);
    let P = () => (0, a.closeAllModals)();
    return S
        ? (0, l.jsx)('div', {
              className: b.anomaly,
              children: (0, l.jsxs)('div', {
                  className: b.error,
                  children: [
                      (0, l.jsx)(a.Image, {
                          src: C,
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
        : null == A
          ? (0, l.jsx)('div', {
                className: b.anomaly,
                children: (0, l.jsx)('div', {
                    className: b.spinner,
                    children: (0, l.jsx)(a.Spinner, {})
                })
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)('div', {
                        className: b.modal,
                        children: [
                            (0, l.jsx)('img', {
                                className: b.image,
                                src: 'https://cdn.discordapp.com/assets/content/f7cb08dc1c9ca86a0c705f26d6e9af2ba2cc1acd4fd51e039417b2936069bc5b.png',
                                alt: Z.intl.string(Z.t.DdigcX)
                            }),
                            (0, l.jsxs)('div', {
                                className: b.body,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: b.heading,
                                        children: [
                                            (0, l.jsx)(a.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: Z.intl.string(Z.t.K04rOD)
                                            }),
                                            (0, l.jsx)(f.Z, {})
                                        ]
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: Z.intl.string(Z.t.lq40Pz)
                                    }),
                                    (0, l.jsx)(h.Z, {
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
                            (0, l.jsx)('div', { className: b.divider }),
                            (0, l.jsxs)('div', {
                                className: b.applyingTo,
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
                        className: b.footer,
                        children: [
                            (0, l.jsx)(a.Button, {
                                onClick: () => {
                                    (0, a.closeModal)(N);
                                },
                                color: a.Button.Colors.PRIMARY,
                                children: Z.intl.string(Z.t.Avt5KS)
                            }),
                            t
                                ? (0, l.jsx)(a.Button, {
                                      onClick: () => {
                                          if (F) {
                                              (0, d.Zu)(n.id), (0, a.closeAllModals)();
                                              return;
                                          }
                                          (0, x.Z)({
                                              skuId: p.FX,
                                              analyticsLocations: _,
                                              onComplete: P
                                          });
                                      },
                                      disabled: !t,
                                      children: (0, l.jsxs)('div', {
                                          className: b.buttonCopy,
                                          children: [
                                              (0, l.jsx)(a.PotionIcon, {
                                                  color: s.Z.colors.INTERACTIVE_ACTIVE,
                                                  size: 'sm'
                                              }),
                                              F ? Z.intl.string(Z.t.sl6Tcn) : Z.intl.formatToPlainString(Z.t.S9LAdX, { price: (0, g.T4)(A.amount, A.currency) })
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
                                              children: Z.intl.formatToPlainString(Z.t.S9LAdX, { price: (0, g.T4)(A.amount, A.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
