"use strict";
n.r(t), n("47120"), n("653041");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("215569"),
  o = n("481060"),
  u = n("566006"),
  d = n("60174"),
  c = n("453687"),
  E = n("434624"),
  f = n("287151"),
  _ = n("689938"),
  T = n("858313"),
  I = n("601064");
let m = (e, t) => null == e && null == t || e === t,
  N = (e, t) => e.findIndex(e => m(e.emoji.id, null == t ? void 0 : t.id) && m(e.emoji.name, null == t ? void 0 : t.name)),
  p = (e, t) => {
    if (null == t) return e;
    let n = N(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class S extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let n = e.message.reactions.length;
    return 0 === t.reactionsCount && n > 0 ? {
      disableTransitionAppear: !1,
      reactionsCount: n
    } : t.reactionsCount !== n ? {
      reactionsCount: n
    } : null
  }
  render() {
    let {
      message: e,
      disableReactionCreates: t,
      disableReactionUpdates: n,
      isLurking: a,
      isGuest: l,
      isPendingMember: m,
      isForumToolbar: N,
      channel: p,
      className: S,
      forceAddReactions: C,
      reactionClassName: A,
      useChatFontScaling: h,
      forceHideReactionCreates: g,
      remainingReactions: M,
      combinedReactions: O,
      visibleReactionsCount: R
    } = this.props, {
      disableTransitionAppear: v
    } = this.state, L = h ? I : T, P = R > 0;
    return P || C ? (0, s.jsxs)(r.TransitionGroup, {
      component: "div",
      className: i()(L.reactions, S),
      transitionAppear: !v,
      role: "group",
      transitionLeave: !1,
      id: (0, c.getMessageReactionsId)(e),
      onMouseEnter: () => this.setState({
        isHovered: !0
      }),
      onMouseLeave: () => this.setState({
        isHovered: !1
      }),
      children: [(0, s.jsx)(E.MessageReactionsGroupWrapper, {
        reactions: O,
        message: e,
        readOnly: n,
        isLurking: a,
        isGuest: l,
        isPendingMember: m,
        isForumToolbar: N,
        useChatFontScaling: h,
        className: A
      }), M > 0 && (0, s.jsx)(o.Clickable, {
        onClick: t => {
          t.stopPropagation(), (0, f.showReactionsModal)(p, e)
        },
        className: i()(L.reaction, A, L.remainingReactions),
        "aria-label": _.default.Messages.ADD_REACTION,
        children: (0, s.jsxs)(o.Text, {
          className: L.reactionInner,
          variant: "text-sm/normal",
          children: ["+", M]
        })
      }), !t && !g && (0, s.jsx)(d.ButtonAddReaction, {
        type: u.ReactionTypes.NORMAL,
        message: e,
        channel: p,
        useChatFontScaling: h,
        isHovered: this.state.isHovered,
        className: i()({
          [L.forceShow]: C && !P,
          [L.forceShowLook]: C
        })
      })]
    }) : null
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "state", s = {
      disableTransitionAppear: !0,
      reactionsCount: this.props.message.reactions.length,
      isHovered: !1
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.default = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: l
  } = e, {
    combinedReactions: i,
    remainingReactions: r,
    visibleReactionsCount: o
  } = a.useMemo(() => {
    let e = [],
      s = p(t.reactions, l),
      a = null != n && n < s.length ? s.slice(0, n) : s,
      i = s.length - a.length,
      r = s.length;
    return a.forEach(t => {
      t.burst_count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.BURST
      }), t.count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.NORMAL
      }), null != t.me_vote && --r
    }), {
      combinedReactions: e,
      visibleReactionsCount: r,
      remainingReactions: i
    }
  }, [l, n, t.reactions]);
  return (0, s.jsx)(S, {
    ...e,
    visibleReactionsCount: o,
    combinedReactions: i,
    remainingReactions: r
  })
}