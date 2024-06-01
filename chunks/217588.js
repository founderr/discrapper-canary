"use strict";
n.r(t), n("724458"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("749210"),
  d = n("367907"),
  c = n("400106"),
  E = n("697568"),
  f = n("183023"),
  _ = n("524444"),
  T = n("98278"),
  m = n("197115"),
  I = n("430824"),
  N = n("594174"),
  p = n("285952"),
  S = n("514342"),
  C = n("605403"),
  A = n("626135"),
  h = n("74538"),
  g = n("453070"),
  M = n("926491"),
  O = n("378233"),
  R = n("419922"),
  v = n("688179"),
  L = n("981631"),
  x = n("474936"),
  P = n("689938"),
  D = n("143952"),
  y = n("630714");
let U = (e, t) => t ? P.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : P.default.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
    stickerPackName: e.name
  }),
  j = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return a.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function b(e) {
  A.default.track(L.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? L.AnalyticsPages.GUILD_CHANNEL : L.AnalyticsPages.DM_CHANNEL,
    location_section: L.AnalyticsSections.STICKER_POPOUT
  }), (0, T.navigateToPremiumMarketingPage)()
}

function G(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(p.default, {
    children: [(0, s.jsx)(R.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(p.default, {
      direction: p.default.Direction.VERTICAL,
      justify: p.default.Justify.CENTER,
      className: y.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: y.__invalid_emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(S.default, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let B = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: i
    } = e, [u, c, E] = (0, r.useStateFromStoresArray)([M.default], () => [M.default.getStickerPack(n.pack_id), !M.default.hasLoadedStickerPacks, M.default.isPremiumPack(n.pack_id)], [n]), f = j({
      sticker: n,
      stickerPack: u
    });
    (0, g.useFetchStickerPack)(n.pack_id);
    let T = (0, g.useFilteredStickerPackCategories)(l);
    return (a.useEffect(() => {
      i()
    }, [c]), a.useEffect(() => {
      A.default.track(L.AnalyticEvents.OPEN_POPOUT, {
        type: L.AnalyticsSections.STICKER_POPOUT,
        guild_id: l.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      })
    }, [n.pack_id]), c || null == u) ? (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: D.popoutLoader
    }) : (0, s.jsxs)(_.MessagePopoutContent, {
      className: D.popoutContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: U(u, E)
      }), (0, s.jsx)("ul", {
        className: D.stickersList,
        children: f.map(e => (0, s.jsx)(R.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), E && (0, s.jsx)("div", {
        className: D.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            E && (0, v.navigateToOwnedStickerPack)({
              stickerPack: u,
              stickerPickerCategories: T
            }), t()
          },
          children: P.default.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  F = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: T,
        refreshPositionKey: S
      } = e,
      [g, M] = a.useState(null),
      [O, v] = a.useState(!1),
      U = N.default.getCurrentUser(),
      j = h.default.canUseCustomStickersEverywhere(U),
      B = (0, r.useStateFromStores)([I.default], () => I.default.getGuild(n.guild_id)),
      F = null != B,
      [k, w] = a.useState(!1),
      [H, V] = a.useState(null),
      Y = a.useMemo(() => ({
        page: null != l.guild_id ? L.AnalyticsPages.GUILD_CHANNEL : L.AnalyticsPages.DM_CHANNEL,
        section: L.AnalyticsSections.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: K
      } = a.useRef({
        guild_id: l.getGuildId(),
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      });
    a.useEffect(() => {
      (async () => {
        (null == B || B.hasFeature(L.GuildFeatures.DISCOVERABLE)) && M(await (0, E.default)(n.id)), v(!0)
      })()
    }, [n.id, F]);
    let W = n.guild_id === l.getGuildId(),
      z = null != g,
      Q = !1,
      q = "Custom Sticker Popout";
    j ? t = F ? W ? P.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : P.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? P.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : P.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : F ? (W ? t = P.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = P.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : z ? (t = P.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : (t = P.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        b(l), T()
      }
    }), q = "Custom Sticker Popout (Soft Upsell)");
    let X = !Q && !F && z && j;
    return (a.useEffect(() => {
      S()
    }, [O, g]), a.useEffect(() => {
      A.default.track(L.AnalyticEvents.OPEN_POPOUT, {
        type: q,
        ...K
      })
    }, []), O) ? (0, s.jsxs)(_.MessagePopoutContent, {
      className: y.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == g || F) return;
          T();
          let e = g.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: y.emojiSection,
          children: [(0, s.jsx)(G, {
            description: t,
            sticker: n
          }), Q && (0, s.jsx)(m.default, {
            className: y.ctaButton,
            subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: P.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : T(),
            postSuccessGuild: F || null == g ? void 0 : g,
            premiumModalAnalyticsLocation: Y
          }), X && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: y.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: P.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != B || null != g) && (() => {
        var e;
        if (!z && !F) return;
        let t = (null !== (e = null == g ? void 0 : g.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          a = null != g ? c.default.createFromDiscoverableGuild(g) : c.default.createFromGuildRecord(B);
        return (0, s.jsxs)("div", {
          className: y.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: y.guildTitle,
            children: F ? P.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : P.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(f.GuildDetails, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: F,
            isDisplayingJoinGuildButtonInPopout: X
          }), !F && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                S(), w(!k)
              },
              className: y.showMoreEmojis,
              children: (0, s.jsxs)(p.default, {
                children: [(0, s.jsx)(o.Text, {
                  className: y.__invalid_showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: P.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(C.default, {
                  className: i()(y.showMoreEmojisArrow, {
                    [y.showMoreEmojisArrowCollapsed]: !k
                  })
                })]
              })
            }), k && (0, s.jsx)(p.default, {
              wrap: p.default.Wrap.WRAP,
              align: p.default.Align.START,
              justify: p.default.Justify.START,
              className: y.otherEmojisContainer,
              children: t.map(e => (0, s.jsx)(o.Tooltip, {
                text: e.name,
                ..._.EXPRESSION_TOOLTIP_PROPS,
                children: t => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: a,
                    ...l
                  } = t;
                  return (0, s.jsx)("div", {
                    className: i()(y.otherEmoji, {
                      [D.nonInteractingSticker]: null != H && H !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == a || a(), V(null)
                    },
                    ...l,
                    children: (0, s.jsx)(R.default, {
                      size: 32,
                      enlargeOnInteraction: !0,
                      enlargeWithName: !1,
                      enlargeScaleFactor: 2,
                      isInteracting: H === e.id,
                      sticker: e
                    })
                  }, e.id)
                }
              }, e.id))
            })]
          })]
        })
      })()]
    }) : (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: D.popoutLoader
    })
  };

function k(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: a
  } = e;
  return (0, s.jsx)(_.MessagePopoutContent, {
    className: D.popoutContent,
    children: (0, s.jsx)(G, {
      sticker: a,
      description: P.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
        openPremiumSettings: () => {
          n(), b(t)
        }
      })
    })
  })
}
t.default = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: a,
    refreshPositionKey: l
  } = e, [i, r] = (0, g.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, O.isStandardSticker)(i)) return (0, s.jsx)(B, {
    sticker: i,
    closePopout: a,
    channel: n,
    refreshPositionKey: l
  });
  if (null != i && (0, O.isGuildSticker)(i)) return (0, s.jsx)(F, {
    sticker: i,
    channel: n,
    closePopout: a,
    refreshPositionKey: l
  });
  if (!r) return (0, s.jsx)(_.PopoutLoadingAnimation, {});
  else if (r && null == i) return (0, s.jsx)(k, {
    channel: n,
    closePopout: a,
    sticker: t
  });
  return a(), null
}