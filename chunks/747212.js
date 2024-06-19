t(47120);
var l = t(735250);
t(470079);
var n = t(120356),
  i = t.n(n),
  a = t(481060),
  r = t(968437),
  o = t(689938),
  d = t(615006);
s.Z = e => {
  let {
    autoArchiveDuration: s,
    onChange: t,
    isDisabled: n
  } = e, c = (0, r.nt)(), u = (e, s) => (0, l.jsx)("span", {
    className: i()(d.optionLabel, {
      [d.dropdownOption]: s
    }),
    children: e.label
  });
  return (0, l.jsx)(a.FormSection, {
    title: o.Z.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
    className: d.formSection,
    children: (0, l.jsx)(a.SingleSelect, {
      isDisabled: n,
      options: c,
      value: s,
      maxVisibleItems: c.length,
      onChange: t,
      optionClassName: d.dropdownOption,
      renderOptionLabel: e => u(e, !0),
      renderOptionValue: e => {
        let [s] = e;
        return u(s, !1)
      }
    })
  })
}