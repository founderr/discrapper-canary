n(47120), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(215569),
  o = n(481060),
  c = n(566006),
  u = n(60174),
  d = n(453687),
  E = n(434624),
  _ = n(287151),
  I = n(689938),
  T = n(704963),
  N = n(667671);
let m = (e, t) => null == e && null == t || e === t,
  h = (e, t) => e.findIndex(e => m(e.emoji.id, null == t ? void 0 : t.id) && m(e.emoji.name, null == t ? void 0 : t.name)),
  C = (e, t) => {
    if (null == t) return e;
    let n = h(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class S extends i.PureComponent {
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
      isLurking: i,
      isGuest: l,
      isPendingMember: m,
      isForumToolbar: h,
      channel: C,
      className: S,
      forceAddReactions: A,
      reactionClassName: p,
      useChatFontScaling: g,
      forceHideReactionCreates: f,
      remainingReactions: O,
      combinedReactions: R,
      visibleReactionsCount: M
    } = this.props, {
      disableTransitionAppear: x
    } = this.state, v = g ? N : T, L = M > 0;
    return L || A ? (0, s.jsxs)(r.W, {
      component: "div",
      className: a()(v.reactions, S),
      transitionAppear: !x,
      role: "group",
      transitionLeave: !1,
      id: (0, d.bY)(e),
      onMouseEnter: () => this.setState({
        isHovered: !0
      }),
      onMouseLeave: () => this.setState({
        isHovered: !1
      }),
      children: [(0, s.jsx)(E.l, {
        reactions: R,
        message: e,
        readOnly: n,
        isLurking: i,
        isGuest: l,
        isPendingMember: m,
        isForumToolbar: h,
        useChatFontScaling: g,
        className: p
      }), O > 0 && (0, s.jsx)(o.Clickable, {
        onClick: t => {
          t.stopPropagation(), (0, _.op)(C, e)
        },
        className: a()(v.reaction, p, v.remainingReactions),
        "aria-label": I.Z.Messages.ADD_REACTION,
        children: (0, s.jsxs)(o.Text, {
          className: v.reactionInner,
          variant: "text-sm/normal",
          children: ["+", O]
        })
      }), !t && !f && (0, s.jsx)(u.X, {
        type: c.O.NORMAL,
        message: e,
        channel: C,
        useChatFontScaling: g,
        isHovered: this.state.isHovered,
        className: a()({
          [v.forceShow]: A && !L,
          [v.forceShowLook]: A
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
t.Z = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: l
  } = e, {
    combinedReactions: a,
    remainingReactions: r,
    visibleReactionsCount: o
  } = i.useMemo(() => {
    let e = [],
      s = C(t.reactions, l),
      i = null != n && n < s.length ? s.slice(0, n) : s,
      a = s.length - i.length,
      r = s.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push({
        ...t,
        type: c.O.BURST
      }), t.count > 0 && e.push({
        ...t,
        type: c.O.NORMAL
      }), null != t.me_vote && --r
    }), {
      combinedReactions: e,
      visibleReactionsCount: r,
      remainingReactions: a
    }
  }, [l, n, t.reactions]);
  return (0, s.jsx)(S, {
    ...e,
    visibleReactionsCount: o,
    combinedReactions: a,
    remainingReactions: r
  })
}