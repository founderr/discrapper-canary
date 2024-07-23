var n = t(570140),
  a = t(668781),
  i = t(881052),
  r = t(352954),
  o = t(630759),
  l = t(760373),
  c = t(689938);
async function d(e) {
  if (n.Z.dispatch({
  type: 'SECURE_FRAMES_SETTINGS_UPDATE',
  persistentCodesEnabled: e
}), e)
try {
  await (0, o.om)(l.GB);
} catch (t) {
  var s;
  let e = new i.Hx(t);
  n.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: !1
  }), a.Z.show({
    title: c.Z.Messages.ERROR_GENERIC_TITLE,
    body: null !== (s = e.getAnyErrorMessage()) && void 0 !== s ? s : c.Z.Messages.GENERIC_ERROR_BODY
  });
}
}
s.Z = {
  updateSettings: function(e) {
let {
  persistentCodesEnabled: s
} = e;
if (s) {
  d(s);
  return;
}
r.Z.openSecureFramesUpdateConfirmation({
  title: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
  subtitle: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
  onConfirm: () => {
    d(s);
  }
});
  },
  addCurrentUserUploadedKeyVersionCached: function(e) {
n.Z.dispatch({
  type: 'SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS',
  keyVersion: e
});
  }
};