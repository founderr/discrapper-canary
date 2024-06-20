var s = n(735250);
n(470079);
var a = n(481060),
  i = n(785681),
  l = n(841409),
  r = n(880257),
  c = n(631885),
  o = n(568671),
  d = n(292352),
  u = n(689938),
  E = n(846078),
  _ = n(633488),
  h = n(361848);
let T = () => {
  let e = (0, c.mq)(d.ne.ACTIVE),
    t = (0, r.Z)(),
    {
      handleTabChange: n
    } = (0, l.Z)();
  return (0, c.VM)() || t && e.length > 0 ? null : (0, s.jsx)("div", {
    className: E.button,
    children: t ? (0, s.jsx)(a.Button, {
      fullWidth: !1,
      size: a.ButtonSizes.LARGE,
      onClick: () => n(d.dG.REQUESTS),
      children: u.Z.Messages.GET_STARTED
    }) : (0, s.jsx)(o.Z, {})
  })
};
t.Z = () => {
  let e = (0, r.Z)(),
    t = (0, i.o)(u.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, u.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
    n = (0, i.o)(u.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
      articleLink: "https://support.discord.com/hc/articles/14155060633623"
    }), u.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
      articleLink: "https://support.discord.com/hc/articles/14155043715735"
    }));
  return (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsxs)("div", {
      children: [(0, s.jsx)("div", {
        children: (0, s.jsxs)("div", {
          className: E.headerText,
          children: [(0, s.jsx)(a.Heading, {
            variant: "heading-xl/medium",
            children: (0, s.jsx)(a.HeadingLevel, {
              children: t
            })
          }), (0, s.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: n
          })]
        })
      }), (0, s.jsx)(T, {})]
    }), (0, s.jsx)("div", {
      className: E.headerImage,
      children: (0, s.jsx)("img", {
        src: e ? _ : h,
        alt: u.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}