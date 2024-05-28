"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("921801"),
  i = s("726985"),
  r = s("689938"),
  o = s("200173");

function d(e) {
  let {
    className: t,
    currentUser: s,
    handleDisableAccount: d,
    handleDeleteAccount: u
  } = e, c = s.isClaimed();
  return (0, a.jsx)(l.Subsetting, {
    setting: i.WebSetting.ACCOUNT_DISABLE_ACCOUNT,
    children: (0, a.jsxs)(n.FormSection, {
      className: t,
      title: r.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
      children: [(0, a.jsx)(n.FormText, {
        className: o.description,
        type: n.FormText.Types.DESCRIPTION,
        children: c ? r.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION : r.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION_UNCLAIMED
      }), (0, a.jsxs)("div", {
        className: o.buttonContainer,
        children: [c ? (0, a.jsx)(n.Button, {
          className: o.disableButton,
          look: n.ButtonLooks.FILLED,
          color: n.ButtonColors.RED,
          size: n.ButtonSizes.SMALL,
          onClick: d,
          children: r.default.Messages.DISABLE_ACCOUNT
        }) : null, (0, a.jsx)(l.Subsetting, {
          setting: i.WebSetting.ACCOUNT_DELETE_ACCOUNT,
          children: (0, a.jsx)(n.Button, {
            look: n.ButtonLooks.OUTLINED,
            color: n.ButtonColors.RED,
            size: n.ButtonSizes.SMALL,
            onClick: u,
            children: r.default.Messages.DELETE_ACCOUNT
          })
        })]
      })]
    })
  })
}