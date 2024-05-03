"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var r = a("900015"),
  i = a("481060"),
  s = a("231467"),
  l = a("689938"),
  o = a("599666");

function c(e) {
  let {
    traits: t,
    traitsToHighlight: a
  } = e;
  return (0, n.jsxs)("div", {
    className: o.traitsContainer,
    children: [(0, n.jsxs)("div", {
      className: o.tagsCount,
      children: [(0, n.jsx)(r.TagsIcon, {
        height: 12,
        width: 12,
        className: o.tags
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: l.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
          n: t.length
        })
      })]
    }), (0, n.jsx)(s.ClanDiscoveryCardTraits, {
      traits: t,
      traitsToHighlight: a,
      expanded: !0
    })]
  })
}