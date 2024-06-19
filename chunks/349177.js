t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(993413),
  l = t(981631),
  r = t(689938);

function o(e) {
  var s, t;
  return (0, n.jsx)(a.Z, {
    errors: e.errors,
    disabled: e.disabled,
    title: r.Z.Messages.DISPLAY_NAME,
    children: (0, n.jsx)("div", {
      children: (0, n.jsx)(i.TextInput, {
        placeholder: e.placeholder,
        maxLength: l.JuI,
        onChange: e.onGlobalNameChange,
        value: null !== (t = null !== (s = e.pendingGlobalName) && void 0 !== s ? s : e.currentGlobalName) && void 0 !== t ? t : ""
      })
    })
  })
}