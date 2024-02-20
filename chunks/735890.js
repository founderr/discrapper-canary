"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("452804"),
  i = n("135230"),
  l = n("168973"),
  o = n("782340");

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
    n = () => {
      s.default.updatedUnsyncedSettings({
        disableEmbeddedActivityPopOutAlert: !0
      }), e()
    },
    u = !l.default.disableEmbeddedActivityPopOutAlert;
  u ? (0, r.openModal)(r => (0, a.jsx)(i.default, {
    confirmText: o.default.Messages.EMBEDDED_ACTIVITIES_YEP,
    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
    title: o.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
    cancelText: o.default.Messages.EMBEDDED_ACTIVITIES_NVM,
    onConfirm: e,
    onConfirmSecondary: n,
    onCancel: t,
    body: o.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
    ...r
  })) : e()
}