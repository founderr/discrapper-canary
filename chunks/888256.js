t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(921801),
  l = t(726985),
  r = t(689938),
  o = t(39001);

function c(e) {
  let {
    className: s,
    currentUser: t,
    handleDisableAccount: c,
    handleDeleteAccount: E
  } = e, d = t.isClaimed();
  return (0, n.jsx)(a.F, {
    setting: l.s6.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, n.jsxs)(i.FormSection, {
      className: s,
      title: r.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
      children: [(0, n.jsx)(i.FormText, {
        className: o.description,
        type: i.FormText.Types.DESCRIPTION,
        children: d ? r.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION : r.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION_UNCLAIMED
      }), (0, n.jsxs)("div", {
        className: o.buttonContainer,
        children: [d ? (0, n.jsx)(i.Button, {
          className: o.disableButton,
          look: i.ButtonLooks.FILLED,
          color: i.ButtonColors.RED,
          size: i.ButtonSizes.SMALL,
          onClick: c,
          children: r.Z.Messages.DISABLE_ACCOUNT
        }) : null, (0, n.jsx)(a.F, {
          setting: l.s6.ACCOUNT_DELETE_ACCOUNT,
          children: (0, n.jsx)(i.Button, {
            look: i.ButtonLooks.OUTLINED,
            color: i.ButtonColors.RED,
            size: i.ButtonSizes.SMALL,
            onClick: E,
            children: r.Z.Messages.DELETE_ACCOUNT
          })
        })]
      })]
    })
  })
}