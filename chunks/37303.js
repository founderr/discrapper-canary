"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return m
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("920906"),
  i = n("686777"),
  r = n("113434"),
  o = n("497505"),
  u = n("874137"),
  d = n("87894"),
  c = n("372113"),
  E = n("206044"),
  f = n("266843"),
  _ = n("46140"),
  T = n("598762");
let m = e => {
  let {
    quest: t,
    location: n,
    initiallyExpanded: m,
    contentPosition: I
  } = e, [N, p] = a.useState(!1), S = a.useCallback(() => p(!0), []), C = a.useCallback(() => p(!1), []), A = (0, r.useIsQuestExpired)(t), {
    containerRef: h,
    size: g,
    height: M
  } = (0, f.useQuestCardSize)([t]), O = (0, i.useIsEligibleForConcurrentQuests)({
    location: _.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: R,
    isAnimating: v,
    isExpanded: L,
    toggleExpanded: x
  } = (0, f.useQuestCardAnimation)({
    initiallyExpanded: !O || m || (0, d.shouldQuestBeInitiallyExpanded)({
      location: n,
      quest: t
    })
  }), P = null != M ? M : d.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(u.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: I,
    trackGuildAndChannelMetadata: n === o.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === o.QuestContent.QUESTS_EMBED ? void 0 : R.to({
            range: [0, 1],
            output: [d.QUESTS_CARD_COLLAPSED_HEIGHT_PX, P]
          })
        },
        ref: t => {
          e.current = t, h.current = t
        },
        className: T.questsCard,
        onFocus: S,
        onMouseEnter: S,
        onBlur: C,
        onMouseLeave: C,
        children: [(0, s.jsx)(E.default, {
          isFocused: N,
          isQuestExpired: A,
          location: n,
          quest: t,
          size: g,
          expansionSpring: R,
          isAnimating: v,
          isExpanded: L,
          isInConcurrentQuestExperiment: O,
          contentPosition: I,
          toggleExpanded: x
        }), (0, s.jsx)(c.default, {
          quest: t,
          isQuestExpired: A,
          location: n,
          size: g,
          isFocused: N,
          isExpanded: L,
          isAnimating: v,
          contentPosition: I
        })]
      })
    })
  })
}