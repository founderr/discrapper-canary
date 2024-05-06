"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("481060"),
  s = a("881052"),
  l = a("484455"),
  o = a("592286"),
  c = a("689938"),
  d = a("915580");
t.default = function(e) {
  let {
    guildId: t,
    onSave: a,
    formDescription: u
  } = e, [f, m] = i.useState(null), [h, E] = i.useState(u), T = i.useRef(!1), p = i.useRef(!1);
  i.useEffect(() => () => {
    p.current = !0
  }, []);
  let _ = i.useCallback(async () => {
    if (!T.current) {
      m(null);
      try {
        await a(t, h)
      } catch (e) {
        if (p.current) return;
        m(new s.APIError(e).getAnyErrorMessage())
      } finally {
        if (p.current) return;
        T.current = !1
      }
    }
  }, [h, t, a]);
  return (0, n.jsxs)(l.default, {
    title: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, n.jsx)(r.TextArea, {
      className: d.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        E(e)
      },
      onBlur: _,
      autosize: !0
    }), null != f && "" !== f ? (0, n.jsx)(r.Text, {
      className: d.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}