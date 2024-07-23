var n = s(570140),
  a = s(668781),
  i = s(881052),
  r = s(352954),
  o = s(630759),
  l = s(760373),
  c = s(689938);
async function d(e) {
  if (n.Z.dispatch({
  type: 'SECURE_FRAMES_SETTINGS_UPDATE',
  persistentCodesEnabled: e
}), e)
try {
  await (0, o.om)(l.GB);
} catch (s) {
  var t;
  let e = new i.Hx(s);
  n.Z.dispatch({
    type: 'SECURE_FRAMES_SETTINGS_UPDATE',
    persistentCodesEnabled: !1
  }), a.Z.show({
    title: c.Z.Messages.ERROR_GENERIC_TITLE,
    body: null !== (t = e.getAnyErrorMessage()) && void 0 !== t ? t : c.Z.Messages.GENERIC_ERROR_BODY
  });
}
}
t.Z = {
  updateSettings: function(e) {
let {
  persistentCodesEnabled: t
} = e;
if (t) {
  d(t);
  return;
}
r.Z.openSecureFramesUpdateConfirmation({
  title: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
  subtitle: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
  onConfirm: () => {
    d(t);
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