var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(594174),
    s = n(246364),
    o = n(489813),
    c = n(186078),
    d = n(73880),
    u = n(196345),
    m = n(707592),
    h = n(388032);
t.Z = function (e) {
    let { formFields: t, user: n, showRequirements: x = !0 } = e;
    return null == (0, l.e7)([a.default], () => (null != n ? n : a.default.getCurrentUser()))
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  x &&
                      (0, i.jsx)(o.Ih, {
                          icon: r.ShieldIcon,
                          text: h.intl.string(h.t.v2z4c3),
                          meetsRequirement: !0
                      }),
                  t.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, i.jsx)(u.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, i.jsx)(m.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, i.jsx)(d.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(c.QH, { formField: e }, t);
                          }
                      })(e, t)
                  )
              ]
          });
};
