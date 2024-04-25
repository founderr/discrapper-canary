"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return _
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("718017"),
  i = n("113434"),
  r = n("497505"),
  o = n("874137"),
  u = n("87894"),
  d = n("372113"),
  c = n("206044"),
  f = n("266843"),
  E = n("25269");
let _ = e => {
  let {
    quest: t,
    location: n
  } = e, [_, m] = a.useState(!1), T = a.useCallback(() => m(!0), []), I = a.useCallback(() => m(!1), []), p = (0, i.useIsQuestExpired)(t), {
    containerRef: h,
    size: N,
    height: S
  } = (0, f.useQuestCardSize)(), C = u.QUESTS_CARD_DISABLE_ANIMATION || n !== r.QuestContent.QUEST_INVENTORY_CARD, {
    expansionSpring: A,
    isAnimating: g,
    isExpanded: M,
    toggleExpanded: R
  } = (0, f.useQuestCardAnimation)({
    initiallyExpanded: C
  }), v = null != S ? S : u.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(o.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    trackGuildAndChannelMetadata: n === r.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === r.QuestContent.QUESTS_EMBED ? void 0 : A.to({
            range: [0, 1],
            output: [u.QUESTS_CARD_COLLAPSED_HEIGHT_PX, v]
          })
        },
        ref: t => {
          e.current = t, h.current = t
        },
        className: E.questsCard,
        onFocus: T,
        onMouseEnter: T,
        onBlur: I,
        onMouseLeave: I,
        children: [(0, s.jsx)(c.default, {
          isFocused: _,
          isQuestExpired: p,
          location: n,
          quest: t,
          size: N,
          expansionSpring: A,
          isAnimating: g,
          isExpanded: M,
          toggleExpanded: R
        }), (0, s.jsx)(d.default, {
          quest: t,
          isQuestExpired: p,
          location: n,
          size: N,
          isFocused: _,
          isExpanded: M,
          isAnimating: g
        })]
      })
    })
  })
}