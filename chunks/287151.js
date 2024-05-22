"use strict";
i.r(t), i.d(t, {
  REACTION_MIN_WIDTH_DIGITS: function() {
    return es
  },
  Reaction: function() {
    return eu
  },
  isMeReaction: function() {
    return eo
  },
  showReactionsModal: function() {
    return el
  }
}), i("47120");
var n, a = i("735250"),
  s = i("470079"),
  l = i("120356"),
  o = i.n(l),
  r = i("153832"),
  u = i("748780"),
  d = i("866442"),
  c = i("442837"),
  h = i("846519"),
  f = i("481060"),
  m = i("596454"),
  p = i("785388"),
  g = i("607070"),
  T = i("367907"),
  v = i("98474"),
  S = i("339085"),
  E = i("906411"),
  R = i("56314"),
  I = i("400106"),
  N = i("944386"),
  C = i("305325"),
  _ = i("33154"),
  x = i("692147"),
  O = i("197115"),
  j = i("659215"),
  A = i("222677"),
  M = i("995774"),
  b = i("695346"),
  y = i("592125"),
  L = i("430824"),
  P = i("542578"),
  U = i("914010"),
  w = i("594174"),
  F = i("451478"),
  D = i("18732"),
  B = i("672752"),
  k = i("605403"),
  H = i("466111"),
  V = i("626135"),
  G = i("74538"),
  z = i("960020"),
  W = i("566006"),
  K = i("886132"),
  J = i("183023"),
  Y = i("524444"),
  Z = i("89729"),
  X = i("640753"),
  q = i("981631"),
  Q = i("474936"),
  $ = i("689938"),
  ee = i("630714"),
  et = i("858313"),
  ei = i("601064"),
  en = i("311989");

function ea(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let es = 9;

function el(e, t, i) {
  (0, f.openModal)(e => (0, a.jsx)(p.default, {
    ...e,
    message: t,
    selectedReaction: i
  }))
}

function eo(e, t, i) {
  return i === W.ReactionTypes.BURST && t || i === W.ReactionTypes.NORMAL && e
}
class er extends(n = s.PureComponent) {
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
    F.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), u.default.parallel([u.default.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: u.default.Easing.inOut(u.default.Easing.back())
    }), u.default.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t;
    let {
      count: i,
      burst_count: n,
      colors: s,
      isBurstReaction: l,
      hideCount: r,
      emoji: c,
      readOnly: h,
      isLurking: p,
      isGuest: g,
      isPendingMember: T,
      className: S,
      useChatFontScaling: E,
      message: R,
      hideEmoji: I,
      animationStartPosition: N
    } = this.props, {
      shouldShowTooltip: C,
      tooltipTextAria: _,
      reactionRef: O,
      tooltipPositionKey: j
    } = this.state, A = E ? ei : et, b = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, y = l ? n : i;
    if (l && null != s) {
      var L;
      let {
        accentColor: i,
        backgroundColor: n,
        opacity: a
      } = s, l = null !== (L = (0, d.hex2rgb)(null != n ? n : "", a)) && void 0 !== L ? L : "";
      this.isMe() && (b.borderColor = n), b.background = l, e = i, t = i
    }
    let P = null == O ? void 0 : O.getBoundingClientRect(),
      U = null != N && null != P,
      w = null == N;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(f.Popout, {
        shouldShow: C,
        "aria-label": null != _ && _,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: j,
        children: () => (0, a.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, a.jsx)(u.default.div, {
            className: o()(A.reaction, S, {
              [A.reactionMe]: this.isMe(),
              [A.reactionReadOnly]: h && !p && !T && !g,
              [A.shakeReaction]: I && null == N
            }),
            style: b,
            children: (0, a.jsx)(f.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: i => (0, a.jsxs)(f.Clickable, {
                ...i,
                className: A.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": h,
                "aria-label": (0, M.getAccessibleEmojiDisplayName)(this.isMe(), y, c, l),
                "aria-pressed": this.isMe(),
                children: [(0, a.jsx)("div", {
                  className: o()({
                    [A.burstGlow]: l
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, a.jsxs)("div", {
                  children: [l ? (0, a.jsxs)(a.Fragment, {
                    children: [U && (0, a.jsx)(v.default, {
                      messageId: R.id,
                      emoji: c,
                      startPosition: N,
                      targetPosition: P
                    }), w && (0, a.jsx)(X.default, {
                      count: n,
                      emoji: c,
                      channelId: R.getChannelId(),
                      messageId: R.id,
                      useChatFontScaling: E,
                      color: t
                    })]
                  }) : null, (0, a.jsx)(m.default, {
                    className: o()({
                      [A.hideEmoji]: I
                    }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: "reaction",
                    animated: c.animated
                  })]
                }), r ? null : (0, a.jsx)(D.default, {
                  className: A.reactionCount,
                  value: y,
                  color: e,
                  digitWidth: es
                }), (0, a.jsx)(x.default, {
                  count: y,
                  reactionRef: O
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), ea(this, "isReactionEventActive", !1), ea(this, "isKeyboardNavigation", !1), ea(this, "scale", new u.default.Value(1)), ea(this, "opacity", new u.default.Value(1)), ea(this, "timeout", new h.Timeout), ea(this, "hideTimeout", new h.Timeout), ea(this, "ctaRef", s.createRef()), ea(this, "type", W.ReactionTypes.NORMAL), ea(this, "colors", {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }), ea(this, "state", {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }), ea(this, "hasShownTooltip", !1), ea(this, "nonce", (0, r.v4)()), ea(this, "userCanBurstReact", () => this.props.userHasPremium), ea(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: i,
        readOnly: n,
        isBurstReaction: a,
        isPendingMember: s,
        isLurking: l,
        isGuest: o,
        isForumToolbar: r
      } = this.props, u = y.default.getChannel(t.getChannelId());
      if (l || o) {
        var d, c;
        null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
        return
      }
      let h = t.getChannelId(),
        f = r ? A.ReactionLocations.FORUM_TOOLBAR : A.ReactionLocations.MESSAGE;
      if (a && !this.userCanBurstReact()) {
        (0, j.openBurstReactionsUpsellModal)({
          analytics: {
            type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
            section: null != u ? (0, M.getBurstAnalyticsSection)(u) : void 0,
            object: q.AnalyticsObjects.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      s ? this.handleShowVerificationGate() : !n && (this.isMe() ? (0, A.removeReaction)(h, t.id, i, void 0, f, {
        burst: a
      }) : (0, A.addReaction)(h, t.id, i, f, {
        burst: a
      }))
    }), ea(this, "handleEnter", e => {
      let {
        emoji: t,
        message: i,
        type: n,
        reduceMotion: a,
        animateEmoji: s,
        autoUnfurlReactionTooltip: l
      } = this.props, o = n === W.ReactionTypes.BURST;
      o && !this.isReactionEventActive && !a && s && (0, A.playBurstReaction)({
        channelId: i.getChannelId(),
        messageId: i.id,
        emoji: t,
        key: z.BurstReactionEffectSource.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : l ? 200 : 500, this.showTooltip, !1)
    }), ea(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }), ea(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), P.default.addChangeListener(this.updateTooltipText))
    }), ea(this, "showTooltip", () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }), ea(this, "handleLeave", () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), P.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }), ea(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && V.default.track(q.AnalyticEvents.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), ea(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: i
      } = this.props;
      return eo(e, t, i)
    }), ea(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: i
      } = this.props, n = (0, Z.getReactionTooltipText)(e, t, i), a = this.isKeyboardNavigation ? n : (0, Z.getReactionTooltipText)(e, t, i, q.NOOP);
      this.setState({
        tooltipText: a,
        tooltipTextAria: n,
        shouldShowTooltip: null != a && "" !== a
      })
    }), ea(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: i,
        isLurking: n
      } = this.props, s = y.default.getChannel(i.getChannelId()), l = L.default.getGuild(null == s ? void 0 : s.getGuildId());
      return n && null != l ? (0, a.jsx)(_.default, {
        ctaRef: this.ctaRef,
        type: _.LurkerModeUpsellPopoutTypes.REACTIONS,
        guild: l,
        closePopout: t
      }) : (0, a.jsx)(a.Fragment, {})
    }), ea(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, a.jsx)(ec, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), ea(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: i,
        me_burst: n,
        isBurstReaction: s = !1
      } = this.props, {
        tooltipText: l
      } = this.state, r = i => {
        let n = y.default.getChannel(t.getChannelId());
        if (null != n) this.handleLeave(), el(n, t, {
          emoji: e,
          reactionType: s ? W.ReactionTypes.BURST : W.ReactionTypes.NORMAL
        })
      }, u = "string" == typeof l ? "" === l.trim() : null == l, d = () => u || null == l ? null : (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        className: en.reactionTooltipText,
        "aria-label": l,
        children: l
      });
      return i === W.ReactionTypes.BURST ? (0, a.jsxs)("div", {
        className: en.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(f.Clickable, {
          className: en.burstReactionTooltipInner,
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: en.burstReactionTooltipMessage,
            children: [(0, a.jsx)(m.default, {
              className: en.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), (() => {
          let e = w.default.getCurrentUser();
          if (n) return (0, a.jsxs)("div", {
            className: o()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
            children: [(0, G.isPremium)(e) && (0, a.jsx)(H.default, {
              className: en.burstReactionTooltipNitroIcon,
              color: B.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(f.Text, {
              variant: "text-sm/normal",
              className: en.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
            className: o()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
            children: [(0, a.jsx)(H.default, {
              className: en.burstReactionTooltipNitroIcon,
              color: B.GradientCssUrls.PREMIUM_TIER_2
            }), (0, a.jsx)(f.Clickable, {
              onClick: this.handleClick,
              children: (0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                className: en.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
            className: o()(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)(f.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: $.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, a.jsx)(O.default, {
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                buttonText: $.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: en.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, a.jsxs)("div", {
        className: en.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, a.jsx)(f.Clickable, {
          onClick: r,
          children: (0, a.jsxs)("div", {
            className: en.reactionTooltipInner,
            children: [(0, a.jsx)(m.default, {
              className: en.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), ea(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), ea(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let i = y.default.getChannel(e.getChannelId()),
        n = L.default.getGuild(null == i ? void 0 : i.getGuildId());
      null != n && (0, C.openMemberVerificationModal)(n.id)
    }), ea(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), ea(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: i
      } = this.props, n = w.default.getCurrentUser(), a = y.default.getChannel(t.getChannelId()), s = i === W.ReactionTypes.BURST, l = (0, G.isPremium)(n), o = s ? Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : Q.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
      s && !this.userCanBurstReact() && !l && (o = Q.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), T.default.trackWithMetadata(q.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
        type: o,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), s && null != a && !l && !this.userCanBurstReact() && V.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: Q.PremiumUpsellTypes.BURST_REACTION_UPSELL,
        location: {
          page: (null == a ? void 0 : a.getGuildId()) != null ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
          section: (0, M.getBurstAnalyticsSection)(a),
          object: q.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
ea(er, "defaultProps", {
  emojiSize: "jumbo"
});
let eu = s.memo(e => {
    let {
      type: t,
      burst_colors: i,
      message: n,
      emoji: s
    } = e, l = t === W.ReactionTypes.BURST, o = (0, R.useEmojiColorPalette)(l && null != i ? i : []), r = (0, c.useStateFromStores)([z.default], () => void 0 !== z.default.getEffectForEmojiId(n.getChannelId(), n.id, s)), u = (0, c.useStateFromStores)([g.default], () => g.default.useReducedMotion), d = b.AnimateEmoji.useSetting(), h = w.default.getCurrentUser(), f = (0, G.isPremium)(h), m = (0, c.useStateFromStores)([z.default], () => z.default.getReactionPickerAnimation(n.id, s.name, s.id)), p = l && (r || null != m);
    return (0, a.jsx)(er, {
      ...e,
      colors: o,
      isBurstReaction: l,
      hideEmoji: p,
      userHasPremium: f,
      reduceMotion: u,
      animateEmoji: d,
      animationStartPosition: m
    })
  }),
  ed = e => {
    var t;
    let {
      emojiId: i,
      expressionSourceGuild: n,
      hasJoinedExpressionSourceGuild: s,
      onClose: l,
      popoutData: o,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, N.useTrackOpenPopout)({
      emojiId: i,
      currentGuildId: r,
      popoutData: o,
      emojiSourceGuildId: null == n ? void 0 : n.id,
      nonce: u
    });
    let d = null !== (t = null == n ? void 0 : n.isDiscoverable()) && void 0 !== t && t,
      c = null !== n && d;
    return (0, a.jsx)(a.Fragment, {
      children: c ? null == n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, a.jsx)(J.GuildDetails, {
            expressionSourceGuild: n,
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: o.type === K.EmojiPopoutType.JOIN_GUILD
          })
        }), (0, a.jsx)(J.EmojiPopoutList, {
          emojiId: i,
          expressionSourceGuild: n,
          hasJoinedEmojiSourceGuild: s,
          onClose: l,
          popoutData: o,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        "aria-label": o.type,
        children: o.emojiDescription
      })
    })
  },
  ec = e => {
    var t;
    let {
      emojiId: i,
      refreshPositionKey: n,
      onClose: l,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, c.useStateFromStoresObject)([S.default, L.default], () => {
      let e = S.default.getCustomEmojiById(i);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === E.EmojiTypes.GUILD ? L.default.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [d, h] = s.useState(void 0), [m, p] = s.useState(!1), [g, T] = s.useState(!1), [v, R] = s.useState(!1), N = null != u, C = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, _ = U.default.getGuildId(), x = null != _ && (_ === (null == d ? void 0 : d.id) || _ === (null == u ? void 0 : u.id)), O = w.default.getCurrentUser(), j = (0, K.getEmojiPopoutData)({
      isPremium: G.default.isPremium(O),
      hasJoinedEmojiSourceGuild: N,
      isDiscoverable: C,
      emojiComesFromCurrentGuild: x,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    s.useEffect(() => {
      if (!!m && !v)(async () => {
        n(), T(!0), h(await I.default.getGuildFromEmojiId(i)), T(!1), R(!0), n()
      })()
    }, [i, m, v, n]);
    if (N) return null;
    let A = () => {
        p(!m)
      },
      M = m && void 0 !== d;
    return (0, a.jsxs)("div", {
      children: [M ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: ee.reactionEmojiDetailsDivider
        }), null != j.emojiDescription && j.type !== K.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(f.Text, {
          variant: "text-sm/normal",
          "aria-label": j.type,
          children: j.emojiDescription
        })]
      }) : (() => {
        let e = $.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, a.jsxs)(f.Clickable, {
          onClick: A,
          className: ee.reactionEmojiDetailsClickable,
          children: [(0, a.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, a.jsx)(k.default, {
            width: 16,
            height: 16,
            className: o()(ee.reactionEmojiDetailsArrow, {
              [ee.reactionEmojiDetailsArrowCollapsed]: !m
            })
          })]
        })
      })(), g ? (0, a.jsx)(Y.PopoutLoadingAnimation, {
        className: ee.emojiDetailsLoader
      }) : M && (0, a.jsx)(ed, {
        emojiId: i,
        expressionSourceGuild: d,
        hasJoinedExpressionSourceGuild: N,
        onClose: l,
        popoutData: j,
        currentGuildId: _,
        nonce: r
      })]
    })
  }