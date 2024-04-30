"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("900015"),
  l = a("481060"),
  i = a("231467"),
  r = a("689938"),
  o = a("599666");

function u(e) {
  let {
    traits: t,
    traitsToHighlight: a
  } = e;
  return (0, n.jsxs)("div", {
    className: o.traitsContainer,
    children: [(0, n.jsxs)("div", {
      className: o.tagsCount,
      children: [(0, n.jsx)(s.TagsIcon, {
        height: 12,
        width: 12,
        className: o.tags
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: r.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
          n: t.length
        })
      })]
    }), (0, n.jsx)(i.ClanDiscoveryCardTraits, {
      traits: t,
      traitsToHighlight: a,
      expanded: !0
    })]
  })
}