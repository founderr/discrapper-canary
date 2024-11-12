n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return R;
        },
        default: function () {
            return Z;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(259443),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(120619),
    h = n(688465),
    f = n(569545),
    p = n(690221),
    _ = n(333867),
    g = n(199902),
    E = n(430824),
    C = n(959457),
    I = n(594174),
    x = n(937615),
    v = n(82950),
    N = n(981631),
    T = n(215023),
    S = n(388032),
    A = n(912568),
    b = n(99713);
let j = new l.Yd('HDStreamingConsumableModal');
function Z(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(s.ModalRoot, {
        size: s.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(L, { channel: n })
    });
}
let R = 'HD_STREAMING_POTION_MODAL_KEY';
function L(e) {
    let { channel: t } = e,
        n = (0, a.e7)([E.Z], () => E.Z.getGuild(t.guild_id)),
        l = (0, a.e7)([I.default], () => {
            var e;
            return null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
        }),
        Z = (0, a.e7)([g.Z], () => g.Z.getAllActiveStreamsForChannel(t.id).filter((e) => e.ownerId !== l)),
        [L, P] = r.useState(null),
        [y, O] = r.useState([]);
    (0, a.e7)(
        [C.Z],
        () => {
            if (null == L || Date.now() - L > 10000) {
                let e = Z.map((e) => {
                    var t;
                    let n = (0, f.V9)(e),
                        i = C.Z.getRTCConnection(n);
                    return null == i ? void 0 : null === (t = i.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                });
                j.info('Setting bitrates', e), O(e), P(Date.now());
            }
        },
        [L, Z]
    );
    let M = r.useMemo(() => {
            if (0 === y.length) return !0;
            if (y.some((e) => null == e)) return !1;
            for (let e of y) if (null == e || e < 3500000) return !1;
            return !0;
        }, [y]),
        k = null != n && 0 === n.premiumTier && M,
        [D, B, U, w, F, G] = (0, a.Wu)([m.Z], () => [m.Z.isFetchingPrice(T.FX), m.Z.isEntitlementFetched(T.FX), m.Z.isEntitlementFetching(T.FX), m.Z.getPrice(T.FX), m.Z.getErrored(T.FX), m.Z.getEntitlement(T.FX)]),
        { analyticsLocations: V } = (0, d.ZP)([c.Z.HD_STREAMING_POTION_MODAL]),
        H = null != G && !G.consumed && G.type === N.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != G && !1 === G.consumed && G.type !== N.qc2.DEVELOPER_GIFT && (0, u.Zu)(t.id);
    }, [G, t]),
        r.useEffect(
            () => () => {
                (0, u.SN)(T.FX);
            },
            []
        ),
        r.useEffect(() => {
            !D && null == w && !F && (0, u.Gq)(T.FX);
        }, [D, w, F]),
        r.useEffect(() => {
            !B && !U && (0, u.gA)(T.FX);
        }, [B, U]);
    let z = () => (0, s.closeAllModals)();
    return F
        ? (0, i.jsx)('div', {
              className: A.anomaly,
              children: (0, i.jsxs)('div', {
                  className: A.error,
                  children: [
                      (0, i.jsx)(s.Image, {
                          src: b,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: S.intl.string(S.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == w
          ? (0, i.jsx)('div', {
                className: A.anomaly,
                children: (0, i.jsx)('div', {
                    className: A.spinner,
                    children: (0, i.jsx)(s.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: A.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: A.image,
                                src: 'https://cdn.discordapp.com/assets/content/f7cb08dc1c9ca86a0c705f26d6e9af2ba2cc1acd4fd51e039417b2936069bc5b.png',
                                alt: S.intl.string(S.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: A.heading,
                                        children: [
                                            (0, i.jsx)(s.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: S.intl.string(S.t.K04rOD)
                                            }),
                                            (0, i.jsx)(h.Z, {})
                                        ]
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        children: S.intl.string(S.t.lq40Pz)
                                    }),
                                    (0, i.jsx)(p.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(s.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: S.intl.string(S.t['1wV4qq'])
                                        })
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/medium',
                                        children: S.intl.string(S.t.qk07Mj)
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: A.divider }),
                            (0, i.jsxs)('div', {
                                className: A.applyingTo,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'eyebrow',
                                        children: S.intl.string(S.t.tZyXg4)
                                    }),
                                    (0, i.jsx)(v.Z, { channel: t })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.footer,
                        children: [
                            (0, i.jsx)(s.Button, {
                                onClick: () => {
                                    (0, s.closeModal)(R);
                                },
                                color: s.Button.Colors.PRIMARY,
                                children: S.intl.string(S.t.Avt5KS)
                            }),
                            k
                                ? (0, i.jsx)(s.Button, {
                                      onClick: () => {
                                          if (H) {
                                              (0, u.Zu)(t.id), (0, s.closeAllModals)();
                                              return;
                                          }
                                          (0, _.Z)({
                                              skuId: T.FX,
                                              analyticsLocations: V,
                                              onComplete: z
                                          });
                                      },
                                      disabled: !k,
                                      children: (0, i.jsxs)('div', {
                                          className: A.buttonCopy,
                                          children: [
                                              (0, i.jsx)(s.PotionIcon, {
                                                  color: o.Z.colors.INTERACTIVE_ACTIVE,
                                                  size: 'sm'
                                              }),
                                              H ? S.intl.string(S.t.sl6Tcn) : S.intl.formatToPlainString(S.t.S9LAdX, { price: (0, x.T4)(w.amount, w.currency) })
                                          ]
                                      })
                                  })
                                : (0, i.jsx)(s.Tooltip, {
                                      text: S.intl.string(S.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: t, onMouseEnter: n, onMouseLeave: r, ...l } = e;
                                          return (0, i.jsx)(s.Button, {
                                              ...l,
                                              disabled: !0,
                                              onClick: t,
                                              onMouseEnter: n,
                                              onMouseLeave: r,
                                              children: S.intl.formatToPlainString(S.t.S9LAdX, { price: (0, x.T4)(w.amount, w.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
