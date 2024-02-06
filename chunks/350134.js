"use strict";
i.r(t), i.d(t, {
  REACTION_MIN_WIDTH_DIGITS: function() {
    return el
  },
  showReactionsModal: function() {
    return en
  },
  isMeReaction: function() {
    return es
  },
  Reaction: function() {
    return er
  }
}), i("222007");
var a = i("37983"),
  l = i("884691"),
  n = i("414456"),
  s = i.n(n),
  o = i("748820"),
  r = i("458960"),
  u = i("509043"),
  d = i("446674"),
  c = i("862337"),
  p = i("130969"),
  h = i("77078"),
  f = i("430568"),
  T = i("57155"),
  m = i("206230"),
  E = i("716241"),
  _ = i("58533"),
  g = i("385976"),
  R = i("858619"),
  I = i("102873"),
  C = i("101263"),
  O = i("865453"),
  A = i("233322"),
  S = i("13066"),
  v = i("785621"),
  N = i("635956"),
  P = i("85589"),
  L = i("166257"),
  M = i("432173"),
  y = i("845579"),
  x = i("42203"),
  j = i("305961"),
  U = i("486996"),
  b = i("162771"),
  D = i("697218"),
  B = i("471671"),
  w = i("738107"),
  k = i("791106"),
  V = i("256170"),
  F = i("216422"),
  G = i("599110"),
  H = i("719923"),
  K = i("15935"),
  W = i("875978"),
  J = i("412745"),
  z = i("459698"),
  Y = i("933629"),
  X = i("331011"),
  Z = i("81924"),
  q = i("49111"),
  Q = i("646718"),
  $ = i("782340"),
  ee = i("154403"),
  et = i("550244"),
  ei = i("314934"),
  ea = i("219468");
let el = 9;

function en(e, t, i) {
  (0, h.openModal)(e => (0, a.jsx)(T.default, {
    ...e,
    message: t,
    selectedReaction: i
  }))
}

function es(e, t, i) {
  return i === W.ReactionTypes.BURST && t || i === W.ReactionTypes.NORMAL && e
}
class eo extends l.PureComponent {
  componentWillAppear(e) {
    this.animateIn(e)
  }
  componentWillEnter(e) {
    this.animateIn(e)
  }
  componentWillUnmount() {
    this.hideTooltip()
  }
  animateIn(e) {
    let {
      autoUnfurlReactionTooltip: t
    } = this.props;
    B.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: r.default.Easing.inOut(r.default.Easing.back())
    }), r.default.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t;
    let {
      count: i,
      burst_count: l,
      colors: n,
      isBurstReaction: o,
      hideCount: d,
      emoji: c,
      readOnly: p,
      isLurking: T,
      isGuest: m,
      isPendingMember: E,
      className: g,
      useChatFontScaling: R,
      message: I,
      hideEmoji: C,
      animationStartPosition: O
    } = this.props, {
      shouldShowTooltip: A,
      tooltipTextAria: S,
      reactionRef: N,
      tooltipPositionKey: P
    } = this.state, L = R ? ei : et, y = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, x = o ? l : i;
    if (o && null != n) {
      var j;
      let {
        accentColor: i,
        backgroundColor: a,
        opacity: l
      } = n, s = null !== (j = (0, u.hex2rgb)(null != a ? a : "", l)) && void 0 !== j ? j : "";
      this.isMe() && (y.borderColor = a), y.background = s, e = i, t = i
    }
    let U = null == N ? void 0 : N.getBoundingClientRect(),
      b = null != O && null != U,
      D = null == O;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(h.Popout, {
        shouldShow: A,
        "aria-label": null != S && S,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: P,
        children: () => (0, a.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, a.jsx)(r.default.div, {
            className: s(L.reaction, g, {
              [L.reactionMe]: this.isMe(),
              [L.reactionReadOnly]: p && !T && !E && !m,
              [L.shakeReaction]: C && null == O
            }),
            style: y,
            children: (0, a.jsx)(h.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: i => (0, a.jsxs)(h.Clickable, {
                ...i,
                className: L.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": p,
                "aria-label": (0, M.getAccessibleEmojiDisplayName)(this.isMe(), x, c, o),
                "aria-pressed": this.isMe(),
                children: [(0, a.jsx)("div", {
                  className: s({
                    [L.burstGlow]: o
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, a.jsxs)("div", {
                  children: [o ? (0, a.jsxs)(a.Fragment, {
                    children: [b && (0, a.jsx)(_.default, {
                      messageId: I.id,
                      emoji: c,
                      startPosition: O,
                      targetPosition: U
                    }), D && (0, a.jsx)(Z.default, {
                      count: l,
                      emoji: c,
                      channelId: I.getChannelId(),
                      messageId: I.id,
                      useChatFontScaling: R,
                      color: t
                    })]
                  }) : null, (0, a.jsx)(f.default, {
                    className: s({
                      [L.hideEmoji]: C
                    }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: "reaction",
                    animated: c.animated
                  })]
                }), d ? null : (0, a.jsx)(w.default, {
                  className: L.reactionCount,
                  value: x,
                  color: e,
                  digitWidth: el
                }), (0, a.jsx)(v.default, {
                  count: x,
                  reactionRef: N
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new c.Timeout, this.hideTimeout = new c.Timeout, this.ctaRef = l.createRef(), this.type = W.ReactionTypes.NORMAL, this.colors = {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }, this.state = {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }, this.hasShownTooltip = !1, this.nonce = (0, o.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: i,
        readOnly: a,
        isBurstReaction: l,
        isPendingMember: n,
        isLurking: s,
        isGuest: o,
        isForumToolbar: r
      } = this.props, u = x.default.getChannel(t.getChannelId());
      if (s || o) {
        var d, c;
        null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
        return
      }
      let p = t.getChannelId(),
        h = r ? L.ReactionLocations.FORUM_TOOLBAR : L.ReactionLocations.MESSAGE;
      if (l && !this.userCanBurstReact()) {
        (0, P.openBurstReactionsUpsellModal)({
          analytics: {
            type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
            section: null != u ? (0, M.getBurstAnalyticsSection)(u) : void 0,
            object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      n ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, L.removeReaction)(p, t.id, i, void 0, h, {
        burst: l
      }) : (0, L.addReaction)(p, t.id, i, h, {
        burst: l
      }))
    }, this.handleEnter = e => {
      let {
        emoji: t,
        message: i,
        type: a,
        reduceMotion: l,
        animateEmoji: n,
        autoUnfurlReactionTooltip: s
      } = this.props, o = a === W.ReactionTypes.BURST;
      o && !this.isReactionEventActive && !l && n && (0, L.playBurstReaction)({
        channelId: i.getChannelId(),
        messageId: i.id,
        emoji: t,
        key: K.BurstReactionEffectSource.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : s ? 200 : 500, this.showTooltip, !1)
    }, this.handleEnterTooltip = () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }, this.handleShowTooltip = () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.default.addChangeListener(this.updateTooltipText))
    }, this.showTooltip = () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }, this.handleLeave = () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), U.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }, this.hideTooltip = () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && G.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }, this.isMe = () => {
      let {
        me: e,
        me_burst: t,
        type: i
      } = this.props;
      return es(e, t, i)
    }, this.updateTooltipText = () => {
      let {
        message: e,
        emoji: t,
        type: i
      } = this.props, a = (0, X.getReactionTooltipText)(e, t, i), l = this.isKeyboardNavigation ? a : (0, X.getReactionTooltipText)(e, t, i, q.NOOP);
      this.setState({
        tooltipText: l,
        tooltipTextAria: a,
        shouldShowTooltip: null != l && "" !== l
      })
    }, this.renderLurkerModeUpsellPopout = e => {
      let {
        closePopout: t
      } = e, {
        message: i,
        isLurking: l
      } = this.props, n = x.default.getChannel(i.getChannelId()), s = j.default.getGuild(null == n ? void 0 : n.getGuildId());
      return l && null != s ? (0, a.jsx)(S.default, {
        ctaRef: this.ctaRef,
        type: S.LurkerModeUpsellPopoutTypes.REACTIONS,
        guild: s,
        closePopout: t
      }) : (0, a.jsx)(a.Fragment, {})
    }, this.renderEmojiDetails = () => {
      let e = this.props.emoji;
      return null != e.id && (0, a.jsx)(ed, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }, this.renderTooltip = () => {
      let {
        emoji: e,
        message: t,
        type: i,
        me_burst: l,
        isBurstReaction: n = !1
      } = this.props, {
        tooltipText: o
      } = this.state, r = i => {
        let a = x.default.getChannel(t.getChannelId());
        if (null == a) return;
        this.handleLeave();
        let l = n ? W.ReactionTypes.BURST : W.ReactionTypes.NORMAL;
        en(a, t, {
          emoji: e,
          reactionType: l
        })
      }, u = "string" == typeof o, d = u ? "" === o.trim() : null == o, c = () => d || null == o ? null : (0, a.jsx)(h.Text, {
        variant: "text-sm/normal",
        className: ea.reactionTooltipText,
        "aria-label": o,
        children: o
      });
      return i === W.ReactionTypes.BURST ? (0, a.jsxs)(p.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(h.Clickable, {
          className: ea.burstReactionTooltipInner,
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.burstReactionTooltipMessage,
            children: [(0, a.jsx)(f.default, {
              className: ea.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), c()]
          })
        }), (() => {
          let e = D.default.getCurrentUser();
          if (l) return (0, a.jsxs)("div", {
            className: s(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: [(0, H.isPremium)(e) && (0, a.jsx)(F.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: k.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(h.Text, {
              variant: "text-sm/normal",
              className: ea.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
            className: s(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer, ea.burstReactionTooltipPromptClickable),
            children: [(0, a.jsx)(F.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: k.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(h.Clickable, {
              onClick: this.handleClick,
              children: (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                className: ea.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
            className: s(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, a.jsx)(N.default, {
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                buttonText: $.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: ea.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, a.jsxs)(p.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(h.Clickable, {
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.reactionTooltipInner,
            children: [(0, a.jsx)(f.default, {
              className: ea.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), c()]
          })
        }), this.renderEmojiDetails()]
      })
    }, this.refreshTooltipPositionKey = () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }, this.handleShowVerificationGate = () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let i = x.default.getChannel(e.getChannelId()),
        a = j.default.getGuild(null == i ? void 0 : i.getGuildId());
      null != a && (0, A.openMemberVerificationModal)(a.id)
    }, this.handleSetReactionRef = e => {
      this.setState({
        reactionRef: e
      })
    }, this.trackReactionTooltipViewed = () => {
      let {
        emoji: e,
        message: t,
        type: i
      } = this.props, a = D.default.getCurrentUser(), l = x.default.getChannel(t.getChannelId()), n = i === W.ReactionTypes.BURST, s = (0, H.isPremium)(a), o = n ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
      n && !this.userCanBurstReact() && !s && (o = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), E.default.trackWithMetadata(q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
        type: o,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), n && null != l && !s && !this.userCanBurstReact() && G.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
        location: {
          page: (null == l ? void 0 : l.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
          section: (0, M.getBurstAnalyticsSection)(l),
          object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    }
  }
}
eo.defaultProps = {
  emojiSize: "jumbo"
};
let er = l.memo(e => {
    let {
      type: t,
      burst_colors: i,
      message: l,
      emoji: n
    } = e, s = t === W.ReactionTypes.BURST, o = (0, I.useEmojiColorPalette)(s && null != i ? i : []), r = (0, d.useStateFromStores)([K.default], () => void 0 !== K.default.getEffectForEmojiId(l.getChannelId(), l.id, n)), u = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion), c = y.AnimateEmoji.useSetting(), p = D.default.getCurrentUser(), h = (0, H.isPremium)(p), f = (0, d.useStateFromStores)([K.default], () => K.default.getReactionPickerAnimation(l.id, n.name, n.id)), T = s && (r || null != f);
    return (0, a.jsx)(eo, {
      ...e,
      colors: o,
      isBurstReaction: s,
      hideEmoji: T,
      userHasPremium: h,
      reduceMotion: u,
      animateEmoji: c,
      animationStartPosition: f
    })
  }),
  eu = e => {
    var t;
    let {
      emojiId: i,
      expressionSourceGuild: l,
      hasJoinedExpressionSourceGuild: n,
      onClose: s,
      popoutData: o,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, O.useTrackOpenPopout)({
      emojiId: i,
      currentGuildId: r,
      popoutData: o,
      emojiSourceGuildId: null == l ? void 0 : l.id,
      nonce: u
    });
    let d = null !== (t = null == l ? void 0 : l.isDiscoverable()) && void 0 !== t && t,
      c = null !== l && d;
    return (0, a.jsx)(a.Fragment, {
      children: c ? null == l ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, a.jsx)(z.GuildDetails, {
            expressionSourceGuild: l,
            hasJoinedExpressionSourceGuild: n,
            isDisplayingJoinGuildButtonInPopout: o.type === J.EmojiPopoutType.JOIN_GUILD
          })
        }), (0, a.jsx)(z.EmojiPopoutList, {
          emojiId: i,
          expressionSourceGuild: l,
          hasJoinedEmojiSourceGuild: n,
          onClose: s,
          popoutData: o,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, a.jsx)(h.Text, {
        variant: "text-sm/normal",
        "aria-label": o.type,
        children: o.emojiDescription
      })
    })
  },
  ed = e => {
    var t;
    let {
      emojiId: i,
      refreshPositionKey: n,
      onClose: o,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, d.useStateFromStoresObject)([g.default, j.default], () => {
      let e = g.default.getCustomEmojiById(i);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === R.EmojiTypes.GUILD ? j.default.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [c, p] = l.useState(void 0), [f, T] = l.useState(!1), [m, E] = l.useState(!1), [_, I] = l.useState(!1), O = null != u, A = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, S = b.default.getGuildId(), v = null != S && (S === (null == c ? void 0 : c.id) || S === (null == u ? void 0 : u.id)), N = D.default.getCurrentUser(), P = (0, J.getEmojiPopoutData)({
      isPremium: H.default.isPremium(N),
      hasJoinedEmojiSourceGuild: O,
      isDiscoverable: A,
      emojiComesFromCurrentGuild: v,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    l.useEffect(() => {
      if (!f || _) return;
      let e = async () => {
        n(), E(!0);
        let e = await C.default.getGuildFromEmojiId(i);
        p(e), E(!1), I(!0), n()
      };
      e()
    }, [i, f, _, n]);
    if (O) return null;
    let L = () => {
        T(!f)
      },
      M = f && void 0 !== c;
    return (0, a.jsxs)("div", {
      children: [M ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsDivider
        }), null != P.emojiDescription && P.type !== J.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          "aria-label": P.type,
          children: P.emojiDescription
        })]
      }) : (() => {
        let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, a.jsxs)(h.Clickable, {
          onClick: L,
          className: ee.reactionEmojiDetailsClickable,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, a.jsx)(V.default, {
            width: 16,
            height: 16,
            className: s(ee.reactionEmojiDetailsArrow, {
              [ee.reactionEmojiDetailsArrowCollapsed]: !f
            })
          })]
        })
      })(), m ? (0, a.jsx)(Y.PopoutLoadingAnimation, {
        className: ee.emojiDetailsLoader
      }) : M && (0, a.jsx)(eu, {
        emojiId: i,
        expressionSourceGuild: c,
        hasJoinedExpressionSourceGuild: O,
        onClose: o,
        popoutData: P,
        currentGuildId: S,
        nonce: r
      })]
    })
  }