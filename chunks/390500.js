var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(970606),
  r = n(346656),
  o = n(689938),
  c = n(640380),
  u = n(586522);
t.Z = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, d = null == n ? void 0 : n.id;
  return s.useEffect(() => {
    null != d && (0, a.Pq)(d)
  }, [d]), (0, i.jsxs)("div", {
    className: c.confirmation,
    children: [(0, i.jsxs)("div", {
      className: c.confirmationContent,
      children: [null !== n ? (0, i.jsx)(r.Z, {
        size: r.Z.Sizes.LARGER,
        guild: n,
        className: c.guildIcon
      }) : (0, i.jsx)("img", {
        alt: o.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: u
      }), (0, i.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: c.header,
        children: (null == n ? void 0 : n.name) != null ? o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: n.name
        }) : o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })]
    }), (0, i.jsx)("div", {
      className: c.confirmationButtonColumn,
      children: (0, i.jsx)(l.Button, {
        onClick: t,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        size: l.Button.Sizes.SMALL,
        children: o.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
      })
    })]
  })
}