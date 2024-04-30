"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("900015"),
  l = n("481060"),
  i = n("231467"),
  r = n("689938"),
  o = n("599666");

function u(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e;
  return (0, a.jsxs)("div", {
    className: o.traitsContainer,
    children: [(0, a.jsxs)("div", {
      className: o.tagsCount,
      children: [(0, a.jsx)(s.TagsIcon, {
        height: 12,
        width: 12,
        className: o.tags
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: r.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
          n: t.length
        })
      })]
    }), (0, a.jsx)(i.ClanDiscoveryCardTraits, {
      traits: t,
      traitsToHighlight: n,
      expanded: !0
    })]
  })
}