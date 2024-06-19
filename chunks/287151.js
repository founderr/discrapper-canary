n.d(t, {
  aO: function() {
    return ei
  },
  le: function() {
    return eo
  },
  op: function() {
    return es
  },
  y4: function() {
    return ea
  }
}), n(47120);
var i, s = n(735250),
  a = n(470079),
  l = n(120356),
  o = n.n(l),
  r = n(772848),
  u = n(748780),
  c = n(866442),
  d = n(442837),
  h = n(846519),
  m = n(481060),
  p = n(596454),
  g = n(785388),
  T = n(607070),
  f = n(367907),
  v = n(98474),
  E = n(339085),
  I = n(906411),
  N = n(56314),
  x = n(400106),
  S = n(944386),
  C = n(305325),
  R = n(33154),
  Z = n(692147),
  _ = n(197115),
  O = n(659215),
  j = n(222677),
  A = n(995774),
  M = n(695346),
  b = n(592125),
  P = n(430824),
  L = n(542578),
  y = n(914010),
  U = n(594174),
  w = n(451478),
  k = n(18732),
  D = n(672752),
  B = n(626135),
  F = n(74538),
  V = n(960020),
  H = n(566006),
  G = n(886132),
  W = n(183023),
  z = n(524444),
  K = n(89729),
  Y = n(640753),
  J = n(981631),
  q = n(474936),
  X = n(689938),
  $ = n(423192),
  Q = n(704963),
  ee = n(667671),
  et = n(774445);

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ei = 9;

function es(e, t, n) {
  (0, m.openModal)(e => (0, s.jsx)(g.default, {
    ...e,
    message: t,
    selectedReaction: n
  }))
}

function ea(e, t, n) {
  return n === H.O.BURST && t || n === H.O.NORMAL && e
}
class el extends(i = a.PureComponent) {
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
    w.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), u.Z.parallel([u.Z.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: u.Z.Easing.inOut(u.Z.Easing.back())
    }), u.Z.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t;
    let {
      count: n,
      burst_count: i,
      colors: a,
      isBurstReaction: l,
      hideCount: r,
      emoji: d,
      readOnly: h,
      isLurking: g,
      isGuest: T,
      isPendingMember: f,
      className: E,
      useChatFontScaling: I,
      message: N,
      hideEmoji: x,
      animationStartPosition: S
    } = this.props, {
      shouldShowTooltip: C,
      tooltipTextAria: R,
      reactionRef: _,
      tooltipPositionKey: O
    } = this.state, j = I ? ee : Q, M = {
      transform: [{
        scale: this.scale
      }],
      opacity: this.opacity
    }, b = l ? i : n;
    if (l && null != a) {
      var P;
      let {
        accentColor: n,
        backgroundColor: i,
        opacity: s
      } = a, l = null !== (P = (0, c.wK)(null != i ? i : "", s)) && void 0 !== P ? P : "";
      this.isMe() && (M.borderColor = i), M.background = l, e = n, t = n
    }
    let L = null == _ ? void 0 : _.getBoundingClientRect(),
      y = null != S && null != L,
      U = null == S;
    return (0, s.jsx)(s.Fragment, {
      children: (0, s.jsx)(m.Popout, {
        shouldShow: C,
        "aria-label": null != R && R,
        renderPopout: this.renderTooltip,
        nudgeAlignIntoViewport: !0,
        position: "top",
        align: "center",
        positionKey: O,
        children: () => (0, s.jsx)("div", {
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          ref: this.handleSetReactionRef,
          children: (0, s.jsx)(u.Z.div, {
            className: o()(j.reaction, E, {
              [j.reactionMe]: this.isMe(),
              [j.reactionReadOnly]: h && !g && !f && !T,
              [j.shakeReaction]: x && null == S
            }),
            style: M,
            children: (0, s.jsx)(m.Popout, {
              renderPopout: this.renderLurkerModeUpsellPopout,
              position: "top",
              children: n => (0, s.jsxs)(m.Clickable, {
                ...n,
                className: j.reactionInner,
                onClick: this.handleClick,
                "aria-disabled": h,
                "aria-label": (0, A.iD)(this.isMe(), b, d, l),
                "aria-pressed": this.isMe(),
                children: [(0, s.jsx)("div", {
                  className: o()({
                    [j.burstGlow]: l
                  }),
                  style: {
                    boxShadow: "0 0 16px ".concat(t)
                  }
                }), (0, s.jsxs)("div", {
                  children: [l ? (0, s.jsxs)(s.Fragment, {
                    children: [y && (0, s.jsx)(v.Z, {
                      messageId: N.id,
                      emoji: d,
                      startPosition: S,
                      targetPosition: L
                    }), U && (0, s.jsx)(Y.Z, {
                      count: i,
                      emoji: d,
                      channelId: N.getChannelId(),
                      messageId: N.id,
                      useChatFontScaling: I,
                      color: t
                    })]
                  }) : null, (0, s.jsx)(p.Z, {
                    className: o()({
                      [j.hideEmoji]: x
                    }),
                    emojiId: d.id,
                    emojiName: d.name,
                    size: "reaction",
                    animated: d.animated
                  })]
                }), r ? null : (0, s.jsx)(k.Z, {
                  className: j.reactionCount,
                  value: b,
                  color: e,
                  digitWidth: ei
                }), (0, s.jsx)(Z.Z, {
                  count: b,
                  reactionRef: _
                })]
              })
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), en(this, "isReactionEventActive", !1), en(this, "isKeyboardNavigation", !1), en(this, "scale", new u.Z.Value(1)), en(this, "opacity", new u.Z.Value(1)), en(this, "timeout", new h.V7), en(this, "hideTimeout", new h.V7), en(this, "ctaRef", a.createRef()), en(this, "type", H.O.NORMAL), en(this, "colors", {
      backgroundColor: void 0,
      borderColor: void 0,
      textColor: void 0
    }), en(this, "state", {
      shouldShowTooltip: !1,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: void 0
    }), en(this, "hasShownTooltip", !1), en(this, "nonce", (0, r.Z)()), en(this, "userCanBurstReact", () => this.props.userHasPremium), en(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: n,
        readOnly: i,
        isBurstReaction: s,
        isPendingMember: a,
        isLurking: l,
        isGuest: o,
        isForumToolbar: r
      } = this.props, u = b.Z.getChannel(t.getChannelId());
      if (l || o) {
        var c, d;
        null === (d = this.ctaRef) || void 0 === d || null === (c = d.current) || void 0 === c || c.focus();
        return
      }
      let h = t.getChannelId(),
        m = r ? j.TW.FORUM_TOOLBAR : j.TW.MESSAGE;
      if (s && !this.userCanBurstReact()) {
        (0, O.openBurstReactionsUpsellModal)({
          analytics: {
            type: q.cd.BURST_REACTION_UPSELL,
            page: (null == u ? void 0 : u.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
            section: null != u ? (0, A.s4)(u) : void 0,
            object: J.qAy.EMOJI_REACTION_UPSELL
          }
        });
        return
      }
      a ? this.handleShowVerificationGate() : !i && (this.isMe() ? (0, j.WO)(h, t.id, n, void 0, m, {
        burst: s
      }) : (0, j.rU)(h, t.id, n, m, {
        burst: s
      }))
    }), en(this, "handleEnter", e => {
      let {
        emoji: t,
        message: n,
        type: i,
        reduceMotion: s,
        animateEmoji: a,
        autoUnfurlReactionTooltip: l
      } = this.props, o = i === H.O.BURST;
      o && !this.isReactionEventActive && !s && a && (0, j.T6)({
        channelId: n.getChannelId(),
        messageId: n.id,
        emoji: t,
        key: V.I.HOVER
      }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : l ? 200 : 500, this.showTooltip, !1)
    }), en(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = !0, this.handleShowTooltip()
    }), en(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), L.Z.addChangeListener(this.updateTooltipText))
    }), en(this, "showTooltip", () => {
      this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
    }), en(this, "handleLeave", () => {
      this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), L.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
    }), en(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: !1
      }), this.hasShownTooltip && B.default.track(J.rMx.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), en(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: n
      } = this.props;
      return ea(e, t, n)
    }), en(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: n
      } = this.props, i = (0, K.g)(e, t, n), s = this.isKeyboardNavigation ? i : (0, K.g)(e, t, n, J.dG4);
      this.setState({
        tooltipText: s,
        tooltipTextAria: i,
        shouldShowTooltip: null != s && "" !== s
      })
    }), en(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: n,
        isLurking: i
      } = this.props, a = b.Z.getChannel(n.getChannelId()), l = P.Z.getGuild(null == a ? void 0 : a.getGuildId());
      return i && null != l ? (0, s.jsx)(R.Z, {
        ctaRef: this.ctaRef,
        type: R.s.REACTIONS,
        guild: l,
        closePopout: t
      }) : (0, s.jsx)(s.Fragment, {})
    }), en(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, s.jsx)(eu, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), en(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: n,
        me_burst: i,
        isBurstReaction: a = !1
      } = this.props, {
        tooltipText: l
      } = this.state, r = n => {
        let i = b.Z.getChannel(t.getChannelId());
        if (null != i) this.handleLeave(), es(i, t, {
          emoji: e,
          reactionType: a ? H.O.BURST : H.O.NORMAL
        })
      }, u = "string" == typeof l ? "" === l.trim() : null == l, c = () => u || null == l ? null : (0, s.jsx)(m.Text, {
        variant: "text-sm/normal",
        className: et.reactionTooltipText,
        "aria-label": l,
        children: l
      });
      return n === H.O.BURST ? (0, s.jsxs)("div", {
        className: et.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, s.jsx)(m.Clickable, {
          className: et.burstReactionTooltipInner,
          onClick: r,
          children: (0, s.jsxs)("div", {
            className: et.burstReactionTooltipMessage,
            children: [(0, s.jsx)(p.Z, {
              className: et.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), c()]
          })
        }), (() => {
          let e = U.default.getCurrentUser();
          if (i) return (0, s.jsxs)("div", {
            className: o()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer),
            children: [(0, F.I5)(e) && (0, s.jsx)(m.NitroWheelIcon, {
              size: "md",
              className: et.burstReactionTooltipNitroIcon,
              color: D.JX.PREMIUM_TIER_2
            }), (0, s.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: et.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: X.Z.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
            })]
          });
          if (this.userCanBurstReact()) return (0, s.jsxs)("div", {
            className: o()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer, et.burstReactionTooltipPromptClickable),
            children: [(0, s.jsx)(m.NitroWheelIcon, {
              size: "md",
              className: et.burstReactionTooltipNitroIcon,
              color: D.JX.PREMIUM_TIER_2
            }), (0, s.jsx)(m.Clickable, {
              onClick: this.handleClick,
              children: (0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                className: et.reactionTooltipText,
                "aria-label": "super reaction tooltip cta",
                children: X.Z.Messages.SUPER_REACTION_TOOLTIP_CTA
              })
            })]
          });
          if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, s.jsx)("div", {
            className: o()(et.burstReactionTooltipPrompt, et.burstReactionTooltipSpacer),
            children: (0, s.jsxs)("div", {
              children: [(0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                "aria-label": "super reaction tooltip upsell",
                children: X.Z.Messages.SUPER_REACTION_TOOLTIP_UPSELL
              }), (0, s.jsx)(_.Z, {
                subscriptionTier: q.Si.TIER_2,
                buttonText: X.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: et.burstReactionTooltipUpsellCta,
                onClick: e => e.stopPropagation()
              })]
            })
          });
          return null
        })(), this.renderEmojiDetails()]
      }) : (0, s.jsxs)("div", {
        className: et.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, s.jsx)(m.Clickable, {
          onClick: r,
          children: (0, s.jsxs)("div", {
            className: et.reactionTooltipInner,
            children: [(0, s.jsx)(p.Z, {
              className: et.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSize
            }), c()]
          })
        }), this.renderEmojiDetails()]
      })
    }), en(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), en(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let n = b.Z.getChannel(e.getChannelId()),
        i = P.Z.getGuild(null == n ? void 0 : n.getGuildId());
      null != i && (0, C.hk)(i.id)
    }), en(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), en(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: n
      } = this.props, i = U.default.getCurrentUser(), s = b.Z.getChannel(t.getChannelId()), a = n === H.O.BURST, l = (0, F.I5)(i), o = a ? q.cd.EMOJI_IN_BURST_REACTION_HOVER : q.cd.EMOJI_IN_REACTION_HOVER;
      a && !this.userCanBurstReact() && !l && (o = q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), f.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
        type: o,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), a && null != s && !l && !this.userCanBurstReact() && B.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
        type: q.cd.BURST_REACTION_UPSELL,
        location: {
          page: (null == s ? void 0 : s.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
          section: (0, A.s4)(s),
          object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
en(el, "defaultProps", {
  emojiSize: "jumbo"
});
let eo = a.memo(e => {
    let {
      type: t,
      burst_colors: n,
      message: i,
      emoji: a
    } = e, l = t === H.O.BURST, o = (0, N.v)(l && null != n ? n : []), r = (0, d.e7)([V.Z], () => void 0 !== V.Z.getEffectForEmojiId(i.getChannelId(), i.id, a)), u = (0, d.e7)([T.Z], () => T.Z.useReducedMotion), c = M.Yk.useSetting(), h = U.default.getCurrentUser(), m = (0, F.I5)(h), p = (0, d.e7)([V.Z], () => V.Z.getReactionPickerAnimation(i.id, a.name, a.id)), g = l && (r || null != p);
    return (0, s.jsx)(el, {
      ...e,
      colors: o,
      isBurstReaction: l,
      hideEmoji: g,
      userHasPremium: m,
      reduceMotion: u,
      animateEmoji: c,
      animationStartPosition: p
    })
  }),
  er = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: i,
      hasJoinedExpressionSourceGuild: a,
      onClose: l,
      popoutData: o,
      currentGuildId: r,
      nonce: u
    } = e;
    (0, S.u)({
      emojiId: n,
      currentGuildId: r,
      popoutData: o,
      emojiSourceGuildId: null == i ? void 0 : i.id,
      nonce: u
    });
    let c = null !== (t = null == i ? void 0 : i.isDiscoverable()) && void 0 !== t && t,
      d = null !== i && c;
    return (0, s.jsx)(s.Fragment, {
      children: d ? null == i ? null : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: $.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, s.jsx)(W.Oe, {
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: a,
            isDisplayingJoinGuildButtonInPopout: o.type === G.$.JOIN_GUILD
          })
        }), (0, s.jsx)(W.n_, {
          emojiId: n,
          expressionSourceGuild: i,
          hasJoinedEmojiSourceGuild: a,
          onClose: l,
          popoutData: o,
          isDisplayingButtonInTopSection: !1
        })]
      }) : (0, s.jsx)(m.Text, {
        variant: "text-sm/normal",
        "aria-label": o.type,
        children: o.emojiDescription
      })
    })
  },
  eu = e => {
    var t;
    let {
      emojiId: n,
      refreshPositionKey: i,
      onClose: l,
      nonce: r
    } = e, {
      joinedEmojiSourceGuild: u
    } = (0, d.cj)([E.Z, P.Z], () => {
      let e = E.Z.getCustomEmojiById(n);
      return {
        joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.B.GUILD ? P.Z.getGuild(null == e ? void 0 : e.guildId) : void 0
      }
    }), [c, h] = a.useState(void 0), [p, g] = a.useState(!1), [T, f] = a.useState(!1), [v, N] = a.useState(!1), S = null != u, C = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, R = y.Z.getGuildId(), Z = null != R && (R === (null == c ? void 0 : c.id) || R === (null == u ? void 0 : u.id)), _ = U.default.getCurrentUser(), O = (0, G.a)({
      isPremium: F.ZP.isPremium(_),
      hasJoinedEmojiSourceGuild: S,
      isDiscoverable: C,
      emojiComesFromCurrentGuild: Z,
      isUnusableRoleSubscriptionEmoji: !1,
      userIsRoleSubscriber: !1,
      isRoleSubscriptionEmoji: !1,
      shouldHideRoleSubscriptionCTA: !1
    });
    a.useEffect(() => {
      if (!!p && !v)(async () => {
        i(), f(!0), h(await x.Z.getGuildFromEmojiId(n)), f(!1), N(!0), i()
      })()
    }, [n, p, v, i]);
    if (S) return null;
    let j = () => {
        g(!p)
      },
      A = p && void 0 !== c;
    return (0, s.jsxs)("div", {
      children: [A ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: $.reactionEmojiDetailsDivider
        }), null != O.emojiDescription && O.type !== G.$.UNAVAILABLE && (0, s.jsx)(m.Text, {
          variant: "text-sm/normal",
          "aria-label": O.type,
          children: O.emojiDescription
        })]
      }) : (() => {
        let e = X.Z.Messages.INVENTORY_EMOJI_DETAILS_V2;
        return (0, s.jsxs)(m.Clickable, {
          onClick: j,
          className: $.reactionEmojiDetailsClickable,
          children: [(0, s.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, s.jsx)(m.ChevronSmallDownIcon, {
            size: "xs",
            color: "currentColor",
            className: o()($.reactionEmojiDetailsArrow, {
              [$.reactionEmojiDetailsArrowCollapsed]: !p
            })
          })]
        })
      })(), T ? (0, s.jsx)(z.SE, {
        className: $.emojiDetailsLoader
      }) : A && (0, s.jsx)(er, {
        emojiId: n,
        expressionSourceGuild: c,
        hasJoinedExpressionSourceGuild: S,
        onClose: l,
        popoutData: O,
        currentGuildId: R,
        nonce: r
      })]
    })
  }