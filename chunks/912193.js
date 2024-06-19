n.d(t, {
  b: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(846027),
  a = n(468026),
  r = n(689938);
let o = null;

function c() {
  null !== o && (0, i.closeModal)(o), o = null
}

function u() {
  l.Z.setSilenceWarning(!1), c()
}

function d() {
  o = (0, i.openModal)(e => (0, s.jsx)(a.default, {
    title: r.Z.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
    body: r.Z.Messages.CONFIRM_DISABLE_SILENCE_BODY,
    secondaryConfirmText: r.Z.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
    onConfirmSecondary: u,
    onConfirm: c,
    confirmText: r.Z.Messages.OKAY,
    ...e
  }))
}