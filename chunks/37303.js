n.d(t, {
  D: function() {
    return h
  },
  Z: function() {
    return C
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(920906),
  a = n(442837),
  r = n(686777),
  o = n(113434),
  c = n(569984),
  u = n(497505),
  d = n(602667),
  E = n(87894),
  _ = n(372113),
  I = n(206044),
  T = n(266843),
  m = n(46140),
  N = n(441468);

function h(e) {
  let {
    questId: t,
    ...n
  } = e, i = (0, a.e7)([c.Z], () => c.Z.getQuest(t));
  if (null == i) return null;
  {
    let e = {
      quest: i,
      ...n
    };
    return (0, s.jsx)(C, {
      ...e
    })
  }
}

function C(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: a,
    contentPosition: c
  } = e, [h, C] = i.useState(!1), S = i.useCallback(() => C(!0), []), A = i.useCallback(() => C(!1), []), g = (0, o.tP)(t), {
    containerRef: p,
    size: f,
    height: R
  } = (0, T.h)([t]), O = (0, r.q)({
    location: m.dr.QUESTS_CARD
  }), {
    expansionSpring: M,
    isAnimating: x,
    isExpanded: v,
    toggleExpanded: L
  } = (0, T.O)({
    initiallyExpanded: !O || a || (0, E.iM)({
      location: n,
      quest: t
    })
  }), Z = null != R ? R : E.U0;
  return (0, s.jsx)(d.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: c,
    trackGuildAndChannelMetadata: n === u.jn.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === u.jn.QUESTS_EMBED ? void 0 : M.to({
            range: [0, 1],
            output: [E.DJ, Z]
          })
        },
        ref: t => {
          e.current = t, p.current = t
        },
        className: N.questsCard,
        onFocus: S,
        onMouseEnter: S,
        onBlur: A,
        onMouseLeave: A,
        children: [(0, s.jsx)(I.Z, {
          isFocused: h,
          isQuestExpired: g,
          location: n,
          quest: t,
          size: f,
          expansionSpring: M,
          isAnimating: x,
          isExpanded: v,
          isInConcurrentQuestExperiment: O,
          contentPosition: c,
          toggleExpanded: L
        }), (0, s.jsx)(_.Z, {
          quest: t,
          isQuestExpired: g,
          location: n,
          size: f,
          isFocused: h,
          isExpanded: v,
          isAnimating: x,
          contentPosition: c
        })]
      })
    })
  })
}