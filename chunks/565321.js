"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  E = s("881052"),
  l = s("484455"),
  _ = s("592286"),
  r = s("689938"),
  u = s("915580");
t.default = function(e) {
  let {
    guildId: t,
    onSave: s,
    formDescription: o
  } = e, [T, d] = n.useState(null), [A, I] = n.useState(o), L = n.useRef(!1), c = n.useRef(!1);
  n.useEffect(() => () => {
    c.current = !0
  }, []);
  let N = n.useCallback(async () => {
    if (!L.current) {
      d(null);
      try {
        await s(t, A)
      } catch (e) {
        if (c.current) return;
        d(new E.APIError(e).getAnyErrorMessage())
      } finally {
        if (c.current) return;
        L.current = !1
      }
    }
  }, [A, t, s]);
  return (0, a.jsxs)(l.default, {
    title: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(i.TextArea, {
      className: u.fieldBackground,
      maxLength: _.MAX_DESCRIPTION_LENGTH,
      value: null != A ? A : "",
      placeholder: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        I(e)
      },
      onBlur: N,
      autosize: !0
    }), null != T && "" !== T ? (0, a.jsx)(i.Text, {
      className: u.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: T
    }) : null]
  })
}