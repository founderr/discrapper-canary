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
    f = n(430824),
    C = n(594174),
    p = n(626135),
    g = n(74538),
    A = n(453070),
    S = n(926491),
    x = n(378233),
    R = n(419922),
    O = n(688179),
    M = n(981631),
    v = n(474936),
    L = n(689938),
    Z = n(174461),
    P = n(507444);
let b = (e, t) => (t ? L.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({ stickerPackName: e.name }) : L.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({ stickerPackName: e.name })),
    D = (e) => {
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
            (0, i.jsx)(R.ZP, {
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
            [c, d, _] = (0, l.Wu)([S.Z], () => [S.Z.getStickerPack(n.pack_id), !S.Z.hasLoadedStickerPacks, S.Z.isPremiumPack(n.pack_id)], [n]),
            E = D({
                sticker: n,
                stickerPack: c
            });
        (0, A.Pq)(n.pack_id);
        let I = (0, A.Sd)(a);
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
                          children: b(c, _)
                      }),
                      (0, i.jsx)('ul', {
                          className: Z.stickersList,
                          children: E.map((e) =>
                              (0, i.jsx)(
                                  R.ZP,
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
                                              (0, O.m)({
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
            [A, S] = s.useState(null),
            [x, O] = s.useState(!1),
            b = C.default.getCurrentUser(),
            D = g.ZP.canUseCustomStickersEverywhere(b),
            y = (0, l.e7)([f.Z], () => f.Z.getGuild(n.guild_id)),
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
                (null == y || y.hasFeature(M.oNc.DISCOVERABLE)) && S(await (0, I.Z)(n.id)), O(!0);
            })();
        }, [n.id, B]);
        let Y = n.guild_id === a.getGuildId(),
            W = null != A,
            K = !1,
            z = 'Custom Sticker Popout';
        D
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
        let Q = !K && !B && W && D;
        return (s.useEffect(() => {
            h();
        }, [x, A]),
        s.useEffect(() => {
            p.default.track(M.rMx.OPEN_POPOUT, {
                type: z,
                ...H
            });
        }, []),
        x)
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
                                      (0, i.jsx)(N.Z, {
                                          className: P.ctaButton,
                                          subscriptionTier: v.Si.TIER_2,
                                          size: o.Button.Sizes.SMALL,
                                          fullWidth: !0,
                                          buttonText: L.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                                          onSubscribeModalClose: (t) => (t ? e() : _()),
                                          postSuccessGuild: B || null == A ? void 0 : A,
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
                      (null != y || null != A) &&
                          (() => {
                              var e;
                              if (!W && !B) return;
                              let t = (null !== (e = null == A ? void 0 : A.stickers) && void 0 !== e ? e : [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  s = null != A ? E.JO.createFromDiscoverableGuild(A) : E.JO.createFromGuildRecord(y);
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
                                                                                  children: (0, i.jsx)(R.ZP, {
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
        [r, l] = (0, A.XW)(t, !0);
    if (null != r && (0, x.jl)(r))
        return (0, i.jsx)(y, {
            sticker: r,
            closePopout: s,
            channel: n,
            refreshPositionKey: a
        });
    if (null != r && (0, x.J8)(r))
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
