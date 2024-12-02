n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(367907),
    u = n(600164),
    m = n(111028),
    h = n(231053),
    f = n(697568),
    p = n(183023),
    _ = n(524444),
    g = n(98278),
    E = n(197115),
    C = n(430824),
    I = n(594174),
    x = n(626135),
    N = n(74538),
    v = n(453070),
    T = n(926491),
    S = n(378233),
    A = n(419922),
    b = n(688179),
    j = n(981631),
    Z = n(474936),
    R = n(388032),
    P = n(751296),
    L = n(124396);
let y = (e, t) => (t ? R.intl.format(R.t.auckX1, { stickerPackName: e.name }) : R.intl.format(R.t.OzB6e3, { stickerPackName: e.name })),
    O = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return r.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function M(e) {
    x.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? j.ZY5.GUILD_CHANNEL : j.ZY5.DM_CHANNEL,
        location_section: j.jXE.STICKER_POPOUT
    }),
        (0, g.z)();
}
function k(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(u.Z, {
        children: [
            (0, i.jsx)(A.ZP, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, i.jsxs)(u.Z, {
                direction: u.Z.Direction.VERTICAL,
                justify: u.Z.Justify.CENTER,
                className: L.truncatingText,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: L.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, i.jsx)(m.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let D = (e) => {
        let { closePopout: t, sticker: n, channel: l, refreshPositionKey: a } = e,
            [c, u, m] = (0, o.Wu)([T.Z], () => [T.Z.getStickerPack(n.pack_id), !T.Z.hasLoadedStickerPacks, T.Z.isPremiumPack(n.pack_id)], [n]),
            h = O({
                sticker: n,
                stickerPack: c
            });
        (0, v.Pq)(n.pack_id);
        let f = (0, v.Sd)(l);
        return (r.useEffect(() => {
            a();
        }, [u]),
        r.useEffect(() => {
            x.default.track(j.rMx.OPEN_POPOUT, {
                type: j.jXE.STICKER_POPOUT,
                guild_id: l.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, d.v_)(l)
            });
        }, [n.pack_id]),
        u || null == c)
            ? (0, i.jsx)(_.SE, { className: P.popoutLoader })
            : (0, i.jsxs)(_.W_, {
                  className: P.popoutContent,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          children: y(c, m)
                      }),
                      (0, i.jsx)('ul', {
                          className: P.stickersList,
                          children: h.map((e) =>
                              (0, i.jsx)(
                                  A.ZP,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      m &&
                          (0, i.jsx)('div', {
                              className: P.packActions,
                              children: (0, i.jsx)(
                                  s.Button,
                                  {
                                      color: s.Button.Colors.PRIMARY,
                                      size: s.Button.Sizes.SMALL,
                                      onClick: () => {
                                          m &&
                                              (0, b.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: f
                                              }),
                                              t();
                                      },
                                      children: R.intl.string(R.t.GPy3Ag)
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    B = (e) => {
        let t,
            { sticker: n, channel: l, closePopout: m, refreshPositionKey: g } = e,
            [v, T] = r.useState(null),
            [S, b] = r.useState(!1),
            y = I.default.getCurrentUser(),
            O = N.ZP.canUseCustomStickersEverywhere(y),
            D = (0, o.e7)([C.Z], () => C.Z.getGuild(n.guild_id)),
            B = null != D,
            [U, w] = r.useState(!1),
            [F, G] = r.useState(null),
            V = r.useMemo(
                () => ({
                    page: null != l.guild_id ? j.ZY5.GUILD_CHANNEL : j.ZY5.DM_CHANNEL,
                    section: j.jXE.STICKER_POPOUT
                }),
                [l.guild_id]
            ),
            { current: H } = r.useRef({
                guild_id: l.getGuildId(),
                ...(0, d.v_)(l)
            });
        r.useEffect(() => {
            (async () => {
                (null == D || D.hasFeature(j.oNc.DISCOVERABLE)) && T(await (0, f.Z)(n.id)), b(!0);
            })();
        }, [n.id, B]);
        let z = n.guild_id === l.getGuildId(),
            W = null != v,
            K = !1,
            Y = 'Custom Sticker Popout';
        O
            ? (t = B ? (z ? R.intl.string(R.t.fZ0DiI) : R.intl.string(R.t['1f6D9v'])) : W ? R.intl.string(R.t.yHmoR0) : R.intl.string(R.t.vZaScH))
            : B
              ? (z ? (t = R.intl.string(R.t.jNphpq)) : (t = R.intl.string(R.t.lyD5ZW)), (K = !0), (Y = 'Custom Sticker Popout (Upsell)'))
              : W
                ? ((t = R.intl.string(R.t.IuXYcn)), (K = !0), (Y = 'Custom Sticker Popout (Upsell)'))
                : ((t = R.intl.format(R.t.hGWuxc, {
                      openPremiumSettings: () => {
                          M(l), m();
                      }
                  })),
                  (Y = 'Custom Sticker Popout (Soft Upsell)'));
        let X = !K && !B && W && O;
        return (r.useEffect(() => {
            g();
        }, [S, v]),
        r.useEffect(() => {
            x.default.track(j.rMx.OPEN_POPOUT, {
                type: Y,
                ...H
            });
        }, []),
        S)
            ? (0, i.jsxs)(_.W_, {
                  className: L.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == v || B) return;
                              m();
                              let e = v.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch {}
                          };
                          return (0, i.jsxs)('div', {
                              className: L.emojiSection,
                              children: [
                                  (0, i.jsx)(k, {
                                      description: t,
                                      sticker: n
                                  }),
                                  K &&
                                      (0, i.jsx)(E.Z, {
                                          className: L.ctaButton,
                                          subscriptionTier: Z.Si.TIER_2,
                                          size: s.Button.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: R.intl.string(R.t['gl/XHB']),
                                          onSubscribeModalClose: (t) => (t ? e() : m()),
                                          postSuccessGuild: B || null == v ? void 0 : v,
                                          premiumModalAnalyticsLocation: V
                                      }),
                                  X &&
                                      (0, i.jsx)(s.Button, {
                                          size: s.Button.Sizes.SMALL,
                                          className: L.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: R.intl.string(R.t.riu2R0)
                                      })
                              ]
                          });
                      })(),
                      (null != D || null != v) &&
                          (() => {
                              var e;
                              if (!W && !B) return;
                              let t = (null !== (e = null == v ? void 0 : v.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  r = null != v ? h.JO.createFromDiscoverableGuild(v) : h.JO.createFromGuildRecord(D);
                              return (0, i.jsxs)('div', {
                                  className: L.guildSection,
                                  children: [
                                      (0, i.jsx)(s.FormTitle, {
                                          className: L.guildTitle,
                                          children: B ? R.intl.string(R.t.kx6pEB) : R.intl.string(R.t.pDE7GR)
                                      }),
                                      (0, i.jsx)(p.Oe, {
                                          expressionSourceGuild: r,
                                          hasJoinedExpressionSourceGuild: B,
                                          isDisplayingJoinGuildButtonInPopout: X
                                      }),
                                      !B &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Clickable, {
                                                      onClick: () => {
                                                          g(), w(!U);
                                                      },
                                                      className: L.showMoreEmojis,
                                                      children: (0, i.jsxs)(u.Z, {
                                                          children: [
                                                              (0, i.jsx)(s.Text, {
                                                                  className: L.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: R.intl.string(R.t.vtH5ho)
                                                              }),
                                                              (0, i.jsx)(s.ChevronSmallDownIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: a()(L.showMoreEmojisArrow, { [L.showMoreEmojisArrowCollapsed]: !U })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  U &&
                                                      (0, i.jsx)(u.Z, {
                                                          wrap: u.Z.Wrap.WRAP,
                                                          align: u.Z.Align.START,
                                                          justify: u.Z.Justify.START,
                                                          className: L.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, i.jsx)(
                                                                  s.Tooltip,
                                                                  {
                                                                      text: e.name,
                                                                      ..._.b_,
                                                                      children: (t) => {
                                                                          let { onMouseEnter: n, onMouseLeave: r, ...l } = t;
                                                                          return (0, i.jsx)(
                                                                              'div',
                                                                              {
                                                                                  className: a()(L.otherEmoji, { [P.nonInteractingSticker]: null != F && F !== e.id }),
                                                                                  onMouseEnter: () => {
                                                                                      null == n || n(), G(e.id);
                                                                                  },
                                                                                  onMouseLeave: () => {
                                                                                      null == r || r(), G(null);
                                                                                  },
                                                                                  ...l,
                                                                                  children: (0, i.jsx)(A.ZP, {
                                                                                      size: 32,
                                                                                      enlargeOnInteraction: !0,
                                                                                      enlargeWithName: !1,
                                                                                      enlargeScaleFactor: 2,
                                                                                      isInteracting: F === e.id,
                                                                                      sticker: e
                                                                                  })
                                                                              },
                                                                              e.id
                                                                          );
                                                                      }
                                                                  },
                                                                  e.id
                                                              )
                                                          )
                                                      })
                                              ]
                                          })
                                  ]
                              });
                          })()
                  ]
              })
            : (0, i.jsx)(_.SE, { className: P.popoutLoader });
    };
function U(e) {
    let { channel: t, closePopout: n, sticker: r } = e;
    return (0, i.jsx)(_.W_, {
        className: P.popoutContent,
        children: (0, i.jsx)(k, {
            sticker: r,
            description: R.intl.format(R.t.hGWuxc, {
                openPremiumSettings: () => {
                    n(), M(t);
                }
            })
        })
    });
}
t.Z = (e) => {
    let { renderableSticker: t, channel: n, closePopout: r, refreshPositionKey: l } = e,
        [a, o] = (0, v.XW)(t, !0);
    if (null != a && (0, S.jl)(a))
        return (0, i.jsx)(D, {
            sticker: a,
            closePopout: r,
            channel: n,
            refreshPositionKey: l
        });
    if (null != a && (0, S.J8)(a))
        return (0, i.jsx)(B, {
            sticker: a,
            channel: n,
            closePopout: r,
            refreshPositionKey: l
        });
    if (!o) return (0, i.jsx)(_.SE, {});
    else if (o && null == a)
        return (0, i.jsx)(U, {
            channel: n,
            closePopout: r,
            sticker: t
        });
    return r(), null;
};
