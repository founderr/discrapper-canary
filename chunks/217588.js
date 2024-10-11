n(724458), n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(367907),
    u = n(600164),
    _ = n(111028),
    E = n(231053),
    I = n(697568),
    m = n(183023),
    T = n(524444),
    N = n(98278),
    h = n(197115),
    C = n(430824),
    p = n(594174),
    f = n(626135),
    g = n(74538),
    A = n(453070),
    S = n(926491),
    M = n(378233),
    O = n(419922),
    x = n(688179),
    R = n(981631),
    v = n(474936),
    Z = n(689938),
    L = n(174461),
    P = n(507444);
let b = (e, t) => (t ? Z.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({ stickerPackName: e.name }) : Z.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({ stickerPackName: e.name })),
    D = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return a.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function j(e) {
    f.default.track(R.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
        location_section: R.jXE.STICKER_POPOUT
    }),
        (0, N.z)();
}
function U(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(u.Z, {
        children: [
            (0, i.jsx)(O.ZP, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, i.jsxs)(u.Z, {
                direction: u.Z.Direction.VERTICAL,
                justify: u.Z.Justify.CENTER,
                className: P.truncatingText,
                children: [
                    (0, i.jsx)(o.Text, {
                        className: P.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, i.jsx)(_.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let y = (e) => {
        let { closePopout: t, sticker: n, channel: s, refreshPositionKey: l } = e,
            [c, u, _] = (0, r.Wu)([S.Z], () => [S.Z.getStickerPack(n.pack_id), !S.Z.hasLoadedStickerPacks, S.Z.isPremiumPack(n.pack_id)], [n]),
            E = D({
                sticker: n,
                stickerPack: c
            });
        (0, A.Pq)(n.pack_id);
        let I = (0, A.Sd)(s);
        return (a.useEffect(() => {
            l();
        }, [u]),
        a.useEffect(() => {
            f.default.track(R.rMx.OPEN_POPOUT, {
                type: R.jXE.STICKER_POPOUT,
                guild_id: s.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, d.v_)(s)
            });
        }, [n.pack_id]),
        u || null == c)
            ? (0, i.jsx)(T.SE, { className: L.popoutLoader })
            : (0, i.jsxs)(T.W_, {
                  className: L.popoutContent,
                  children: [
                      (0, i.jsx)(o.Heading, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: b(c, _)
                      }),
                      (0, i.jsx)('ul', {
                          className: L.stickersList,
                          children: E.map((e) =>
                              (0, i.jsx)(
                                  O.ZP,
                                  {
                                      isInteracting: !0,
                                      size: 80,
                                      sticker: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      _ &&
                          (0, i.jsx)('div', {
                              className: L.packActions,
                              children: (0, i.jsx)(
                                  o.Button,
                                  {
                                      color: o.Button.Colors.PRIMARY,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          _ &&
                                              (0, x.m)({
                                                  stickerPack: c,
                                                  stickerPickerCategories: I
                                              }),
                                              t();
                                      },
                                      children: Z.Z.Messages.STICKER_VIEW_MORE_STICKERS
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    B = (e) => {
        let t,
            { sticker: n, channel: s, closePopout: _, refreshPositionKey: N } = e,
            [A, S] = a.useState(null),
            [M, x] = a.useState(!1),
            b = p.default.getCurrentUser(),
            D = g.ZP.canUseCustomStickersEverywhere(b),
            y = (0, r.e7)([C.Z], () => C.Z.getGuild(n.guild_id)),
            B = null != y,
            [k, G] = a.useState(!1),
            [F, w] = a.useState(null),
            V = a.useMemo(
                () => ({
                    page: null != s.guild_id ? R.ZY5.GUILD_CHANNEL : R.ZY5.DM_CHANNEL,
                    section: R.jXE.STICKER_POPOUT
                }),
                [s.guild_id]
            ),
            { current: H } = a.useRef({
                guild_id: s.getGuildId(),
                ...(0, d.v_)(s)
            });
        a.useEffect(() => {
            (async () => {
                (null == y || y.hasFeature(R.oNc.DISCOVERABLE)) && S(await (0, I.Z)(n.id)), x(!0);
            })();
        }, [n.id, B]);
        let Y = n.guild_id === s.getGuildId(),
            W = null != A,
            K = !1,
            z = 'Custom Sticker Popout';
        D
            ? (t = B ? (Y ? Z.Z.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : Z.Z.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION) : W ? Z.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : Z.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION)
            : B
              ? (Y ? (t = Z.Z.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION) : (t = Z.Z.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION), (K = !0), (z = 'Custom Sticker Popout (Upsell)'))
              : W
                ? ((t = Z.Z.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION), (K = !0), (z = 'Custom Sticker Popout (Upsell)'))
                : ((t = Z.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                      openPremiumSettings: () => {
                          j(s), _();
                      }
                  })),
                  (z = 'Custom Sticker Popout (Soft Upsell)'));
        let X = !K && !B && W && D;
        return (a.useEffect(() => {
            N();
        }, [M, A]),
        a.useEffect(() => {
            f.default.track(R.rMx.OPEN_POPOUT, {
                type: z,
                ...H
            });
        }, []),
        M)
            ? (0, i.jsxs)(T.W_, {
                  className: P.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == A || B) return;
                              _();
                              let e = A.id;
                              try {
                                  await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
                              } catch {}
                          };
                          return (0, i.jsxs)('div', {
                              className: P.emojiSection,
                              children: [
                                  (0, i.jsx)(U, {
                                      description: t,
                                      sticker: n
                                  }),
                                  K &&
                                      (0, i.jsx)(h.Z, {
                                          className: P.ctaButton,
                                          subscriptionTier: v.Si.TIER_2,
                                          size: o.Button.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: Z.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                                          onSubscribeModalClose: (t) => (t ? e() : _()),
                                          postSuccessGuild: B || null == A ? void 0 : A,
                                          premiumModalAnalyticsLocation: V
                                      }),
                                  X &&
                                      (0, i.jsx)(o.Button, {
                                          size: o.Button.Sizes.SMALL,
                                          className: P.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: Z.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                      })
                              ]
                          });
                      })(),
                      (null != y || null != A) &&
                          (() => {
                              var e;
                              if (!W && !B) return;
                              let t = (null !== (e = null == A ? void 0 : A.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  a = null != A ? E.JO.createFromDiscoverableGuild(A) : E.JO.createFromGuildRecord(y);
                              return (0, i.jsxs)('div', {
                                  className: P.guildSection,
                                  children: [
                                      (0, i.jsx)(o.FormTitle, {
                                          className: P.guildTitle,
                                          children: B ? Z.Z.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Z.Z.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                                      }),
                                      (0, i.jsx)(m.Oe, {
                                          expressionSourceGuild: a,
                                          hasJoinedExpressionSourceGuild: B,
                                          isDisplayingJoinGuildButtonInPopout: X
                                      }),
                                      !B &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(o.Clickable, {
                                                      onClick: () => {
                                                          N(), G(!k);
                                                      },
                                                      className: P.showMoreEmojis,
                                                      children: (0, i.jsxs)(u.Z, {
                                                          children: [
                                                              (0, i.jsx)(o.Text, {
                                                                  className: P.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: Z.Z.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                                                              }),
                                                              (0, i.jsx)(o.ChevronSmallDownIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: l()(P.showMoreEmojisArrow, { [P.showMoreEmojisArrowCollapsed]: !k })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  k &&
                                                      (0, i.jsx)(u.Z, {
                                                          wrap: u.Z.Wrap.WRAP,
                                                          align: u.Z.Align.START,
                                                          justify: u.Z.Justify.START,
                                                          className: P.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, i.jsx)(
                                                                  o.Tooltip,
                                                                  {
                                                                      text: e.name,
                                                                      ...T.b_,
                                                                      children: (t) => {
                                                                          let { onMouseEnter: n, onMouseLeave: a, ...s } = t;
                                                                          return (0, i.jsx)(
                                                                              'div',
                                                                              {
                                                                                  className: l()(P.otherEmoji, { [L.nonInteractingSticker]: null != F && F !== e.id }),
                                                                                  onMouseEnter: () => {
                                                                                      null == n || n(), w(e.id);
                                                                                  },
                                                                                  onMouseLeave: () => {
                                                                                      null == a || a(), w(null);
                                                                                  },
                                                                                  ...s,
                                                                                  children: (0, i.jsx)(O.ZP, {
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
            : (0, i.jsx)(T.SE, { className: L.popoutLoader });
    };
function k(e) {
    let { channel: t, closePopout: n, sticker: a } = e;
    return (0, i.jsx)(T.W_, {
        className: L.popoutContent,
        children: (0, i.jsx)(U, {
            sticker: a,
            description: Z.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                openPremiumSettings: () => {
                    n(), j(t);
                }
            })
        })
    });
}
t.Z = (e) => {
    let { renderableSticker: t, channel: n, closePopout: a, refreshPositionKey: s } = e,
        [l, r] = (0, A.XW)(t, !0);
    if (null != l && (0, M.jl)(l))
        return (0, i.jsx)(y, {
            sticker: l,
            closePopout: a,
            channel: n,
            refreshPositionKey: s
        });
    if (null != l && (0, M.J8)(l))
        return (0, i.jsx)(B, {
            sticker: l,
            channel: n,
            closePopout: a,
            refreshPositionKey: s
        });
    if (!r) return (0, i.jsx)(T.SE, {});
    else if (r && null == l)
        return (0, i.jsx)(k, {
            channel: n,
            closePopout: a,
            sticker: t
        });
    return a(), null;
};
