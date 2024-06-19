t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(579806),
  r = t(435064),
  o = t(39604),
  c = t(442334),
  E = t(689938),
  d = t(655714),
  _ = t(978156);

function T() {
  let e = (0, i.e7)([r.Z], () => r.Z.getSettings().storageLocation),
    s = async () => {
      let e = await l.Z.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      e.length > 0 && o.T1(e[0])
    };
  return (0, n.jsx)(a.FormSection, {
    children: (0, n.jsx)(c.O, {
      title: E.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION,
      note: E.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_HELP,
      className: d.formItem,
      children: (0, n.jsx)(a.Clickable, {
        className: _.selectControl,
        "aria-label": E.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_LABEL.format({
          storageLocation: e
        }),
        onClick: s,
        children: (0, n.jsx)(a.TextInput, {
          tabIndex: -1,
          value: e,
          editable: !1,
          "aria-hidden": !0
        })
      })
    })
  })
}