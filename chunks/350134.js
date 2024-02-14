"use strict";
i.r(t), i.d(t, {
  REACTION_MIN_WIDTH_DIGITS: function() {
    return en
  },
  showReactionsModal: function() {
    return el
  },
  isMeReaction: function() {
    return eo
  },
  Reaction: function() {
    return er
  }
}), i("222007");
var a = i("37983"),
  n = i("884691"),
  l = i("414456"),
  o = i.n(l),
  s = i("748820"),
  r = i("458960"),
  u = i("509043"),
  d = i("446674"),
  c = i("862337"),
  h = i("130969"),
  p = i("77078"),
  T = i("430568"),
  m = i("57155"),
  f = i("206230"),
  E = i("716241"),
  R = i("58533"),
  I = i("385976"),
  g = i("858619"),
  _ = i("102873"),
  N = i("101263"),
  C = i("865453"),
  v = i("233322"),
  O = i("13066"),
  S = i("785621"),
  j = i("635956"),
  x = i("85589"),
  A = i("166257"),
  P = i("432173"),
  M = i("845579"),
  L = i("42203"),
  y = i("305961"),
  b = i("486996"),
  U = i("162771"),
  B = i("697218"),
  V = i("471671"),
  k = i("738107"),
  D = i("791106"),
  w = i("256170"),
  G = i("216422"),
  F = i("599110"),
  H = i("719923"),
  K = i("15935"),
  W = i("875978"),
  J = i("412745"),
  z = i("459698"),
  Z = i("933629"),
  Y = i("331011"),
  X = i("81924"),
  q = i("49111"),
  Q = i("646718"),
  $ = i("782340"),
  ee = i("325417"),
  et = i("159441"),
  ei = i("450076"),
  ea = i("363454");
let en = 9;

function el(e, t, i) {
  (0, p.openModal)(e => (0, a.jsx)(m.default, {
    ...e,
    message: t,
    selectedReaction: i
  }))
}

function eo(e, t, i) {
  return i === W.ReactionTypes.BURST && t || i === W.ReactionTypes.NORMAL && e
}
class es extends n.PureComponent {
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
    V.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
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
      burst_count: n,
      colors: l,
      isBurstReaction: s,
      hideCount: d,
      emoji: c,
      readOnly: h,
      isLurking: m,
      isGuest: f,
      isPendingMember: E,
      className: I,
      useChatFontScaling: g,
      message: _,
      hideEmoji: N,
      animationStartPosition: C
    } = this.props, {
      shouldShowTooltip: v,
      tooltipTextAria: O,
      reactionRef: j,
      tooltipPositionKey: x
    } = this.state, A = g ? ei : et, M = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, L = s ? n : i;
    if (s && null != l) {
      var y;
      let {
        accentColor: i,
        backgroundColor: a,
        opacity: n
      } = l, o = null !== (y = (0, u.hex2rgb)(null != a ? a : "", n)) && void 0 !== y ? y : "";
      this.isMe() && (M.borderColor = a), M.background = o, e = i, t = i
    }
    let b = null == j ? void 0 : j.getBoundingClientRect(),
      U = null != C && null != b,
      B = null == C;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(p.Popout, {
        shouldShow: v,
        "aria-label": null != O && O,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: x,
        children: () => (0, a.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, a.jsx)(r.default.div, {
            className: o(A.reaction, I, {
              [A.reactionMe]: this.isMe(),
              [A.reactionReadOnly]: h && !m && !E && !f,
              [A.shakeReaction]: N && null == C
            }),
            style: M,
            children: (0, a.jsx)(p.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: i => (0, a.jsxs)(p.Clickable, {
                ...i,
                className: A.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": h,
                "aria-label": (0, P.getAccessibleEmojiDisplayName)(this.isMe(), L, c, s),
                "aria-pressed": this.isMe(),
                children: [(0, a.jsx)("div", {
                  className: o({
                    [A.burstGlow]: s
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, a.jsxs)("div", {
                  children: [s ? (0, a.jsxs)(a.Fragment, {
                    children: [U && (0, a.jsx)(R.default, {
                      messageId: _.id,
                      emoji: c,
                      startPosition: C,
                      targetPosition: b
                    }), B && (0, a.jsx)(X.default, {
                      count: n,
                      emoji: c,
                      channelId: _.getChannelId(),
                      messageId: _.id,
                      useChatFontScaling: g,
                      color: t
                    })]
                  }) : null, (0, a.jsx)(T.default, {
                    className: o({
                      [A.hideEmoji]: N
                    }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: "reaction",
                    animated: c.animated
                  })]
                }), d ? null : (0, a.jsx)(k.default, {
                  className: A.reactionCount,
                  value: L,
                  color: e,
                  digitWidth: en
                }), (0, a.jsx)(S.default, {
                  count: L,
                  reactionRef: j
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new c.Timeout, this.hideTimeout = new c.Timeout, this.ctaRef = n.createRef(), this.type = W.ReactionTypes.NORMAL, this.colors = {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }, this.state = {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }, this.hasShownTooltip = !1, this.nonce = (0, s.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: i,
        readOnly: a,
        isBurstReaction: n,
        isPendingMember: l,
        isLurking: o,
        isGuest: s,
        isForumToolbar: r
      } = this.props, u = L.default.getChannel(t.getChannelId());
      if (o || s) {
        var d, c;
        null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
        return
      }
      let h = t.getChannelId(),
        p = r ? A.ReactionLocations.FORUM_TOOLBAR : A.ReactionLocations.MESSAGE;
      if (n && !this.userCanBurstReact()) {
        (0, x.openBurstReactionsUpsellModal)({
          analytics: {
            type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
            section: null != u ? (0, P.getBurstAnalyticsSection)(u) : void 0,
            object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      l ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, A.removeReaction)(h, t.id, i, void 0, p, {
        burst: n
      }) : (0, A.addReaction)(h, t.id, i, p, {
        burst: n
      }))
    }, this.handleEnter = e => {
      let {
        emoji: t,
        message: i,
        type: a,
        reduceMotion: n,
        animateEmoji: l,
        autoUnfurlReactionTooltip: o
      } = this.props, s = a === W.ReactionTypes.BURST;
      s && !this.isReactionEventActive && !n && l && (0, A.playBurstReaction)({
        channelId: i.getChannelId(),
        messageId: i.id,
        emoji: t,
        key: K.BurstReactionEffectSource.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(s ? 750 : o ? 200 : 500, this.showTooltip, !1)
    }, this.handleEnterTooltip = () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }, this.handleShowTooltip = () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), b.default.addChangeListener(this.updateTooltipText))
    }, this.showTooltip = () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }, this.handleLeave = () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), b.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }, this.hideTooltip = () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && F.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }, this.isMe = () => {
      let {
        me: e,
        me_burst: t,
        type: i
      } = this.props;
      return eo(e, t, i)
    }, this.updateTooltipText = () => {
      let {
        message: e,
        emoji: t,
        type: i
      } = this.props, a = (0, Y.getReactionTooltipText)(e, t, i), n = this.isKeyboardNavigation ? a : (0, Y.getReactionTooltipText)(e, t, i, q.NOOP);
      this.setState({
        tooltipText: n,
        tooltipTextAria: a,
        shouldShowTooltip: null != n && "" !== n
      })
    }, this.renderLurkerModeUpsellPopout = e => {
      let {
        closePopout: t
      } = e, {
        message: i,
        isLurking: n
      } = this.props, l = L.default.getChannel(i.getChannelId()), o = y.default.getGuild(null == l ? void 0 : l.getGuildId());
      return n && null != o ? (0, a.jsx)(O.default, {
        ctaRef: this.ctaRef,
        type: O.LurkerModeUpsellPopoutTypes.REACTIONS,
        guild: o,
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
        me_burst: n,
        isBurstReaction: l = !1
      } = this.props, {
        tooltipText: s
      } = this.state, r = i => {
        let a = L.default.getChannel(t.getChannelId());
        if (null == a) return;
        this.handleLeave();
        let n = l ? W.ReactionTypes.BURST : W.ReactionTypes.NORMAL;
        el(a, t, {
          emoji: e,
          reactionType: n
        })
      }, u = "string" == typeof s, d = u ? "" === s.trim() : null == s, c = () => d || null == s ? null : (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        className: ea.reactionTooltipText,
        "aria-label": s,
        children: s
      });
      return i === W.ReactionTypes.BURST ? (0, a.jsxs)(h.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(p.Clickable, {
          className: ea.burstReactionTooltipInner,
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.burstReactionTooltipMessage,
            children: [(0, a.jsx)(T.default, {
              className: ea.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), c()]
          })
        }), (() => {
          let e = B.default.getCurrentUser();
          if (n) return (0, a.jsxs)("div", {
            className: o(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: [(0, H.isPremium)(e) && (0, a.jsx)(G.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: D.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(p.Text, {
              variant: "text-sm/normal",
              className: ea.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
            className: o(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer, ea.burstReactionTooltipPromptClickable),
            children: [(0, a.jsx)(G.default, {
              className: ea.burstReactionTooltipNitroIcon,
              color: D.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(p.Clickable, {
              onClick: this.handleClick,
              children: (0, a.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: ea.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
            className: o(ea.burstReactionTooltipPrompt, ea.burstReactionTooltipSpacer),
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)(p.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, a.jsx)(j.default, {
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                buttonText: $.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: ea.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, a.jsxs)(h.Dialog, {
        className: ea.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(p.Clickable, {
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: ea.reactionTooltipInner,
            children: [(0, a.jsx)(T.default, {
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
      let i = L.default.getChannel(e.getChannelId()),
        a = y.default.getGuild(null == i ? void 0 : i.getGuildId());
      null != a && (0, v.openMemberVerificationModal)(a.id)
    }, this.handleSetReactionRef = e => {
      this.setState({
        reactionRef: e
      })
    }, this.trackReactionTooltipViewed = () => {
      let {
        emoji: e,
        message: t,
        type: i
      } = this.props, a = B.default.getCurrentUser(), n = L.default.getChannel(t.getChannelId()), l = i === W.ReactionTypes.BURST, o = (0, H.isPremium)(a), s = l ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
      l && !this.userCanBurstReact() && !o && (s = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), E.default.trackWithMetadata(q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
        type: s,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), l && null != n && !o && !this.userCanBurstReact() && F.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
        location: {
          page: (null == n ? void 0 : n.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
          section: (0, P.getBurstAnalyticsSection)(n),
          object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    }
  }
}
es.defaultProps = {
  emojiSize: "jumbo"
};
let er = n.memo(e => {
    let {
      type: t,
      burst_colors: i,
      message: n,
      emoji: l
    } = e, o = t === W.ReactionTypes.BURST, s = (0, _.useEmojiColorPalette)(o && null != i ? i : []), r = (0, d.useStateFromStores)([K.default], () => void 0 !== K.default.getEffectForEmojiId(n.getChannelId(), n.id, l)), u = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion), c = M.AnimateEmoji.useSetting(), h = B.default.getCurrentUser(), p = (0, H.isPremium)(h), T = (0, d.useStateFromStores)([K.default], () => K.default.getReactionPickerAnimation(n.id, l.name, l.id)), m = o && (r || null != T);
    return (0, a.jsx)(es, {
      ...e,
      colors: s,
      isBurstReaction: o,
      hideEmoji: m,
      userHasPremium: p,
      reduceMotion: u,
      animateEmoji: c,
      animationStartPosition: T
    })
  }),
  eu = e => {
    var t;
    let {
      emojiId: i,
      expressionSourceGuild: n,
      hasJoinedExpressionSourceGuild: l,
      onClose: o,
      popoutData: s,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, C.useTrackOpenPopout)({
      emojiId: i,
      currentGuildId: r,
      popoutData: s,
      emojiSourceGuildId: null == n ? void 0 : n.id,
      nonce: u
    });
    let d = null !== (t = null == n ? void 0 : n.isDiscoverable()) && void 0 !== t && t,
      c = null !== n && d;
    return (0, a.jsx)(a.Fragment, {
      children: c ? null == n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, a.jsx)(z.GuildDetails, {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: l,
            isDisplayingJoinGuildButtonInPopout: s.type === J.EmojiPopoutType.JOIN_GUILD
          })
        }), (0, a.jsx)(z.EmojiPopoutList, {
          emojiId: i,
          expressionSourceGuild: n,
          hasJoinedEmojiSourceGuild: l,
          onClose: o,
          popoutData: s,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        "aria-label": s.type,
        children: s.emojiDescription
      })
    })
  },
  ed = e => {
    var t;
    let {
      emojiId: i,
      refreshPositionKey: l,
      onClose: s,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, d.useStateFromStoresObject)([I.default, y.default], () => {
      let e = I.default.getCustomEmojiById(i);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === g.EmojiTypes.GUILD ? y.default.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [c, h] = n.useState(void 0), [T, m] = n.useState(!1), [f, E] = n.useState(!1), [R, _] = n.useState(!1), C = null != u, v = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, O = U.default.getGuildId(), S = null != O && (O === (null == c ? void 0 : c.id) || O === (null == u ? void 0 : u.id)), j = B.default.getCurrentUser(), x = (0, J.getEmojiPopoutData)({
      isPremium: H.default.isPremium(j),
      hasJoinedEmojiSourceGuild: C,
      isDiscoverable: v,
      emojiComesFromCurrentGuild: S,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    n.useEffect(() => {
      if (!T || R) return;
      let e = async () => {
        l(), E(!0);
        let e = await N.default.getGuildFromEmojiId(i);
        h(e), E(!1), _(!0), l()
      };
      e()
    }, [i, T, R, l]);
    if (C) return null;
    let A = () => {
        m(!T)
      },
      P = T && void 0 !== c;
    return (0, a.jsxs)("div", {
      children: [P ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsDivider
        }), null != x.emojiDescription && x.type !== J.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(p.Text, {
          variant: "text-sm/normal",
          "aria-label": x.type,
          children: x.emojiDescription
        })]
      }) : (() => {
        let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, a.jsxs)(p.Clickable, {
          onClick: A,
          className: ee.reactionEmojiDetailsClickable,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, a.jsx)(w.default, {
            width: 16,
            height: 16,
            className: o(ee.reactionEmojiDetailsArrow, {
              [ee.reactionEmojiDetailsArrowCollapsed]: !T
            })
          })]
        })
      })(), f ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
        className: ee.emojiDetailsLoader
      }) : P && (0, a.jsx)(eu, {
        emojiId: i,
        expressionSourceGuild: c,
        hasJoinedExpressionSourceGuild: C,
        onClose: s,
        popoutData: x,
        currentGuildId: O,
        nonce: r
      })]
    })
  }