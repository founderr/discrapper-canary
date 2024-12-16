var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    o = n(594174),
    l = n(246364),
    c = n(489813),
    s = n(186078),
    d = n(73880),
    u = n(196345),
    m = n(707592),
    f = n(388032);
t.Z = function (e) {
    let { formFields: t, user: n, showRequirements: b = !0 } = e;
    return null == (0, r.e7)([o.default], () => (null != n ? n : o.default.getCurrentUser()))
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  b &&
                      (0, i.jsx)(c.Ih, {
                          icon: a.ShieldIcon,
                          text: f.intl.string(f.t.v2z4c3),
                          meetsRequirement: !0
                      }),
                  t.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case l.QJ.TERMS:
                                  return (0, i.jsx)(u.QC, { formField: e }, t);
                              case l.QJ.TEXT_INPUT:
                                  return (0, i.jsx)(m.YJ, { formField: e }, t);
                              case l.QJ.PARAGRAPH:
                                  return (0, i.jsx)(d.jn, { formField: e }, t);
                              case l.QJ.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(s.QH, { formField: e }, t);
                          }
                      })(e, t)
                  )
              ]
          });
};
