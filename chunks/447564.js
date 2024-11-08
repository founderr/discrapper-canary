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
    u = n(335131),
    d = n(120619),
    m = n(569545),
    h = n(690221),
    f = n(333867),
    p = n(422034),
    _ = n(199902),
    g = n(430824),
    E = n(959457),
    C = n(594174),
    I = n(938475),
    x = n(937615),
    N = n(981631),
    v = n(215023),
    T = n(388032),
    S = n(1114),
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
                    let n = (0, m.V9)(e),
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
        k = I.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [D, B, U, w, F, G] = (0, a.Wu)([d.Z], () => [d.Z.isFetchingPrice(v.FX), d.Z.isEntitlementFetched(v.FX), d.Z.isEntitlementFetching(v.FX), d.Z.getPrice(v.FX), d.Z.getErrored(v.FX), d.Z.getEntitlement(v.FX)]),
        { analyticsLocations: V } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        H = null != G && !G.consumed && G.type === N.qc2.DEVELOPER_GIFT;
    r.useEffect(() => {
        null != G && !1 === G.consumed && G.type !== N.qc2.DEVELOPER_GIFT && (0, u.Zu)(t.id);
    }, [G, t]),
        r.useEffect(
            () => () => {
                (0, u.SN)(v.FX);
            },
            []
        ),
        r.useEffect(() => {
            !D && null == w && !F && (0, u.Gq)(v.FX);
        }, [D, w, F]),
        r.useEffect(() => {
            !B && !U && (0, u.gA)(v.FX);
        }, [B, U]);
    let z = () => {
            (0, o.closeModal)(Z);
        },
        W = k.map((e, t) => {
            let { user: n } = e;
            return (0, i.jsx)(
                p.O,
                {
                    affinity: n,
                    applyMask: t !== k.length - 1,
                    size: o.AvatarSizes.SIZE_20
                },
                n.id
            );
        });
    return F
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
        : null == w
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
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: T.intl.string(T.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: S.body,
                                children: [
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: T.intl.string(T.t.K04rOD)
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: T.intl.string(T.t.xwRQWl)
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: T.intl.string(T.t.sxVfiY)
                                        })
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
                                    (0, i.jsxs)('div', {
                                        className: S.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: S.channelLeft,
                                                children: [
                                                    (0, i.jsx)(o.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: S.avatars,
                                                children: W
                                            })
                                        ]
                                    })
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
                                          if (H) {
                                              (0, u.Zu)(t.id), (0, o.closeModal)(Z);
                                              return;
                                          }
                                          (0, f.Z)({
                                              skuId: v.FX,
                                              analyticsLocations: V,
                                              onComplete: z
                                          });
                                      },
                                      disabled: !M,
                                      children: H ? T.intl.string(T.t.sl6Tcn) : T.intl.formatToPlainString(T.t.S9LAdX, { price: (0, x.T4)(w.amount, w.currency) })
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
                                              children: T.intl.formatToPlainString(T.t.S9LAdX, { price: (0, x.T4)(w.amount, w.currency) })
                                          });
                                      }
                                  })
                        ]
                    })
                ]
            });
}
