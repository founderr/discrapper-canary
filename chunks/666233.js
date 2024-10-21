var t = n(200651);
n(192379);
var a = n(442837),
    l = n(481060),
    r = n(594174),
    i = n(246364),
    o = n(489813),
    c = n(186078),
    d = n(73880),
    u = n(196345),
    I = n(707592),
    E = n(689938);
s.Z = function (e) {
    let { formFields: s, user: n, showRequirements: _ = !0 } = e;
    return null == (0, a.e7)([r.default], () => (null != n ? n : r.default.getCurrentUser()))
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  _ &&
                      (0, t.jsx)(o.Ih, {
                          icon: l.ShieldIcon,
                          text: E.Z.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                          meetsRequirement: !0
                      }),
                  s.map((e, s) =>
                      (function (e, s) {
                          switch (e.field_type) {
                              case i.QJ.TERMS:
                                  return (0, t.jsx)(u.QC, { formField: e }, s);
                              case i.QJ.TEXT_INPUT:
                                  return (0, t.jsx)(I.YJ, { formField: e }, s);
                              case i.QJ.PARAGRAPH:
                                  return (0, t.jsx)(d.jn, { formField: e }, s);
                              case i.QJ.MULTIPLE_CHOICE:
                                  return (0, t.jsx)(c.QH, { formField: e }, s);
                          }
                      })(e, s)
                  )
              ]
          });
};
