n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return Z;
        },
        default: function () {
            return j;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(259443),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(120619),
    m = n(688465),
    h = n(569545),
    f = n(690221),
    p = n(333867),
    _ = n(199902),
    g = n(430824),
    E = n(959457),
    C = n(594174),
    I = n(937615),
    x = n(82950),
    v = n(981631),
    N = n(215023),
    T = n(388032),
    S = n(912568),
    A = n(99713);
let b = new l.Yd('HDStreamingConsumableModal');
function j(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(o.ModalRoot, {
        size: o.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(R, { channel: n })
    });
}
let Z = 'HD_STREAMING_POTION_MODAL_KEY';
function R(e) {
    let { channel: t } = e,
        n = (0, a.e7)([g.Z], () => g.Z.getGuild(t.guild_id)),
        l = (0, a.e7)([C.default], () => {
            var e;
            return null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
        }),
        j = (0, a.e7)([_.Z], () => _.Z.getAllActiveStreamsForChannel(t.id).filter((e) => e.ownerId !== l)),
        [R, L] = r.useState(null),
        [P, y] = r.useState([]);
    (0, a.e7)(
        [E.Z],
        () => {
            if (null == R || Date.now() - R > 10000) {
                let e = j.map((e) => {
                    var t;
                    let n = (0, h.V9)(e),
                        i = E.Z.getRTCConnection(n);
                    return null == i ? void 0 : null === (t = i.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                });
                b.info('Setting bitrates', e), y(e), L(Date.now());
            }
        },
        [R, j]
    );
    let O = r.useMemo(() => {
            if (0 === P.length) return !0;
            if (P.some((e) => null == e)) return !1;
            for (let e of P) if (null == e || e < 3500000) return !1;
            return !0;
        }, [P]),
        M = null != n && 0 === n.premiumTier && O,
        [k, D, B, U, w, F] = (0, a.Wu)([u.Z], () => [u.Z.isFetchingPrice(N.FX), u.Z.isEntitlementFetched(N.FX), u.Z.isEntitlementFetching(N.FX), u.Z.getPrice(N.FX), u.Z.getErrored(N.FX), u.Z.getEntitlement(N.FX)]),
        { analyticsLocations: G } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        V = null != F && !F.consumed && F.type === v.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != F && !1 === F.consumed && F.type !== v.qc2.DEVELOPER_GIFT && (0, d.Zu)(t.id);
    }, [F, t]),
        r.useEffect(
            () => () => {
                (0, d.SN)(N.FX);
            },
            []
        ),
        r.useEffect(() => {
            !k && null == U && !w && (0, d.Gq)(N.FX);
        }, [k, U, w]),
        r.useEffect(() => {
            !D && !B && (0, d.gA)(N.FX);
        }, [D, B]);
    let H = () => (0, o.closeAllModals)();
    return w
        ? (0, i.jsx)('div', {
              className: S.anomaly,
              children: (0, i.jsxs)('div', {
                  className: S.error,
                  children: [
                      (0, i.jsx)(o.Image, {
                          src: A,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: T.intl.string(T.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == U
          ? (0, i.jsx)('div', {
                className: S.anomaly,
                children: (0, i.jsx)('div', {
                    className: S.spinner,
                    children: (0, i.jsx)(o.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: S.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: S.image,
                                src: 'https://cdn.discordapp.com/assets/content/f7cb08dc1c9ca86a0c705f26d6e9af2ba2cc1acd4fd51e039417b2936069bc5b.png',
                                alt: T.intl.string(T.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: S.body,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: S.heading,
                                        children: [
                                            (0, i.jsx)(o.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: T.intl.string(T.t.K04rOD)
                                            }),
                                            (0, i.jsx)(m.Z, {})
                                        ]
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: T.intl.string(T.t.lq40Pz)
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: T.intl.string(T.t['1wV4qq'])
                                        })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/medium',
                                        children: T.intl.string(T.t.qk07Mj)
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: S.divider }),
                            (0, i.jsxs)('div', {
                                className: S.applyingTo,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'eyebrow',
                                        children: T.intl.string(T.t.tZyXg4)
                                    }),
                                    (0, i.jsx)(x.Z, { channel: t })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.footer,
                        children: [
                            (0, i.jsx)(o.Button, {
                                onClick: () => {
                                    (0, o.closeModal)(Z);
                                },
                                color: o.Button.Colors.PRIMARY,
                                children: T.intl.string(T.t.Avt5KS)
                            }),
                            M
                                ? (0, i.jsx)(o.Button, {
                                      onClick: () => {
                                          if (V) {
                                              (0, d.Zu)(t.id), (0, o.closeAllModals)();
                                              return;
                                          }
                                          (0, p.Z)({
                                              skuId: N.FX,
                                              analyticsLocations: G,
                                              onComplete: H
                                          });
                                      },
                                      disabled: !M,
                                      children: V ? T.intl.string(T.t.sl6Tcn) : T.intl.formatToPlainString(T.t.S9LAdX, { price: (0, I.T4)(U.amount, U.currency) })
                                  })
                                : (0, i.jsx)(o.Tooltip, {
                                      text: T.intl.string(T.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: t, onMouseEnter: n, onMouseLeave: r, ...l } = e;
                                          return (0, i.jsx)(o.Button, {
                                              ...l,
                                              disabled: !0,
                                              onClick: t,
                                              onMouseEnter: n,
                                              onMouseLeave: r,
                                              children: T.intl.formatToPlainString(T.t.S9LAdX, { price: (0, I.T4)(U.amount, U.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
