"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("541716"),
  r = s("752305"),
  o = s("893718"),
  d = s("131704"),
  u = s("153124"),
  c = s("993413"),
  S = s("981631"),
  E = s("689938"),
  T = s("496166");
let _ = (0, u.uid)(),
  I = (0, d.createChannelRecord)({
    id: "1",
    type: S.ChannelTypes.DM
  }),
  f = (0, u.uid)();

function m(e) {
  let {
    sectionTitle: t,
    errors: s,
    onBioChange: d,
    pendingBio: u,
    placeholder: m,
    currentBio: N,
    disabled: g = !1
  } = e, [h, C] = n.useState(null != u ? u : N), [O, A] = n.useState((0, r.toRichValue)(h)), p = n.useRef(!1);
  return n.useEffect(() => {
    if (void 0 === u) {
      let e = (0, r.toRichValue)(N);
      C(N), A(e)
    }
  }, [u, N]), (0, a.jsxs)(c.default, {
    title: t,
    titleId: _,
    description: E.default.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
    errors: s,
    disabled: g,
    children: [(0, a.jsx)(o.default, {
      "aria-describedby": f,
      "aria-labelledby": _,
      innerClassName: T.bioTextArea,
      maxCharacterCount: S.BIO_MAX_LENGTH,
      onChange: function(e, t, s) {
        t !== h && (C(t), A(s), d(t))
      },
      placeholder: m,
      channel: I,
      textValue: h,
      richValue: O,
      type: i.ChatInputTypes.PROFILE_BIO_INPUT,
      onBlur: () => {
        p.current = !1
      },
      onFocus: () => {
        p.current = !0
      },
      focused: p.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }
    }), (0, a.jsx)(l.HiddenVisually, {
      id: f,
      children: E.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: S.BIO_MAX_LENGTH
      })
    })]
  })
}