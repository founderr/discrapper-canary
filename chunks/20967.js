n.d(t, {
  J: function() {
    return s
  },
  z: function() {
    return E
  }
});
var i, s, l = n(735250);
n(470079);
var a = n(990547),
  r = n(481060),
  o = n(213609),
  c = n(689938),
  u = n(936919),
  d = n(837753);
(i = s || (s = {})).GUILD_NOT_ELIGIBLE = "guild_not_eligible", i.NOT_GUILD_MEMBER = "not_guild_member";
let E = e => {
  let {
    errorType: t
  } = e;
  return (0, o.Z)({
    type: a.ImpressionTypes.PAGE,
    name: a.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
    properties: {
      error_page_type: t
    }
  }), (0, l.jsx)("div", {
    className: u.errorPageContainer,
    children: (0, l.jsxs)("div", {
      className: u.errorPageContent,
      children: [(0, l.jsx)("img", {
        src: d,
        alt: "",
        className: u.errorPageIllo
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-xl/extrabold",
        className: u.errorPageTitle,
        children: "guild_not_eligible" === t ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_TITLE : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_TITLE
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        className: u.errorPagSubtitle,
        children: "guild_not_eligible" === t ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_SUBTITLE : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_SUBTITLE
      })]
    })
  })
}