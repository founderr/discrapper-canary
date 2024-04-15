"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return f
  },
  useQuestCardSize: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("393238"),
  i = n("113434"),
  r = n("497505"),
  o = n("874137"),
  u = n("372113"),
  d = n("206044"),
  c = n("25269");

function E() {
  let {
    ref: e,
    width: t
  } = (0, l.default)();
  return {
    containerRef: e,
    size: a.useMemo(() => null == t || t > 460 ? "lg" : t > 280 ? "sm" : "xs", [t])
  }
}
let f = e => {
  let {
    quest: t,
    location: n
  } = e, [l, f] = a.useState(!1), _ = a.useCallback(() => f(!0), []), T = a.useCallback(() => f(!1), []), {
    containerRef: I,
    size: m
  } = E(), N = (0, i.useIsQuestExpired)(t);
  return (0, s.jsx)(o.QuestContentImpressionTracker, {
    questId: t.id,
    questContent: n,
    trackGuildAndChannelMetadata: n === r.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)("div", {
        ref: t => {
          e.current = t, I.current = t
        },
        className: c.questsCard,
        onFocus: _,
        onMouseEnter: _,
        onBlur: T,
        onMouseLeave: T,
        children: [(0, s.jsx)(d.default, {
          isFocused: l,
          isQuestExpired: N,
          location: n,
          quest: t,
          size: m
        }), (0, s.jsx)(u.default, {
          isFocused: l,
          isQuestExpired: N,
          location: n,
          quest: t,
          size: m
        })]
      })
    })
  })
}