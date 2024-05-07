"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var n = s("900015"),
  i = s("481060"),
  E = s("231467"),
  l = s("689938"),
  _ = s("599666");

function r(e) {
  let {
    traits: t,
    traitsToHighlight: s
  } = e;
  return (0, a.jsxs)("div", {
    className: _.traitsContainer,
    children: [(0, a.jsxs)("div", {
      className: _.tagsCount,
      children: [(0, a.jsx)(n.TagsIcon, {
        height: 12,
        width: 12,
        className: _.tags
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: l.default.Messages.CLAN_SETUP_NUM_TRAITS.format({
          n: t.length
        })
      })]
    }), (0, a.jsx)(E.ClanDiscoveryCardTraits, {
      traits: t,
      traitsToHighlight: s,
      expanded: !0
    })]
  })
}