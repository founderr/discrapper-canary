t.d(s, {
  Z: function() {
return C;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(481060),
  r = t(541716),
  o = t(752305),
  l = t(893718),
  c = t(131704),
  d = t(153124),
  _ = t(993413),
  E = t(981631),
  u = t(689938),
  T = t(594210);
let I = (0, d.hQ)(),
  S = (0, c.kt)({
id: '1',
type: E.d4z.DM
  }),
  N = (0, d.hQ)();

function C(e) {
  let {
sectionTitle: s,
errors: t,
onBioChange: c,
pendingBio: d,
placeholder: C,
currentBio: m,
disabled: A = !1
  } = e, [h, g] = a.useState(null != d ? d : m), [O, p] = a.useState((0, o.JM)(h)), R = a.useRef(!1);
  return a.useEffect(() => {
if (void 0 === d) {
  let e = (0, o.JM)(m);
  g(m), p(e);
}
  }, [
d,
m
  ]), (0, n.jsxs)(_.Z, {
title: s,
titleId: I,
description: u.Z.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
errors: t,
disabled: A,
children: [
  (0, n.jsx)(l.Z, {
    'aria-describedby': N,
    'aria-labelledby': I,
    innerClassName: T.bioTextArea,
    maxCharacterCount: E.tPV,
    onChange: function(e, s, t) {
      s !== h && (g(s), p(t), c(s));
    },
    placeholder: C,
    channel: S,
    textValue: h,
    richValue: O,
    type: r.I.PROFILE_BIO_INPUT,
    onBlur: () => {
      R.current = !1;
    },
    onFocus: () => {
      R.current = !0;
    },
    focused: R.current,
    onSubmit: function() {
      return new Promise(e => {
        e({
          shouldClear: !1,
          shouldRefocus: !0
        });
      });
    }
  }),
  (0, n.jsx)(i.HiddenVisually, {
    id: N,
    children: u.Z.Messages.MAXIMUM_LENGTH.format({
      maxLength: E.tPV
    })
  })
]
  });
}