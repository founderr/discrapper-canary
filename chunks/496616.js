n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(153867),
  a = n(468026),
  r = n(740492),
  o = n(689938);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
    n = t => {
      s.ZP.updatedUnsyncedSettings({
        disableEmbeddedActivityPopOutAlert: !0
      }), t(), e()
    };
  r.ZP.disableEmbeddedActivityPopOutAlert ? e() : (0, i.openModal)(i => (0, l.jsx)(a.default, {
    confirmText: o.Z.Messages.EMBEDDED_ACTIVITIES_YEP,
    secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
    title: o.Z.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
    cancelText: o.Z.Messages.EMBEDDED_ACTIVITIES_NVM,
    onConfirm: () => {
      i.onClose(), e()
    },
    onCancel: t,
    onConfirmSecondary: () => n(i.onClose),
    body: o.Z.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
    ...i
  }), {}, i.POPOUT_MODAL_CONTEXT)
}