t.d(s, {
  Z: function() {
    return C
  }
});
var a = t(735250);
t(470079);
var l = t(512722),
  n = t.n(l),
  i = t(481060),
  o = t(703656),
  r = t(285952),
  c = t(346656),
  d = t(689938),
  u = t(420606);

function C(e) {
  let {
    directoryGuildName: s,
    guildToAdd: t,
    isExistingGuildFlow: l,
    onClose: C
  } = e;
  return n()(null != t, "Missing guild in Hub add guild confirmation"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: r.Z.Direction.VERTICAL,
      className: u.header,
      separator: !1,
      children: [null != C && (0, a.jsx)(i.ModalCloseButton, {
        className: u.closeButton,
        onClick: C
      }), (0, a.jsx)(c.Z, {
        guild: t,
        size: c.Z.Sizes.XLARGE,
        active: !0
      }), (0, a.jsx)(i.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.Z.Messages.HUB_ADD_OR_CREATE_SERVER_CONFIRMATION_TITLE
      }), (0, a.jsx)(i.Text, {
        className: u.__invalid_subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: l ? d.Z.Messages.HUB_ADD_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: s
        }) : d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: s
        })
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      className: u.buttonRow,
      children: l ? (0, a.jsx)(i.Button, {
        className: u.addConfirmButton,
        color: i.Button.Colors.BRAND,
        onClick: C,
        children: d.Z.Messages.HUB_ADD_SERVER_CONFIRMATION_BUTTON
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Button, {
          className: u.createSecondaryButton,
          color: i.Button.Colors.PRIMARY,
          onClick: C,
          children: d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_STAY
        }), (0, a.jsx)(i.Button, {
          className: u.createConfirmButton,
          color: i.Button.Colors.BRAND,
          onClick: () => {
            (0, o.XU)(t.id), null == C || C()
          },
          children: d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_GO
        })]
      })
    })]
  })
}