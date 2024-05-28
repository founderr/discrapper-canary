"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("785681"),
  i = s("841409"),
  r = s("880257"),
  u = s("631885"),
  o = s("568671"),
  d = s("292352"),
  c = s("689938"),
  E = s("474943"),
  _ = s("633488"),
  f = s("361848");
let h = () => {
  let e = (0, u.useUserForLinkStatus)(d.UserLinkStatus.ACTIVE),
    t = (0, r.default)(),
    {
      handleTabChange: s
    } = (0, i.default)();
  return (0, u.useHasMaxConnections)() || t && e.length > 0 ? null : (0, a.jsx)("div", {
    className: E.button,
    children: t ? (0, a.jsx)(n.Button, {
      fullWidth: !1,
      size: n.ButtonSizes.LARGE,
      onClick: () => s(d.FamilyCenterSubPages.REQUESTS),
      children: c.default.Messages.GET_STARTED
    }) : (0, a.jsx)(o.default, {})
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
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        children: (0, a.jsxs)("div", {
          className: E.headerText,
          children: [(0, a.jsx)(n.Heading, {
            variant: "heading-xl/medium",
            children: (0, a.jsx)(n.HeadingLevel, {
              children: t
            })
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: s
          })]
        })
      }), (0, a.jsx)(h, {})]
    }), (0, a.jsx)("div", {
      className: E.headerImage,
      children: (0, a.jsx)("img", {
        src: e ? _ : f,
        alt: c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}