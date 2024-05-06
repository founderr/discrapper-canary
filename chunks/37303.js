"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return T
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("718017"),
  i = n("686777"),
  r = n("113434"),
  o = n("497505"),
  u = n("874137"),
  d = n("87894"),
  c = n("372113"),
  f = n("206044"),
  E = n("266843"),
  _ = n("46140"),
  m = n("714153");
let T = e => {
  let {
    quest: t,
    location: n
  } = e, [T, I] = a.useState(!1), p = a.useCallback(() => I(!0), []), h = a.useCallback(() => I(!1), []), N = (0, r.useIsQuestExpired)(t), {
    containerRef: S,
    size: C,
    height: A
  } = (0, E.useQuestCardSize)([t]), g = (0, i.useIsEligibleForConcurrentQuests)({
    location: _.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: M,
    isAnimating: R,
    isExpanded: v,
    toggleExpanded: O
  } = (0, E.useQuestCardAnimation)({
    initiallyExpanded: !g || (0, d.shouldQuestBeInitiallyExpanded)({
      location: n,
      quest: t
    })
  }), x = null != A ? A : d.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(u.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    trackGuildAndChannelMetadata: n === o.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === o.QuestContent.QUESTS_EMBED ? void 0 : M.to({
            range: [0, 1],
            output: [d.QUESTS_CARD_COLLAPSED_HEIGHT_PX, x]
          })
        },
        ref: t => {
          e.current = t, S.current = t
        },
        className: m.questsCard,
        onFocus: p,
        onMouseEnter: p,
        onBlur: h,
        onMouseLeave: h,
        children: [(0, s.jsx)(f.default, {
          isFocused: T,
          isQuestExpired: N,
          location: n,
          quest: t,
          size: C,
          expansionSpring: M,
          isAnimating: R,
          isExpanded: v,
          isInConcurrentQuestExperiment: g,
          toggleExpanded: O
        }), (0, s.jsx)(c.default, {
          quest: t,
          isQuestExpired: N,
          location: n,
          size: C,
          isFocused: T,
          isExpanded: v,
          isAnimating: R
        })]
      })
    })
  })
}