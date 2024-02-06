"use strict";
n.r(t), n.d(t, {
  MessageStandardEmojiPopout: function() {
    return J
  },
  GuildDetails: function() {
    return Y
  },
  MessageCustomEmojiPopout: function() {
    return X
  },
  CustomGuildEmojiPopout: function() {
    return K
  },
  EmojiPopoutList: function() {
    return q
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("759843"),
  o = n("446674"),
  u = n("130969"),
  d = n("77078"),
  c = n("851387"),
  m = n("430568"),
  f = n("812204"),
  h = n("685665"),
  p = n("428958"),
  g = n("736271"),
  E = n("500460"),
  C = n("101263"),
  v = n("865453"),
  I = n("153043"),
  S = n("256941"),
  _ = n("270295"),
  x = n("626301"),
  N = n("635956"),
  T = n("393414"),
  M = n("18494"),
  A = n("162771"),
  O = n("697218"),
  j = n("145131"),
  y = n("580357"),
  L = n("476263"),
  R = n("98292"),
  b = n("256170"),
  D = n("587974"),
  P = n("599110"),
  w = n("315102"),
  U = n("794818"),
  k = n("719923"),
  V = n("412745"),
  F = n("933629"),
  B = n("49111"),
  H = n("724210"),
  G = n("646718"),
  W = n("782340"),
  z = n("154403");
let Z = () => {
    let e = (0, o.useStateFromStores)([A.default], () => A.default.getGuildId());
    return {
      page: null != e ? B.AnalyticsPages.GUILD_CHANNEL : B.AnalyticsPages.DM_CHANNEL,
      section: B.AnalyticsSections.EMOJI_UPSELL_POPOUT
    }
  },
  J = e => {
    let {
      node: t
    } = e;
    return (0, v.useTrackOpenPopout)({
      emojiId: t.emojiId,
      currentGuildId: A.default.getGuildId()
    }), (0, l.jsx)(u.Dialog, {
      children: (0, l.jsx)(F.MessagePopoutContent, {
        children: (0, l.jsxs)(j.default, {
          className: z.emojiSection,
          children: [(0, l.jsx)(m.default, {
            emojiName: t.name,
            className: z.primaryEmoji,
            src: t.src,
            animated: !1,
            size: "jumbo"
          }), (0, l.jsxs)(j.default, {
            direction: j.default.Direction.VERTICAL,
            justify: j.default.Justify.CENTER,
            className: z.truncatingText,
            children: [(0, l.jsx)(d.Text, {
              className: z.emojiName,
              variant: "text-md/semibold",
              children: (0, l.jsx)(R.default, {
                children: t.name
              })
            }), (0, l.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: W.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
            })]
          })]
        })
      })
    })
  },
  Y = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: a
    } = e, {
      id: s,
      icon: r,
      name: o
    } = t, u = w.default.getGuildIconURL({
      id: s,
      icon: r,
      size: 32,
      canAnimate: !0
    });
    n = null == n || n;
    let c = n || t.isDiscoverable(),
      m = () => {
        t.isDiscoverable() ? (0, U.startLurking)(s, {}) : n && (0, T.transitionTo)(B.Routes.CHANNEL(s, M.default.getChannelId(s)))
      },
      f = t.isDiscoverable() && null != t.presenceCount,
      h = () => {
        let e = !a && !n;
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: W.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: t.presenceCount
            })
          }), (0, l.jsx)("div", {
            className: z.dotSeparator
          }), e ? (0, l.jsx)(d.Clickable, {
            className: z.joinGuildLink,
            onClick: m,
            children: (0, l.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-link",
              children: W.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })
          }) : (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: W.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
          })]
        })
      };
    return (0, l.jsxs)(j.default, {
      align: j.default.Align.CENTER,
      children: [(0, l.jsx)(D.default, {
        mask: D.default.Masks.SQUIRCLE,
        width: 32,
        height: 32,
        className: z.guildIconContainer,
        children: (() => {
          let e = null != u && c;
          return e ? (0, l.jsxs)(d.Clickable, {
            "aria-label": o,
            onClick: m,
            children: [(0, l.jsx)("img", {
              src: u,
              alt: "",
              className: z.guildIcon
            }), " :"]
          }) : (0, l.jsx)(L.default, {
            size: L.default.Sizes.SMALL,
            className: z.guildIconNotClickable,
            guild: t
          })
        })()
      }), (0, l.jsxs)(j.default, {
        direction: j.default.Direction.VERTICAL,
        className: i(z.guildInformation, z.truncatingText),
        children: [(0, l.jsxs)(j.default, {
          align: j.default.Align.CENTER,
          children: [(0, l.jsx)(y.default, {
            guild: t,
            className: z.guildBadge
          }), c ? (0, l.jsx)(d.Clickable, {
            onClick: m,
            className: z.truncatingText,
            children: (0, l.jsx)(d.Heading, {
              className: z.guildName,
              variant: "heading-md/semibold",
              children: (0, l.jsx)(R.default, {
                children: o
              })
            })
          }) : (0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            children: (0, l.jsx)(R.default, {
              children: o
            })
          })]
        }), (0, l.jsx)(j.default, {
          align: j.default.Align.CENTER,
          children: f ? h() : (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: W.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
          })
        })]
      })]
    })
  },
  X = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: a,
      nonce: s
    } = e, {
      expressionSourceGuild: i,
      joinedEmojiSourceGuildRecord: r,
      emoji: o,
      isFetching: d
    } = (0, E.useEmojiAndSourceGuild)({
      emojiId: t.emojiId,
      refreshPositionKey: a
    });
    return d ? (0, l.jsx)(F.PopoutLoadingAnimation, {}) : (0, l.jsx)(u.Dialog, {
      "aria-label": t.name,
      children: (0, l.jsx)(K, {
        node: t,
        guildEmoji: null != o ? o : void 0,
        expressionSourceGuild: i,
        joinedEmojiSourceGuildRecord: r,
        closePopout: n,
        onToggleShowMoreEmojis: a,
        demoMode: !1,
        nonce: s
      })
    })
  },
  K = e => {
    var t, n, s;
    let {
      node: u,
      expressionSourceGuild: E,
      joinedEmojiSourceGuildRecord: T,
      closePopout: M,
      onToggleShowMoreEmojis: y,
      guildEmoji: L,
      demoMode: D = !1,
      nonce: w
    } = e, U = (0, o.useStateFromStores)([O.default], () => O.default.getCurrentUser()), J = (0, o.useStateFromStores)([A.default], () => A.default.getGuildId()), X = k.default.isPremium(U), K = null != J && (J === (null == E ? void 0 : E.id) || J === (null == T ? void 0 : T.id)), Q = null != T, $ = null !== (t = null == E ? void 0 : E.isDiscoverable()) && void 0 !== t && t;
    D && (X = !0, $ = !0, Q = !1, K = !1);
    let ee = Z(),
      {
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: en,
        userIsRoleSubscriber: el
      } = a.useMemo(() => null == L ? {
        isRoleSubscriptionEmoji: !1,
        isUnusableRoleSubscriptionEmoji: !1,
        userIsRoleSubscriber: !1
      } : {
        isRoleSubscriptionEmoji: I.isPurchasableRoleSubscriptionEmoji(L),
        isUnusableRoleSubscriptionEmoji: I.isUnusableRoleSubscriptionEmoji(L, null != J ? J : void 0),
        userIsRoleSubscriber: S.default.getUserSubscriptionRoles(L.guildId).size > 0
      }, [L, J]),
      ea = !!en && (0, g.shouldHideGuildPurchaseEntryPoints)(null == L ? void 0 : L.guildId),
      {
        analyticsLocations: es
      } = (0, h.default)(f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, p.default)({
      type: r.ImpressionTypes.MODAL,
      name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: es,
        emoji_guild_id: null !== (n = null == L ? void 0 : L.guildId) && void 0 !== n ? n : null,
        emoji_id: null !== (s = null == L ? void 0 : L.id) && void 0 !== s ? s : null
      }
    }, {
      disableTrack: !et
    });
    let ei = A.default.getGuildId(),
      er = (0, V.getEmojiPopoutData)({
        isPremium: X,
        hasJoinedEmojiSourceGuild: Q,
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: en,
        userIsRoleSubscriber: el,
        emojiComesFromCurrentGuild: K,
        isDiscoverable: $,
        shouldHideRoleSubscriptionCTA: ea,
        onOpenPremiumSettings: () => {
          M(), P.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
            location_page: ee.page,
            location_section: ee.section
          }), (0, x.navigateToPremiumMarketingPage)()
        }
      }),
      eo = Q && en && !ea && (X && et || !X),
      eu = er.emojiDescription,
      ed = (0, v.useTrackOpenPopout)({
        emojiId: u.emojiId,
        currentGuildId: ei,
        popoutData: er,
        emojiSourceGuildId: null == E ? void 0 : E.id,
        nonce: w,
        demoMode: D
      }),
      ec = er.type === V.EmojiPopoutType.JOIN_GUILD,
      em = er.type === V.EmojiPopoutType.GET_PREMIUM,
      [ef, eh] = a.useState(!1),
      ep = $ || Q && !K || null != E;
    return (0, l.jsxs)(F.MessagePopoutContent, {
      className: z.popoutContent,
      children: [(() => {
        let e = async () => {
          if (D || null == E || Q) return;
          M();
          let e = E.id;
          try {
            await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
          } catch {}
        }, t = !Q && $;
        return (0, l.jsxs)("div", {
          className: z.emojiSection,
          children: [(0, l.jsxs)(j.default, {
            children: [(0, l.jsx)(m.default, {
              className: z.primaryEmoji,
              emojiId: u.emojiId,
              emojiName: u.name,
              animated: u.animated,
              size: "jumbo"
            }), (0, l.jsxs)(j.default, {
              direction: j.default.Direction.VERTICAL,
              justify: j.default.Justify.CENTER,
              className: z.truncatingText,
              children: [(0, l.jsx)(d.Text, {
                variant: "text-md/semibold",
                children: (0, l.jsx)(R.default, {
                  children: u.name
                })
              }), null != eu && (0, l.jsx)(d.Text, {
                variant: "text-sm/normal",
                children: eu
              })]
            })]
          }), em ? (0, l.jsx)(N.default, {
            className: z.ctaButton,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
            size: d.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: er.text,
            onSubscribeModalClose: t => t ? e() : M(),
            postSuccessGuild: t && null != E ? E : void 0,
            premiumModalAnalyticsLocation: ee
          }) : ec ? (0, l.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            className: z.ctaButton,
            color: d.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: er.text
          }) : void 0, eo && (0, l.jsx)(_.default, {
            className: z.ctaButton,
            size: d.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              M(), (null == T ? void 0 : T.id) != null && c.default.transitionToGuildSync(T.id, void 0, H.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
            },
            children: el ? W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })]
        })
      })(), ep && (() => {
        let e = null != E && !Q && $,
          t = () => {
            e && (null == y || y(), !ef && !D && P.default.track(B.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), eh(!ef))
          };
        return (0, l.jsxs)("div", {
          className: z.guildSection,
          children: [(0, l.jsx)(d.FormTitle, {
            className: z.guildTitle,
            children: Q ? W.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : W.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, l.jsx)(Y, {
            expressionSourceGuild: null != E ? E : C.default.createFromGuildRecord(T),
            hasJoinedExpressionSourceGuild: Q,
            isDisplayingJoinGuildButtonInPopout: ec
          }), e && (0, l.jsxs)(l.Fragment, {
            children: [(() => {
              let e = W.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
              return (0, l.jsx)(d.Clickable, {
                onClick: t,
                className: z.showMoreEmojis,
                children: (0, l.jsxs)(j.default, {
                  children: [(0, l.jsx)(d.Text, {
                    className: z.showMoreEmojisLabel,
                    "aria-label": e,
                    variant: "text-xs/normal",
                    color: "none",
                    children: e
                  }), (0, l.jsx)(b.default, {
                    className: i(z.showMoreEmojisArrow, {
                      [z.showMoreEmojisArrowCollapsed]: !ef
                    })
                  })]
                })
              })
            })(), null != u.emojiId && ef && (0, l.jsx)(q, {
              emojiId: u.emojiId,
              expressionSourceGuild: E,
              popoutData: er,
              onClose: M,
              hasJoinedEmojiSourceGuild: Q,
              isDisplayingButtonInTopSection: ec || em
            })]
          })]
        })
      })()]
    })
  },
  q = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: a,
      hasJoinedEmojiSourceGuild: s,
      popoutData: i,
      onClose: r,
      isDisplayingButtonInTopSection: o
    } = e, u = (null !== (t = null == a ? void 0 : a.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
      type: c,
      description: f
    } = i;
    return (0, l.jsxs)(j.default, {
      wrap: j.default.Wrap.WRAP,
      align: j.default.Align.CENTER,
      justify: j.default.Justify.CENTER,
      className: z.otherEmojisContainer,
      children: [s ? null : u.map(e => (0, l.jsx)(d.Tooltip, {
        text: e.require_colons ? ":".concat(e.name, ":") : e.name,
        ...F.EXPRESSION_TOOLTIP_PROPS,
        children: t => (0, l.jsx)(m.default, {
          className: z.otherEmoji,
          emojiId: e.id,
          animated: e.animated,
          ...t
        })
      }, e.id)), !o && (c === V.EmojiPopoutType.GET_PREMIUM ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(N.default, {
          subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
          buttonText: i.text,
          className: z.ctaButton,
          fullWidth: !0,
          onClick: () => r()
        }), null != f && (0, l.jsx)("div", {
          className: z.ctaDescription,
          children: (0, l.jsx)(d.Text, {
            variant: "text-sm/medium",
            "aria-label": f,
            children: f
          })
        })]
      }) : c === V.EmojiPopoutType.JOIN_GUILD ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        className: z.ctaButton,
        color: d.ButtonColors.BRAND,
        fullWidth: !0,
        onClick: () => {
          (0, U.startLurking)(a.id, {})
        },
        children: i.text
      }) : null)]
    })
  }