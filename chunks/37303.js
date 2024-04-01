"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return E
  },
  useQuestCardSize: function() {
    return c
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("393238"),
  i = n("874137"),
  r = n("372113"),
  o = n("206044"),
  u = n("21029"),
  d = n("25269");

function c() {
  let {
    ref: e,
    width: t
  } = (0, a.default)();
  return {
    containerRef: e,
    size: l.useMemo(() => null == t || t > 460 ? "lg" : t > 280 ? "sm" : "xs", [t])
  }
}
let E = e => {
  let {
    quest: t,
    location: n
  } = e, [a, E] = l.useState(!1), f = l.useCallback(() => E(!0), []), _ = l.useCallback(() => E(!1), []), {
    containerRef: T,
    size: I
  } = c();
  return (0, s.jsx)(i.QuestContentImpressionTracker, {
    questId: t.id,
    questContent: n,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)("div", {
        ref: t => {
          e.current = t, T.current = t
        },
        className: d.questsCard,
        onFocus: f,
        onMouseEnter: f,
        onBlur: _,
        onMouseLeave: _,
        children: [(0, s.jsx)(o.default, {
          isFocused: a,
          quest: t,
          location: n,
          size: I
        }), (0, s.jsx)(r.default, {
          quest: t,
          location: n,
          size: I
        }), (0, s.jsx)(u.default, {
          quest: t,
          location: n
        })]
      })
    })
  })
}