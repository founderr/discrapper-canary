"use strict";
n.r(t), n.d(t, {
  ButtonAddReaction: function() {
    return L
  }
}), n("789020"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("954955"),
  o = n.n(r),
  u = n("507274"),
  d = n("481060"),
  c = n("130402"),
  f = n("466794"),
  E = n("659215"),
  _ = n("222677"),
  m = n("995774"),
  T = n("931651"),
  I = n("594174"),
  p = n("250690"),
  h = n("506917"),
  N = n("630388"),
  S = n("74538"),
  C = n("566006"),
  A = n("981631"),
  g = n("185923"),
  M = n("474936"),
  R = n("689938"),
  v = n("254192"),
  O = n("316616");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends a.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: a,
      useChatFontScaling: l
    } = this.props, {
      isReactionPickerActive: r
    } = this.state, o = t.state === A.MessageStates.SENDING, u = e === C.ReactionTypes.BURST;
    if (o || (0, N.hasFlag)(t.flags, A.MessageFlags.EPHEMERAL)) return null;
    let E = I.default.getCurrentUser(),
      _ = (0, S.isPremium)(E),
      m = u ? R.default.Messages.ADD_BURST_REACTION : R.default.Messages.ADD_REACTION;
    !_ && u && (m = (0, s.jsx)(f.NitroTooltipLabel, {
      tooltipText: R.default.Messages.ADD_BURST_REACTION
    }));
    let T = l ? O : v;
    return (0, s.jsx)(d.Popout, {
      shouldShow: r,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, t) => {
        let {
          isShown: l
        } = t;
        return (0, s.jsx)(d.TooltipContainer, {
          text: m,
          color: d.TooltipColors.PRIMARY,
          "aria-label": u ? R.default.Messages.ADD_BURST_REACTION : R.default.Messages.ADD_REACTION,
          tooltipClassName: T.__invalid_addReactionTooltip,
          children: (0, s.jsxs)(d.Clickable, {
            ...e,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutMouseEntered),
            onFocus: () => (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.AddReactionPopoutFocused),
            className: i()(T.reactionBtn, {
              [T.active]: l
            }, n),
            children: [u ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(h.default, {
                className: T.icon
              })
            }) : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(p.default, {
                className: T.icon
              })
            }), a]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      isReactionPickerActive: !1
    }), x(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: s,
        isForumToolbar: a
      } = this.props;
      (0, _.addReaction)(n.id, s.id, (0, m.toReactionEmoji)(e), a ? _.ReactionLocations.FORUM_TOOLBAR : _.ReactionLocations.MESSAGE, {
        burst: t
      })
    }), x(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), x(this, "handleAddReactionClick", e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let s = I.default.getCurrentUser();
      t === C.ReactionTypes.BURST && !(0, S.isPremium)(s) && (0, E.openBurstReactionsUpsellModal)({
        analytics: {
          type: M.PremiumUpsellTypes.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
          section: (0, m.getBurstAnalyticsSection)(n),
          object: A.AnalyticsObjects.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }), x(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: a,
        message: l
      } = this.props, i = {
        openPopoutType: "message_reaction_emoji_picker",
        ...n === C.ReactionTypes.BURST && {
          openPopoutType: "message_super_reaction_emoji_picker",
          page: null != a.getGuildId() ? A.AnalyticsPages.GUILD_CHANNEL : A.AnalyticsPages.DM_CHANNEL,
          section: (0, m.getBurstAnalyticsSection)(a),
          object: A.AnalyticsObjects.REACTION_RAIL
        }
      }, r = (0, s.jsx)(T.ReactionPicker, {
        closePopout: t,
        channel: a,
        onSelectEmoji: (e, n, s) => {
          this.onAddReaction(e, s), n && (s ? o()(t, 150)() : t())
        },
        analyticsOverride: i,
        messageId: l.id
      });
      return (0, s.jsx)(u.DialogContext.Consumer, {
        children: e => e ? (0, s.jsx)(d.Dialog, {
          "aria-label": R.default.Messages.REACTION_PICKER,
          children: r
        }) : r
      })
    })
  }
}