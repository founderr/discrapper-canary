"use strict";
n.r(t), n.d(t, {
  useQuestCardAnimation: function() {
    return d
  },
  useQuestCardSize: function() {
    return u
  }
}), n("47120");
var s = n("470079"),
  a = n("718017"),
  l = n("442837"),
  i = n("393238"),
  r = n("607070"),
  o = n("87894");

function u() {
  let e = s.useRef(null),
    [t, n] = s.useState("lg"),
    [a, l] = s.useState(void 0);
  return (0, i.useDimensionsEffect)(e, e => {
    let {
      width: t,
      scrollHeight: s
    } = e;
    return (l(s), null == t || t > o.QUESTS_CARD_SMALL_BREAKPOINT_PX) ? n("lg") : t > o.QUESTS_CARD_EXTRA_SMALL_BREAKPOINT_PX ? n("sm") : n("xs")
  }), {
    containerRef: e,
    size: t,
    height: a
  }
}

function d(e) {
  let {
    initiallyExpanded: t
  } = e, [n, i] = s.useState(t), [o, u] = s.useState(!1), d = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), c = s.useCallback(() => {
    i(e => !e), u(!0)
  }, []), {
    expansionSpring: f
  } = (0, a.useSpring)({
    expansionSpring: n ? 1 : 0,
    config: {
      tension: 450,
      friction: 45
    },
    immediate: d,
    onRest: () => u(!1)
  });
  return {
    expansionSpring: f,
    isAnimating: o,
    isExpanded: n,
    toggleExpanded: c
  }
}