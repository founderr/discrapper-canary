"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("785681"),
  i = a("841409"),
  r = a("880257"),
  o = a("631885"),
  u = a("568671"),
  d = a("292352"),
  c = a("689938"),
  f = a("553196"),
  E = a("633488"),
  h = a("361848");
let _ = () => {
  let e = (0, o.useUserForLinkStatus)(d.UserLinkStatus.ACTIVE),
    t = (0, r.default)(),
    {
      handleTabChange: a
    } = (0, i.default)();
  return (0, o.useHasMaxConnections)() || t && e.length > 0 ? null : (0, n.jsx)("div", {
    className: f.button,
    children: t ? (0, n.jsx)(s.Button, {
      fullWidth: !1,
      size: s.ButtonSizes.LARGE,
      onClick: () => a(d.FamilyCenterSubPages.REQUESTS),
      children: c.default.Messages.GET_STARTED
    }) : (0, n.jsx)(u.default, {})
  })
};
t.default = () => {
  let e = (0, r.default)(),
    t = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
    a = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
      articleLink: "https://support.discord.com/hc/articles/14155060633623"
    }), c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
      articleLink: "https://support.discord.com/hc/articles/14155043715735"
    }));
  return (0, n.jsxs)("div", {
    className: f.container,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)("div", {
        children: (0, n.jsxs)("div", {
          className: f.headerText,
          children: [(0, n.jsx)(s.Heading, {
            variant: "heading-xl/medium",
            children: (0, n.jsx)(s.HeadingLevel, {
              children: t
            })
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: a
          })]
        })
      }), (0, n.jsx)(_, {})]
    }), (0, n.jsx)("div", {
      className: f.headerImage,
      children: (0, n.jsx)("img", {
        src: e ? E : h,
        alt: c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}