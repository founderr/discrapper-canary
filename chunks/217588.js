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
  f = n("697568"),
  E = n("183023"),
  _ = n("524444"),
  m = n("98278"),
  T = n("197115"),
  I = n("430824"),
  p = n("594174"),
  h = n("285952"),
  N = n("514342"),
  S = n("605403"),
  C = n("626135"),
  g = n("74538"),
  A = n("453070"),
  M = n("926491"),
  R = n("378233"),
  v = n("419922"),
  O = n("688179"),
  x = n("981631"),
  L = n("474936"),
  D = n("689938"),
  P = n("143952"),
  y = n("630714");
let U = (e, t) => t ? D.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : D.default.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
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
  C.default.track(x.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? x.AnalyticsPages.GUILD_CHANNEL : x.AnalyticsPages.DM_CHANNEL,
    location_section: x.AnalyticsSections.STICKER_POPOUT
  }), (0, m.navigateToPremiumMarketingPage)()
}

function B(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(h.default, {
    children: [(0, s.jsx)(v.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(h.default, {
      direction: h.default.Direction.VERTICAL,
      justify: h.default.Justify.CENTER,
      className: y.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: y.__invalid_emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(N.default, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let F = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: i
    } = e, [u, c, f] = (0, r.useStateFromStoresArray)([M.default], () => [M.default.getStickerPack(n.pack_id), !M.default.hasLoadedStickerPacks, M.default.isPremiumPack(n.pack_id)], [n]), E = j({
      sticker: n,
      stickerPack: u
    });
    (0, A.useFetchStickerPack)(n.pack_id);
    let m = (0, A.useFilteredStickerPackCategories)(l);
    return (a.useEffect(() => {
      i()
    }, [c]), a.useEffect(() => {
      C.default.track(x.AnalyticEvents.OPEN_POPOUT, {
        type: x.AnalyticsSections.STICKER_POPOUT,
        guild_id: l.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      })
    }, [n.pack_id]), c || null == u) ? (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: P.popoutLoader
    }) : (0, s.jsxs)(_.MessagePopoutContent, {
      className: P.popoutContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: U(u, f)
      }), (0, s.jsx)("ul", {
        className: P.stickersList,
        children: E.map(e => (0, s.jsx)(v.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), f && (0, s.jsx)("div", {
        className: P.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            f && (0, O.navigateToOwnedStickerPack)({
              stickerPack: u,
              stickerPickerCategories: m
            }), t()
          },
          children: D.default.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  G = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: m,
        refreshPositionKey: N
      } = e,
      [A, M] = a.useState(null),
      [R, O] = a.useState(!1),
      U = p.default.getCurrentUser(),
      j = g.default.canUseCustomStickersEverywhere(U),
      F = (0, r.useStateFromStores)([I.default], () => I.default.getGuild(n.guild_id)),
      G = null != F,
      [k, w] = a.useState(!1),
      [H, V] = a.useState(null),
      Y = a.useMemo(() => ({
        page: null != l.guild_id ? x.AnalyticsPages.GUILD_CHANNEL : x.AnalyticsPages.DM_CHANNEL,
        section: x.AnalyticsSections.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: K
      } = a.useRef({
        guild_id: l.getGuildId(),
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      });
    a.useEffect(() => {
      (async () => {
        (null == F || F.hasFeature(x.GuildFeatures.DISCOVERABLE)) && M(await (0, f.default)(n.id)), O(!0)
      })()
    }, [n.id, G]);
    let W = n.guild_id === l.getGuildId(),
      z = null != A,
      Q = !1,
      q = "Custom Sticker Popout";
    j ? t = G ? W ? D.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : D.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? D.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : D.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : G ? (W ? t = D.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = D.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : z ? (t = D.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : (t = D.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        b(l), m()
      }
    }), q = "Custom Sticker Popout (Soft Upsell)");
    let X = !Q && !G && z && j;
    return (a.useEffect(() => {
      N()
    }, [R, A]), a.useEffect(() => {
      C.default.track(x.AnalyticEvents.OPEN_POPOUT, {
        type: q,
        ...K
      })
    }, []), R) ? (0, s.jsxs)(_.MessagePopoutContent, {
      className: y.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == A || G) return;
          m();
          let e = A.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: y.emojiSection,
          children: [(0, s.jsx)(B, {
            description: t,
            sticker: n
          }), Q && (0, s.jsx)(T.default, {
            className: y.ctaButton,
            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: D.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : m(),
            postSuccessGuild: G || null == A ? void 0 : A,
            premiumModalAnalyticsLocation: Y
          }), X && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: y.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: D.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != F || null != A) && (() => {
        var e;
        if (!z && !G) return;
        let t = (null !== (e = null == A ? void 0 : A.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          a = null != A ? c.default.createFromDiscoverableGuild(A) : c.default.createFromGuildRecord(F);
        return (0, s.jsxs)("div", {
          className: y.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: y.guildTitle,
            children: G ? D.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : D.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(E.GuildDetails, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: G,
            isDisplayingJoinGuildButtonInPopout: X
          }), !G && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                N(), w(!k)
              },
              className: y.showMoreEmojis,
              children: (0, s.jsxs)(h.default, {
                children: [(0, s.jsx)(o.Text, {
                  className: y.__invalid_showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: D.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(S.default, {
                  className: i()(y.showMoreEmojisArrow, {
                    [y.showMoreEmojisArrowCollapsed]: !k
                  })
                })]
              })
            }), k && (0, s.jsx)(h.default, {
              wrap: h.default.Wrap.WRAP,
              align: h.default.Align.START,
              justify: h.default.Justify.START,
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
                      [P.nonInteractingSticker]: null != H && H !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == a || a(), V(null)
                    },
                    ...l,
                    children: (0, s.jsx)(v.default, {
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
      className: P.popoutLoader
    })
  };

function k(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: a
  } = e;
  return (0, s.jsx)(_.MessagePopoutContent, {
    className: P.popoutContent,
    children: (0, s.jsx)(B, {
      sticker: a,
      description: D.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
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
  } = e, [i, r] = (0, A.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, R.isStandardSticker)(i)) return (0, s.jsx)(F, {
    sticker: i,
    closePopout: a,
    channel: n,
    refreshPositionKey: l
  });
  if (null != i && (0, R.isGuildSticker)(i)) return (0, s.jsx)(G, {
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