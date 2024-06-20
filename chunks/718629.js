var n = t(570140),
  i = t(352954),
  a = t(689938);

function l(e) {
  n.Z.dispatch({
    type: "SECURE_FRAMES_SETTINGS_UPDATE",
    persistentCodesEnabled: e
  })
}
s.Z = {
  updateSettings: function(e) {
    let {
      persistentCodesEnabled: s
    } = e;
    if (s) {
      l(s);
      return
    }
    i.Z.openSecureFramesUpdateConfirmation({
      title: a.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
      subtitle: a.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
      onConfirm: () => {
        l(s)
      }
    })
  }
}