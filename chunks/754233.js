t.r(s);
var a = t(735250);
t(470079);
var l = t(481060),
  n = t(430824),
  o = t(153124),
  d = t(614812),
  r = t(689938),
  i = t(768506);
s.default = e => {
  let {
    onClose: s,
    guildId: t
  } = e, c = (0, o.Dt)(), u = r.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
    helpdeskArticle: d.z
  }), I = n.Z.getGuild(t);
  return null != I && (u = r.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
    guildName: I.name,
    helpdeskArticle: d.z
  })), (0, a.jsxs)(l.ModalRoot, {
    ...e,
    "aria-labelledby": c,
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: i.modalHeader,
      children: [(0, a.jsx)(l.Heading, {
        id: c,
        variant: "heading-xl/extrabold",
        children: r.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
      }), (0, a.jsx)(l.ModalCloseButton, {
        className: i.closeButton,
        onClick: s
      })]
    }), (0, a.jsx)(l.ModalContent, {
      className: i.modalContent,
      children: (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: i.contentText,
        children: u
      })
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        className: i.button,
        size: l.Button.Sizes.MIN,
        onClick: s,
        children: r.Z.Messages.OKAY
      })
    })]
  })
}