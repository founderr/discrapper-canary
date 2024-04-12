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
  r = n("874137"),
  o = n("372113"),
  u = n("206044"),
  d = n("21029"),
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
  } = E(), p = (0, i.useIsQuestExpired)(t);
  return (0, s.jsx)(r.QuestContentImpressionTracker, {
    questId: t.id,
    questContent: n,
    children: e => (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)("div", {
        ref: t => {
          e.current = t, I.current = t
        },
        className: c.questsCard,
        onFocus: _,
        onMouseEnter: _,
        onBlur: T,
        onMouseLeave: T,
        children: [(0, s.jsx)(u.default, {
          isFocused: l,
          isQuestExpired: p,
          quest: t,
          location: n,
          size: m
        }), (0, s.jsx)(o.default, {
          quest: t,
          isQuestExpired: p,
          location: n,
          size: m
        })]
      }), !p && (0, s.jsx)(d.default, {
        quest: t,
        location: n
      })]
    })
  })
}