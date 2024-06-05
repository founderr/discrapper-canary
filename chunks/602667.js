"use strict";
n.r(t), n.d(t, {
  QuestContentImpressionTrackerWeb: function() {
    return c
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("434650"),
  o = n("110924"),
  l = n("451478"),
  u = n("915750");
let d = e => {
    let [t, n] = r.useState(!1), i = null != e ? e : t, s = i !== (0, o.default)(i);
    return {
      visible: i,
      visibleChanged: s,
      reference: (0, a.useIsVisible)(e => n(e), .5)
    }
  },
  _ = () => {
    let e = (0, s.useStateFromStores)([l.default], () => l.default.isFocused()),
      t = e !== (0, o.default)(e);
    return {
      focused: e,
      focusedChanged: t
    }
  };

function c(e) {
  let {
    focused: t,
    focusedChanged: n
  } = _(), {
    visible: s,
    visibleChanged: a,
    reference: o
  } = d(e.overrideVisibility), l = {
    ...e,
    focused: t,
    focusedChanged: n,
    visible: s,
    visibleChanged: a,
    reference: o,
    impression: r.useRef(null)
  };
  return (0, i.jsx)(u.QuestContentImpressionTrackerInner, {
    ...l
  })
}