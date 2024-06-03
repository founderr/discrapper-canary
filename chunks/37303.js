"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return p
  },
  QuestsCardWrapper: function() {
    return N
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
  c = n("874137"),
  E = n("87894"),
  f = n("372113"),
  _ = n("206044"),
  T = n("266843"),
  m = n("46140"),
  I = n("598762");

function N(e) {
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
  } = e, [N, p] = a.useState(!1), S = a.useCallback(() => p(!0), []), C = a.useCallback(() => p(!1), []), A = (0, o.useIsQuestExpired)(t), {
    containerRef: h,
    size: g,
    height: M
  } = (0, T.useQuestCardSize)([t]), O = (0, r.useIsEligibleForConcurrentQuests)({
    location: m.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: R,
    isAnimating: v,
    isExpanded: L,
    toggleExpanded: x
  } = (0, T.useQuestCardAnimation)({
    initiallyExpanded: !O || i || (0, E.shouldQuestBeInitiallyExpanded)({
      location: n,
      quest: t
    })
  }), P = null != M ? M : E.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(c.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: u,
    trackGuildAndChannelMetadata: n === d.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === d.QuestContent.QUESTS_EMBED ? void 0 : R.to({
            range: [0, 1],
            output: [E.QUESTS_CARD_COLLAPSED_HEIGHT_PX, P]
          })
        },
        ref: t => {
          e.current = t, h.current = t
        },
        className: I.questsCard,
        onFocus: S,
        onMouseEnter: S,
        onBlur: C,
        onMouseLeave: C,
        children: [(0, s.jsx)(_.default, {
          isFocused: N,
          isQuestExpired: A,
          location: n,
          quest: t,
          size: g,
          expansionSpring: R,
          isAnimating: v,
          isExpanded: L,
          isInConcurrentQuestExperiment: O,
          contentPosition: u,
          toggleExpanded: x
        }), (0, s.jsx)(f.default, {
          quest: t,
          isQuestExpired: A,
          location: n,
          size: g,
          isFocused: N,
          isExpanded: L,
          isAnimating: v,
          contentPosition: u
        })]
      })
    })
  })
}