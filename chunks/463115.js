var s = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  i = n(481060),
  r = n(888592),
  o = n(689938),
  c = n(782664);
t.Z = e => {
  let {
    school: t,
    setStep: n
  } = e;
  return (0, s.jsxs)("div", {
    className: c.container,
    children: [(0, s.jsx)("div", {
      className: c.topImage
    }), (0, s.jsx)(i.Heading, {
      className: l()(c.centerText, c.header),
      variant: "heading-xl/semibold",
      children: o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER
    }), (0, s.jsx)("div", {
      className: c.descriptionWidth,
      children: (0, s.jsx)(i.Text, {
        className: c.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.Z.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({
          school: t
        })
      })
    }), (0, s.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.LINK,
      onClick: () => {
        n(r.tF.VERIFY_EMAIL)
      },
      className: c.__invalid_resendLink,
      children: o.Z.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL
    })]
  })
}