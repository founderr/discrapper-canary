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
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(120619),
    m = n(688465),
    h = n(569545),
    f = n(690221),
    p = n(333867),
    _ = n(422034),
    g = n(199902),
    E = n(430824),
    C = n(959457),
    I = n(594174),
    x = n(938475),
    N = n(937615),
    v = n(981631),
    T = n(215023),
    S = n(388032),
    A = n(912568),
    b = n(99713);
let j = new l.Yd('HDStreamingConsumableModal');
function Z(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(o.ModalRoot, {
        size: o.ModalSize.DYNAMIC,
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
                    let n = (0, h.V9)(e),
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
        D = x.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [B, U, w, F, G, V] = (0, a.Wu)([d.Z], () => [d.Z.isFetchingPrice(T.FX), d.Z.isEntitlementFetched(T.FX), d.Z.isEntitlementFetching(T.FX), d.Z.getPrice(T.FX), d.Z.getErrored(T.FX), d.Z.getEntitlement(T.FX)]),
        { analyticsLocations: H } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        z = null != V && !V.consumed && V.type === v.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != V && !1 === V.consumed && V.type !== v.qc2.DEVELOPER_GIFT && (0, u.Zu)(t.id);
    }, [V, t]),
        r.useEffect(
            () => () => {
                (0, u.SN)(T.FX);
            },
            []
        ),
        r.useEffect(() => {
            !B && null == F && !G && (0, u.Gq)(T.FX);
        }, [B, F, G]),
        r.useEffect(() => {
            !U && !w && (0, u.gA)(T.FX);
        }, [U, w]);
    let W = () => {
            (0, o.closeModal)(R);
        },
        K = D.map((e, t) => {
            let { user: n } = e;
            return (0, i.jsx)(
                _.O,
                {
                    affinity: n,
                    applyMask: t !== D.length - 1,
                    size: o.AvatarSizes.SIZE_20
                },
                n.id
            );
        });
    return G
        ? (0, i.jsx)('div', {
              className: A.anomaly,
              children: (0, i.jsxs)('div', {
                  className: A.error,
                  children: [
                      (0, i.jsx)(o.Image, {
                          src: b,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: S.intl.string(S.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == F
          ? (0, i.jsx)('div', {
                className: A.anomaly,
                children: (0, i.jsx)('div', {
                    className: A.spinner,
                    children: (0, i.jsx)(o.Spinner, {})
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
                                            (0, i.jsx)(o.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: S.intl.string(S.t.K04rOD)
                                            }),
                                            (0, i.jsx)(m.Z, {})
                                        ]
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: S.intl.string(S.t.lq40Pz)
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-link',
                                            variant: 'text-sm/normal',
                                            children: S.intl.string(S.t['1wV4qq'])
                                        })
                                    }),
                                    (0, i.jsx)(o.Text, {
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
                                    (0, i.jsx)(o.Text, {
                                        variant: 'eyebrow',
                                        children: S.intl.string(S.t.tZyXg4)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: A.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: A.channelLeft,
                                                children: [
                                                    (0, i.jsx)(o.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: A.avatars,
                                                children: K
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.footer,
                        children: [
                            (0, i.jsx)(o.Button, {
                                onClick: () => {
                                    (0, o.closeModal)(R);
                                },
                                color: o.Button.Colors.PRIMARY,
                                children: S.intl.string(S.t.Avt5KS)
                            }),
                            k
                                ? (0, i.jsx)(o.Button, {
                                      onClick: () => {
                                          if (z) {
                                              (0, u.Zu)(t.id), (0, o.closeModal)(R);
                                              return;
                                          }
                                          (0, p.Z)({
                                              skuId: T.FX,
                                              analyticsLocations: H,
                                              onComplete: W
                                          });
                                      },
                                      disabled: !k,
                                      children: z ? S.intl.string(S.t.sl6Tcn) : S.intl.formatToPlainString(S.t.S9LAdX, { price: (0, N.T4)(F.amount, F.currency) })
                                  })
                                : (0, i.jsx)(o.Tooltip, {
                                      text: S.intl.string(S.t.Qrh2BQ),
                                      children: (e) => {
                                          let { onClick: t, onMouseEnter: n, onMouseLeave: r, ...l } = e;
                                          return (0, i.jsx)(o.Button, {
                                              ...l,
                                              disabled: !0,
                                              onClick: t,
                                              onMouseEnter: n,
                                              onMouseLeave: r,
                                              children: S.intl.formatToPlainString(S.t.S9LAdX, { price: (0, N.T4)(F.amount, F.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
