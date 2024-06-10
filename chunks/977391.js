"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  generateMessageSpecs: function() {
    return d
  }
}), n("411104"), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("38371"),
  o = n("981631"),
  u = n("630033");

function d(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: a,
    attachments: l,
    fontSize: s,
    groupSpacing: u
  } = e;
  if (l > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(l));
  let d = s / o.Accessibility.FONT_SIZE_DEFAULT,
    c = t ? r.HEIGHT_COMPACT_MESSAGE_START : r.HEIGHT_COZY_MESSAGE_START,
    f = t ? r.HEIGHT_COMPACT_MESSAGE : r.HEIGHT_COZY_MESSAGE,
    h = 0,
    m = Array(n).fill(null).map(() => {
      let e = i().random(1, a);
      return h += u * d + c * d + (e - 1) * f * d, e
    }),
    p = m.map((e, t) => t),
    E = [];
  for (; E.length < l;) {
    let e = {
      width: i().random(140, 400),
      height: i().random(100, 320)
    };
    E.push([p.splice(i().random(0, p.length - 1), 1)[0], e]), h += e.height + r.HEIGHT_ATTACHMEMT_PADDING * d
  }
  return {
    messages: m,
    attachmentSpecs: E,
    totalHeight: h,
    groupSpacing: u
  }
}

function c(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: s,
    totalHeight: i,
    groupSpacing: o
  } = e;
  return l.useMemo(() => {
    let e = Array(n.length).fill(void 0);
    for (let [t, n] of s) e[t] = n;
    return (0, a.jsx)("div", {
      className: u.wrapper,
      style: {
        height: i
      },
      children: n.map((n, l) => (0, a.jsx)(r.default, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[l]
      }, l))
    })
  }, [t, n, s, i, o])
}