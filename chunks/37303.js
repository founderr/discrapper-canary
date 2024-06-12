"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return p
  },
  QuestsCardWrapper: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("686777"),
  o = n("113434"),
  u = n("569984"),
  d = n("497505"),
  c = n("602667"),
  f = n("87894"),
  E = n("372113"),
  _ = n("206044"),
  m = n("266843"),
  T = n("46140"),
  I = n("598762");

function h(e) {
  let {
    questId: t,
    ...n
  } = e, a = (0, i.useStateFromStores)([u.default], () => u.default.getQuest(t));
  if (null == a) return null;
  {
    let e = {
      quest: a,
      ...n
    };
    return (0, s.jsx)(p, {
      ...e
    })
  }
}

function p(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: i,
    contentPosition: u
  } = e, [h, p] = a.useState(!1), N = a.useCallback(() => p(!0), []), S = a.useCallback(() => p(!1), []), C = (0, o.useIsQuestExpired)(t), {
    containerRef: g,
    size: A,
    height: M
  } = (0, m.useQuestCardSize)([t]), R = (0, r.useIsEligibleForConcurrentQuests)({
    location: T.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: v,
    isAnimating: O,
    isExpanded: x,
    toggleExpanded: L
  } = (0, m.useQuestCardAnimation)({
    initiallyExpanded: !R || i || (0, f.shouldQuestBeInitiallyExpanded)({
      location: n,
      quest: t
    })
  }), D = null != M ? M : f.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(c.QuestContentImpressionTrackerWeb, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: u,
    trackGuildAndChannelMetadata: n === d.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === d.QuestContent.QUESTS_EMBED ? void 0 : v.to({
            range: [0, 1],
            output: [f.QUESTS_CARD_COLLAPSED_HEIGHT_PX, D]
          })
        },
        ref: t => {
          e.current = t, g.current = t
        },
        className: I.questsCard,
        onFocus: N,
        onMouseEnter: N,
        onBlur: S,
        onMouseLeave: S,
        children: [(0, s.jsx)(_.default, {
          isFocused: h,
          isQuestExpired: C,
          location: n,
          quest: t,
          size: A,
          expansionSpring: v,
          isAnimating: O,
          isExpanded: x,
          isInConcurrentQuestExperiment: R,
          contentPosition: u,
          toggleExpanded: L
        }), (0, s.jsx)(E.default, {
          quest: t,
          isQuestExpired: C,
          location: n,
          size: A,
          isFocused: h,
          isExpanded: x,
          isAnimating: O,
          contentPosition: u
        })]
      })
    })
  })
}