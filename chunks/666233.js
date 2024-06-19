var n = a(735250);
a(470079);
var t = a(442837),
  l = a(481060),
  r = a(594174),
  i = a(246364),
  o = a(489813),
  c = a(186078),
  I = a(73880),
  d = a(196345),
  u = a(707592),
  E = a(689938);
s.Z = function(e) {
  let {
    formFields: s,
    user: a,
    showRequirements: T = !0
  } = e;
  return null == (0, t.e7)([r.default], () => null != a ? a : r.default.getCurrentUser()) ? null : (0, n.jsxs)(n.Fragment, {
    children: [T && (0, n.jsx)(o.Ih, {
      icon: l.ShieldIcon,
      text: E.Z.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
      meetsRequirement: !0
    }), s.map((e, s) => (function(e, s) {
      switch (e.field_type) {
        case i.QJ.TERMS:
          return (0, n.jsx)(d.QC, {
            formField: e
          }, s);
        case i.QJ.TEXT_INPUT:
          return (0, n.jsx)(u.YJ, {
            formField: e
          }, s);
        case i.QJ.PARAGRAPH:
          return (0, n.jsx)(I.jn, {
            formField: e
          }, s);
        case i.QJ.MULTIPLE_CHOICE:
          return (0, n.jsx)(c.QH, {
            formField: e
          }, s)
      }
    })(e, s))]
  })
}