var n = t(570140),
  a = t(352954),
  i = t(689938);

function r(e) {
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
      r(s);
      return
    }
    a.Z.openSecureFramesUpdateConfirmation({
      title: i.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
      subtitle: i.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
      onConfirm: () => {
        r(s)
      }
    })
  }
}