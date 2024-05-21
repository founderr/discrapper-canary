"use strict";
l.r(t), l("47120");
var s = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  i = l("481060"),
  r = l("968437"),
  o = l("689938"),
  d = l("919665");
t.default = e => {
  let {
    autoArchiveDuration: t,
    onChange: l,
    isDisabled: a
  } = e, u = (0, r.getAutoArchiveOptions)(), c = (e, t) => (0, s.jsx)("span", {
    className: n()(d.optionLabel, {
      [d.dropdownOption]: t
    }),
    children: e.label
  });
  return (0, s.jsx)(i.FormSection, {
    title: o.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
    className: d.formSection,
    children: (0, s.jsx)(i.SingleSelect, {
      isDisabled: a,
      options: u,
      value: t,
      maxVisibleItems: u.length,
      onChange: l,
      optionClassName: d.dropdownOption,
      renderOptionLabel: e => c(e, !0),
      renderOptionValue: e => {
        let [t] = e;
        return c(t, !1)
      }
    })
  })
}