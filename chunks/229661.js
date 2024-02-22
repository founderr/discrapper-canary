"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("452804"),
  i = n("135230"),
  r = n("168973"),
  u = n("782340");

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
    n = t => {
      s.default.updatedUnsyncedSettings({
        disableEmbeddedActivityPopOutAlert: !0
      }), t(), e()
    },
    o = !r.default.disableEmbeddedActivityPopOutAlert;
  o ? (0, a.openModal)(a => (0, l.jsx)(i.default, {
    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
    onConfirm: () => {
      a.onClose(), e()
    },
    onCancel: t,
    onConfirmSecondary: () => n(a.onClose),
    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
    ...a
  }), {}, a.POPOUT_MODAL_CONTEXT) : e()
}