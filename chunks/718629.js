var n = t(570140);
s.Z = {
  updateSettings: function(e) {
    let {
      persistentCodesEnabled: s
    } = e;
    n.Z.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: s
    })
  }
}