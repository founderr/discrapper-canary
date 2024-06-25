var n = s(735250);
s(470079);
var a = s(481060),
  i = s(785681),
  r = s(841409),
  l = s(880257),
  o = s(631885),
  c = s(568671),
  E = s(292352),
  _ = s(689938),
  u = s(846078),
  d = s(633488),
  T = s(361848);
let I = () => {
  let e = (0, o.mq)(E.ne.ACTIVE),
    t = (0, l.Z)(),
    {
      handleTabChange: s
    } = (0, r.Z)();
  return (0, o.VM)() || t && e.length > 0 ? null : (0, n.jsx)("div", {
    className: u.button,
    children: t ? (0, n.jsx)(a.Button, {
      fullWidth: !1,
      size: a.ButtonSizes.LARGE,
      onClick: () => s(E.dG.REQUESTS),
      children: _.Z.Messages.GET_STARTED
    }) : (0, n.jsx)(c.Z, {})
  })
};
t.Z = () => {
  let e = (0, l.Z)(),
    t = (0, i.o)(_.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
    s = (0, i.o)(_.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
      articleLink: "https://support.discord.com/hc/articles/14155060633623"
    }), _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
      articleLink: "https://support.discord.com/hc/articles/14155043715735"
    }));
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)("div", {
        children: (0, n.jsxs)("div", {
          className: u.headerText,
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
      }), (0, n.jsx)(I, {})]
    }), (0, n.jsx)("div", {
      className: u.headerImage,
      children: (0, n.jsx)("img", {
        src: e ? d : T,
        alt: _.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}