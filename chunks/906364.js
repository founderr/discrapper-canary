t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(993413),
  l = t(689938);

function r(e) {
  let {
    sectionTitle: s,
    errors: t,
    onPronounsChange: r,
    pendingPronouns: o,
    placeholder: c,
    currentPronouns: E,
    disabled: d = !1
  } = e;
  return (0, n.jsx)(a.Z, {
    title: s,
    errors: t,
    disabled: d,
    children: (0, n.jsx)(i.TextInput, {
      placeholder: null != c ? c : l.Z.Messages.PROFILE_CUSTOMIZATION_PRONOUNS_PLACEHOLDER,
      maxLength: 40,
      value: null != o ? o : E,
      onChange: function(e) {
        r(e === E ? void 0 : e)
      },
      disabled: d
    })
  })
}