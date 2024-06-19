n.d(t, {
  X: function() {
    return x
  }
}), n(789020), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(507274),
  u = n(481060),
  d = n(130402),
  E = n(466794),
  _ = n(659215),
  I = n(222677),
  T = n(995774),
  N = n(931651),
  m = n(594174),
  h = n(630388),
  C = n(74538),
  S = n(566006),
  A = n(981631),
  p = n(185923),
  g = n(474936),
  f = n(689938),
  O = n(704963),
  R = n(667671);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class x extends i.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: i,
      useChatFontScaling: l
    } = this.props, {
      isReactionPickerActive: r
    } = this.state, o = t.state === A.yb.SENDING, c = e === S.O.BURST;
    if (o || (0, h.yE)(t.flags, A.iLy.EPHEMERAL)) return null;
    let _ = m.default.getCurrentUser(),
      I = (0, C.I5)(_),
      T = c ? f.Z.Messages.ADD_BURST_REACTION : f.Z.Messages.ADD_REACTION;
    !I && c && (T = (0, s.jsx)(E.X, {
      tooltipText: f.Z.Messages.ADD_BURST_REACTION
    }));
    let N = l ? R : O;
    return (0, s.jsx)(u.Popout, {
      shouldShow: r,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, t) => {
        let {
          isShown: l
        } = t;
        return (0, s.jsx)(u.TooltipContainer, {
          text: T,
          color: u.TooltipColors.PRIMARY,
          "aria-label": c ? f.Z.Messages.ADD_BURST_REACTION : f.Z.Messages.ADD_REACTION,
          tooltipClassName: N.__invalid_addReactionTooltip,
          children: (0, s.jsxs)(u.Clickable, {
            ...e,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, d.x)(p.qR.AddReactionPopoutMouseEntered),
            onFocus: () => (0, d.x)(p.qR.AddReactionPopoutFocused),
            className: a()(N.reactionBtn, {
              [N.active]: l
            }, n),
            children: [c ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(u.SuperReactionIcon, {
                size: "sm",
                color: "currentColor",
                className: N.icon
              })
            }) : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(u.ReactionIcon, {
                size: "sm",
                color: "currentColor",
                className: N.icon
              })
            }), i]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      isReactionPickerActive: !1
    }), M(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: s,
        isForumToolbar: i
      } = this.props;
      (0, I.rU)(n.id, s.id, (0, T.g1)(e), i ? I.TW.FORUM_TOOLBAR : I.TW.MESSAGE, {
        burst: t
      })
    }), M(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), M(this, "handleAddReactionClick", e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let s = m.default.getCurrentUser();
      t === S.O.BURST && !(0, C.I5)(s) && (0, _.openBurstReactionsUpsellModal)({
        analytics: {
          type: g.cd.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? A.ZY5.GUILD_CHANNEL : A.ZY5.DM_CHANNEL,
          section: (0, T.s4)(n),
          object: A.qAy.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }), M(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: i,
        message: l
      } = this.props, a = {
        openPopoutType: "message_reaction_emoji_picker",
        ...n === S.O.BURST && {
          openPopoutType: "message_super_reaction_emoji_picker",
          page: null != i.getGuildId() ? A.ZY5.GUILD_CHANNEL : A.ZY5.DM_CHANNEL,
          section: (0, T.s4)(i),
          object: A.qAy.REACTION_RAIL
        }
      }, r = (0, s.jsx)(N.$, {
        closePopout: t,
        channel: i,
        onSelectEmoji: (e, n, s) => {
          this.onAddReaction(e, s), n && (s ? o()(t, 150)() : t())
        },
        analyticsOverride: a,
        messageId: l.id
      });
      return (0, s.jsx)(c.M.Consumer, {
        children: e => e ? (0, s.jsx)(u.Dialog, {
          "aria-label": f.Z.Messages.REACTION_PICKER,
          children: r
        }) : r
      })
    })
  }
}