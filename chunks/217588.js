n(724458), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(749210),
  u = n(367907),
  d = n(400106),
  E = n(697568),
  _ = n(183023),
  I = n(524444),
  T = n(98278),
  N = n(197115),
  m = n(430824),
  h = n(594174),
  C = n(285952),
  S = n(514342),
  A = n(626135),
  p = n(74538),
  g = n(453070),
  f = n(926491),
  O = n(378233),
  R = n(419922),
  M = n(688179),
  x = n(981631),
  v = n(474936),
  L = n(689938),
  Z = n(235222),
  P = n(423192);
let D = (e, t) => t ? L.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : L.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
    stickerPackName: e.name
  }),
  j = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return i.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function U(e) {
  A.default.track(x.rMx.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? x.ZY5.GUILD_CHANNEL : x.ZY5.DM_CHANNEL,
    location_section: x.jXE.STICKER_POPOUT
  }), (0, T.z)()
}

function y(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(C.Z, {
    children: [(0, s.jsx)(R.ZP, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(C.Z, {
      direction: C.Z.Direction.VERTICAL,
      justify: C.Z.Justify.CENTER,
      className: P.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: P.__invalid_emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(S.Z, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let b = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: a
    } = e, [c, d, E] = (0, r.Wu)([f.Z], () => [f.Z.getStickerPack(n.pack_id), !f.Z.hasLoadedStickerPacks, f.Z.isPremiumPack(n.pack_id)], [n]), _ = j({
      sticker: n,
      stickerPack: c
    });
    (0, g.Pq)(n.pack_id);
    let T = (0, g.Sd)(l);
    return (i.useEffect(() => {
      a()
    }, [d]), i.useEffect(() => {
      A.default.track(x.rMx.OPEN_POPOUT, {
        type: x.jXE.STICKER_POPOUT,
        guild_id: l.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, u.v_)(l)
      })
    }, [n.pack_id]), d || null == c) ? (0, s.jsx)(I.SE, {
      className: Z.popoutLoader
    }) : (0, s.jsxs)(I.W_, {
      className: Z.popoutContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: D(c, E)
      }), (0, s.jsx)("ul", {
        className: Z.stickersList,
        children: _.map(e => (0, s.jsx)(R.ZP, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), E && (0, s.jsx)("div", {
        className: Z.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            E && (0, M.m)({
              stickerPack: c,
              stickerPickerCategories: T
            }), t()
          },
          children: L.Z.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  B = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: T,
        refreshPositionKey: S
      } = e,
      [g, f] = i.useState(null),
      [O, M] = i.useState(!1),
      D = h.default.getCurrentUser(),
      j = p.ZP.canUseCustomStickersEverywhere(D),
      b = (0, r.e7)([m.Z], () => m.Z.getGuild(n.guild_id)),
      B = null != b,
      [k, G] = i.useState(!1),
      [F, V] = i.useState(null),
      w = i.useMemo(() => ({
        page: null != l.guild_id ? x.ZY5.GUILD_CHANNEL : x.ZY5.DM_CHANNEL,
        section: x.jXE.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: H
      } = i.useRef({
        guild_id: l.getGuildId(),
        ...(0, u.v_)(l)
      });
    i.useEffect(() => {
      (async () => {
        (null == b || b.hasFeature(x.oNc.DISCOVERABLE)) && f(await (0, E.Z)(n.id)), M(!0)
      })()
    }, [n.id, B]);
    let Y = n.guild_id === l.getGuildId(),
      K = null != g,
      W = !1,
      z = "Custom Sticker Popout";
    j ? t = B ? Y ? L.Z.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : K ? L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : B ? (Y ? t = L.Z.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, W = !0, z = "Custom Sticker Popout (Upsell)") : K ? (t = L.Z.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, W = !0, z = "Custom Sticker Popout (Upsell)") : (t = L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        U(l), T()
      }
    }), z = "Custom Sticker Popout (Soft Upsell)");
    let Q = !W && !B && K && j;
    return (i.useEffect(() => {
      S()
    }, [O, g]), i.useEffect(() => {
      A.default.track(x.rMx.OPEN_POPOUT, {
        type: z,
        ...H
      })
    }, []), O) ? (0, s.jsxs)(I.W_, {
      className: P.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == g || B) return;
          T();
          let e = g.id;
          try {
            await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: P.emojiSection,
          children: [(0, s.jsx)(y, {
            description: t,
            sticker: n
          }), W && (0, s.jsx)(N.Z, {
            className: P.ctaButton,
            subscriptionTier: v.Si.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: L.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : T(),
            postSuccessGuild: B || null == g ? void 0 : g,
            premiumModalAnalyticsLocation: w
          }), Q && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: P.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: L.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != b || null != g) && (() => {
        var e;
        if (!K && !B) return;
        let t = (null !== (e = null == g ? void 0 : g.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          i = null != g ? d.Z.createFromDiscoverableGuild(g) : d.Z.createFromGuildRecord(b);
        return (0, s.jsxs)("div", {
          className: P.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: P.guildTitle,
            children: B ? L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(_.Oe, {
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: B,
            isDisplayingJoinGuildButtonInPopout: Q
          }), !B && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                S(), G(!k)
              },
              className: P.showMoreEmojis,
              children: (0, s.jsxs)(C.Z, {
                children: [(0, s.jsx)(o.Text, {
                  className: P.__invalid_showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: L.Z.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(o.ChevronSmallDownIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a()(P.showMoreEmojisArrow, {
                    [P.showMoreEmojisArrowCollapsed]: !k
                  })
                })]
              })
            }), k && (0, s.jsx)(C.Z, {
              wrap: C.Z.Wrap.WRAP,
              align: C.Z.Align.START,
              justify: C.Z.Justify.START,
              className: P.otherEmojisContainer,
              children: t.map(e => (0, s.jsx)(o.Tooltip, {
                text: e.name,
                ...I.b_,
                children: t => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: i,
                    ...l
                  } = t;
                  return (0, s.jsx)("div", {
                    className: a()(P.otherEmoji, {
                      [Z.nonInteractingSticker]: null != F && F !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == i || i(), V(null)
                    },
                    ...l,
                    children: (0, s.jsx)(R.ZP, {
                      size: 32,
                      enlargeOnInteraction: !0,
                      enlargeWithName: !1,
                      enlargeScaleFactor: 2,
                      isInteracting: F === e.id,
                      sticker: e
                    })
                  }, e.id)
                }
              }, e.id))
            })]
          })]
        })
      })()]
    }) : (0, s.jsx)(I.SE, {
      className: Z.popoutLoader
    })
  };

function k(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: i
  } = e;
  return (0, s.jsx)(I.W_, {
    className: Z.popoutContent,
    children: (0, s.jsx)(y, {
      sticker: i,
      description: L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
        openPremiumSettings: () => {
          n(), U(t)
        }
      })
    })
  })
}
t.Z = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: i,
    refreshPositionKey: l
  } = e, [a, r] = (0, g.XW)(t, !0);
  if (null != a && (0, O.jl)(a)) return (0, s.jsx)(b, {
    sticker: a,
    closePopout: i,
    channel: n,
    refreshPositionKey: l
  });
  if (null != a && (0, O.J8)(a)) return (0, s.jsx)(B, {
    sticker: a,
    channel: n,
    closePopout: i,
    refreshPositionKey: l
  });
  if (!r) return (0, s.jsx)(I.SE, {});
  else if (r && null == a) return (0, s.jsx)(k, {
    channel: n,
    closePopout: i,
    sticker: t
  });
  return i(), null
}