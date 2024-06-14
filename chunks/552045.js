"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("785681"),
  i = s("841409"),
  r = s("880257"),
  o = s("631885"),
  u = s("568671"),
  d = s("292352"),
  c = s("689938"),
  E = s("474943"),
  _ = s("633488"),
  f = s("361848");
let h = () => {
  let e = (0, o.useUserForLinkStatus)(d.UserLinkStatus.ACTIVE),
    t = (0, r.default)(),
    {
      handleTabChange: s
    } = (0, i.default)();
  return (0, o.useHasMaxConnections)() || t && e.length > 0 ? null : (0, n.jsx)("div", {
    className: E.button,
    children: t ? (0, n.jsx)(a.Button, {
      fullWidth: !1,
      size: a.ButtonSizes.LARGE,
      onClick: () => s(d.FamilyCenterSubPages.REQUESTS),
      children: c.default.Messages.GET_STARTED
    }) : (0, n.jsx)(u.default, {})
  })
};
t.default = () => {
  let e = (0, r.default)(),
    t = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
    s = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
      articleLink: "https://support.discord.com/hc/articles/14155060633623"
    }), c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
      articleLink: "https://support.discord.com/hc/articles/14155043715735"
    }));
  return (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)("div", {
        children: (0, n.jsxs)("div", {
          className: E.headerText,
          children: [(0, n.jsx)(a.Heading, {
            variant: "heading-xl/medium",
            children: (0, n.jsx)(a.HeadingLevel, {
              children: t
            })
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: s
          })]
        })
      }), (0, n.jsx)(h, {})]
    }), (0, n.jsx)("div", {
      className: E.headerImage,
      children: (0, n.jsx)("img", {
        src: e ? _ : f,
        alt: c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}