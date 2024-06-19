t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(541716),
  r = t(752305),
  o = t(893718),
  c = t(131704),
  E = t(153124),
  d = t(993413),
  _ = t(981631),
  T = t(689938),
  S = t(236235);
let u = (0, E.hQ)(),
  I = (0, c.kt)({
    id: "1",
    type: _.d4z.DM
  }),
  N = (0, E.hQ)();

function A(e) {
  let {
    sectionTitle: s,
    errors: t,
    onBioChange: c,
    pendingBio: E,
    placeholder: A,
    currentBio: C,
    disabled: O = !1
  } = e, [m, h] = i.useState(null != E ? E : C), [g, R] = i.useState((0, r.JM)(m)), M = i.useRef(!1);
  return i.useEffect(() => {
    if (void 0 === E) {
      let e = (0, r.JM)(C);
      h(C), R(e)
    }
  }, [E, C]), (0, n.jsxs)(d.Z, {
    title: s,
    titleId: u,
    description: T.Z.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
    errors: t,
    disabled: O,
    children: [(0, n.jsx)(o.Z, {
      "aria-describedby": N,
      "aria-labelledby": u,
      innerClassName: S.bioTextArea,
      maxCharacterCount: _.tPV,
      onChange: function(e, s, t) {
        s !== m && (h(s), R(t), c(s))
      },
      placeholder: A,
      channel: I,
      textValue: m,
      richValue: g,
      type: l.I.PROFILE_BIO_INPUT,
      onBlur: () => {
        M.current = !1
      },
      onFocus: () => {
        M.current = !0
      },
      focused: M.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }
    }), (0, n.jsx)(a.HiddenVisually, {
      id: N,
      children: T.Z.Messages.MAXIMUM_LENGTH.format({
        maxLength: _.tPV
      })
    })]
  })
}