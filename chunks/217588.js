n(724458), n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(367907),
    d = n(600164),
    _ = n(111028),
    E = n(231053),
    I = n(697568),
    m = n(183023),
    T = n(524444),
    h = n(98278),
    N = n(197115),
    C = n(430824),
    f = n(594174),
    p = n(626135),
    g = n(74538),
    S = n(453070),
    A = n(926491),
    R = n(378233),
    O = n(419922),
    x = n(688179),
    M = n(981631),
    v = n(474936),
    L = n(689938),
    Z = n(450304),
    P = n(78731);
let D = (e, t) => (t ? L.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({ stickerPackName: e.name }) : L.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({ stickerPackName: e.name })),
    b = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return s.useMemo(() => (null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function j(e) {
    p.default.track(M.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? M.ZY5.GUILD_CHANNEL : M.ZY5.DM_CHANNEL,
        location_section: M.jXE.STICKER_POPOUT
    }),
        (0, h.z)();
}
function U(e) {
    let { sticker: t, description: n } = e;
    return (0, i.jsxs)(d.Z, {
        children: [
            (0, i.jsx)(O.ZP, {
                sticker: t,
                size: 48,
                isInteracting: !0
            }),
            (0, i.jsxs)(d.Z, {
                direction: d.Z.Direction.VERTICAL,
                justify: d.Z.Justify.CENTER,
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
        let { closePopout: t, sticker: n, channel: a, refreshPositionKey: r } = e,
            [c, d, _] = (0, l.Wu)([A.Z], () => [A.Z.getStickerPack(n.pack_id), !A.Z.hasLoadedStickerPacks, A.Z.isPremiumPack(n.pack_id)], [n]),
            E = b({
                sticker: n,
                stickerPack: c
            });
        (0, S.Pq)(n.pack_id);
        let I = (0, S.Sd)(a);
        return (s.useEffect(() => {
            r();
        }, [d]),
        s.useEffect(() => {
            p.default.track(M.rMx.OPEN_POPOUT, {
                type: M.jXE.STICKER_POPOUT,
                guild_id: a.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, u.v_)(a)
            });
        }, [n.pack_id]),
        d || null == c)
            ? (0, i.jsx)(T.SE, { className: Z.popoutLoader })
            : (0, i.jsxs)(T.W_, {
                  className: Z.popoutContent,
                  children: [
                      (0, i.jsx)(o.Heading, {
                          variant: 'heading-md/semibold',
                          children: n.name
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          children: D(c, _)
                      }),
                      (0, i.jsx)('ul', {
                          className: Z.stickersList,
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
                              className: Z.packActions,
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
                                      children: L.Z.Messages.STICKER_VIEW_MORE_STICKERS
                                  },
                                  'view-sticker-pack'
                              )
                          })
                  ]
              });
    },
    B = (e) => {
        let t,
            { sticker: n, channel: a, closePopout: _, refreshPositionKey: h } = e,
            [S, A] = s.useState(null),
            [R, x] = s.useState(!1),
            D = f.default.getCurrentUser(),
            b = g.ZP.canUseCustomStickersEverywhere(D),
            y = (0, l.e7)([C.Z], () => C.Z.getGuild(n.guild_id)),
            B = null != y,
            [k, F] = s.useState(!1),
            [G, w] = s.useState(null),
            V = s.useMemo(
                () => ({
                    page: null != a.guild_id ? M.ZY5.GUILD_CHANNEL : M.ZY5.DM_CHANNEL,
                    section: M.jXE.STICKER_POPOUT
                }),
                [a.guild_id]
            ),
            { current: H } = s.useRef({
                guild_id: a.getGuildId(),
                ...(0, u.v_)(a)
            });
        s.useEffect(() => {
            (async () => {
                (null == y || y.hasFeature(M.oNc.DISCOVERABLE)) && A(await (0, I.Z)(n.id)), x(!0);
            })();
        }, [n.id, B]);
        let Y = n.guild_id === a.getGuildId(),
            W = null != S,
            K = !1,
            z = 'Custom Sticker Popout';
        b
            ? (t = B ? (Y ? L.Z.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION) : W ? L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION)
            : B
              ? (Y ? (t = L.Z.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION) : (t = L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION), (K = !0), (z = 'Custom Sticker Popout (Upsell)'))
              : W
                ? ((t = L.Z.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION), (K = !0), (z = 'Custom Sticker Popout (Upsell)'))
                : ((t = L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                      openPremiumSettings: () => {
                          j(a), _();
                      }
                  })),
                  (z = 'Custom Sticker Popout (Soft Upsell)'));
        let Q = !K && !B && W && b;
        return (s.useEffect(() => {
            h();
        }, [R, S]),
        s.useEffect(() => {
            p.default.track(M.rMx.OPEN_POPOUT, {
                type: z,
                ...H
            });
        }, []),
        R)
            ? (0, i.jsxs)(T.W_, {
                  className: P.popoutContent,
                  children: [
                      (() => {
                          let e = async () => {
                              if (null == S || B) return;
                              _();
                              let e = S.id;
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
                                      (0, i.jsx)(N.Z, {
                                          className: P.ctaButton,
                                          subscriptionTier: v.Si.TIER_2,
                                          size: o.Button.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: L.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                                          onSubscribeModalClose: (t) => (t ? e() : _()),
                                          postSuccessGuild: B || null == S ? void 0 : S,
                                          premiumModalAnalyticsLocation: V
                                      }),
                                  Q &&
                                      (0, i.jsx)(o.Button, {
                                          size: o.Button.Sizes.SMALL,
                                          className: P.ctaButton,
                                          fullWidth: !0,
                                          onClick: e,
                                          children: L.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                      })
                              ]
                          });
                      })(),
                      (null != y || null != S) &&
                          (() => {
                              var e;
                              if (!W && !B) return;
                              let t = (null !== (e = null == S ? void 0 : S.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  s = null != S ? E.JO.createFromDiscoverableGuild(S) : E.JO.createFromGuildRecord(y);
                              return (0, i.jsxs)('div', {
                                  className: P.guildSection,
                                  children: [
                                      (0, i.jsx)(o.FormTitle, {
                                          className: P.guildTitle,
                                          children: B ? L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                                      }),
                                      (0, i.jsx)(m.Oe, {
                                          expressionSourceGuild: s,
                                          hasJoinedExpressionSourceGuild: B,
                                          isDisplayingJoinGuildButtonInPopout: Q
                                      }),
                                      !B &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(o.Clickable, {
                                                      onClick: () => {
                                                          h(), F(!k);
                                                      },
                                                      className: P.showMoreEmojis,
                                                      children: (0, i.jsxs)(d.Z, {
                                                          children: [
                                                              (0, i.jsx)(o.Text, {
                                                                  className: P.__invalid_showMoreEmojisLabel,
                                                                  variant: 'text-xs/normal',
                                                                  color: 'none',
                                                                  children: L.Z.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                                                              }),
                                                              (0, i.jsx)(o.ChevronSmallDownIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: r()(P.showMoreEmojisArrow, { [P.showMoreEmojisArrowCollapsed]: !k })
                                                              })
                                                          ]
                                                      })
                                                  }),
                                                  k &&
                                                      (0, i.jsx)(d.Z, {
                                                          wrap: d.Z.Wrap.WRAP,
                                                          align: d.Z.Align.START,
                                                          justify: d.Z.Justify.START,
                                                          className: P.otherEmojisContainer,
                                                          children: t.map((e) =>
                                                              (0, i.jsx)(
                                                                  o.Tooltip,
                                                                  {
                                                                      text: e.name,
                                                                      ...T.b_,
                                                                      children: (t) => {
                                                                          let { onMouseEnter: n, onMouseLeave: s, ...a } = t;
                                                                          return (0, i.jsx)(
                                                                              'div',
                                                                              {
                                                                                  className: r()(P.otherEmoji, { [Z.nonInteractingSticker]: null != G && G !== e.id }),
                                                                                  onMouseEnter: () => {
                                                                                      null == n || n(), w(e.id);
                                                                                  },
                                                                                  onMouseLeave: () => {
                                                                                      null == s || s(), w(null);
                                                                                  },
                                                                                  ...a,
                                                                                  children: (0, i.jsx)(O.ZP, {
                                                                                      size: 32,
                                                                                      enlargeOnInteraction: !0,
                                                                                      enlargeWithName: !1,
                                                                                      enlargeScaleFactor: 2,
                                                                                      isInteracting: G === e.id,
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
            : (0, i.jsx)(T.SE, { className: Z.popoutLoader });
    };
function k(e) {
    let { channel: t, closePopout: n, sticker: s } = e;
    return (0, i.jsx)(T.W_, {
        className: Z.popoutContent,
        children: (0, i.jsx)(U, {
            sticker: s,
            description: L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                openPremiumSettings: () => {
                    n(), j(t);
                }
            })
        })
    });
}
t.Z = (e) => {
    let { renderableSticker: t, channel: n, closePopout: s, refreshPositionKey: a } = e,
        [r, l] = (0, S.XW)(t, !0);
    if (null != r && (0, R.jl)(r))
        return (0, i.jsx)(y, {
            sticker: r,
            closePopout: s,
            channel: n,
            refreshPositionKey: a
        });
    if (null != r && (0, R.J8)(r))
        return (0, i.jsx)(B, {
            sticker: r,
            channel: n,
            closePopout: s,
            refreshPositionKey: a
        });
    if (!l) return (0, i.jsx)(T.SE, {});
    else if (l && null == r)
        return (0, i.jsx)(k, {
            channel: n,
            closePopout: s,
            sticker: t
        });
    return s(), null;
};
