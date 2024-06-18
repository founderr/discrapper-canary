"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(245561),
  o = n(873572),
  a = n(659101),
  l = n(689938),
  u = n(141454),
  _ = n(546136);

function c(e) {
  var t;
  let {
    user: n,
    guildId: c
  } = e, {
    botUpgraded: d,
    activeSubscriptionListing: E
  } = (0, o.Z)({
    user: n,
    guildId: c
  }), I = null == E ? void 0 : null === (t = E.sku_benefits) || void 0 === t ? void 0 : t.benefits;
  return null != c && d && null != I && 0 !== I.length ? (0, i.jsxs)(a.Z, {
    children: [(0, i.jsx)(r.Heading, {
      variant: "eyebrow",
      className: _.title,
      children: l.Z.Messages.BOT_PROFILE_BENEFITS_HEADING
    }), (0, i.jsx)("div", {
      className: u.benefitsContainer,
      children: I.map((e, t) => (0, i.jsx)(s.ZP, {
        showsDescription: !1,
        emojiContainerClassName: u.emojiContainer,
        nameTextVariant: "text-sm/normal",
        nameTextColor: "text-normal",
        benefit: e
      }, "".concat(e.name).concat(t)))
    })]
  }) : null
}