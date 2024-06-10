"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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
  N = (0, u.uid)();

function g(e) {
  let {
    sectionTitle: t,
    errors: s,
    onBioChange: d,
    pendingBio: u,
    placeholder: g,
    currentBio: f,
    disabled: m = !1
  } = e, [C, A] = n.useState(null != u ? u : f), [O, h] = n.useState((0, r.toRichValue)(C)), p = n.useRef(!1);
  return n.useEffect(() => {
    if (void 0 === u) {
      let e = (0, r.toRichValue)(f);
      A(f), h(e)
    }
  }, [u, f]), (0, a.jsxs)(c.default, {
    title: t,
    titleId: _,
    description: E.default.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
    errors: s,
    disabled: m,
    children: [(0, a.jsx)(o.default, {
      "aria-describedby": N,
      "aria-labelledby": _,
      innerClassName: T.bioTextArea,
      maxCharacterCount: S.BIO_MAX_LENGTH,
      onChange: function(e, t, s) {
        t !== C && (A(t), h(s), d(t))
      },
      placeholder: g,
      channel: I,
      textValue: C,
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
      id: N,
      children: E.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: S.BIO_MAX_LENGTH
      })
    })]
  })
}