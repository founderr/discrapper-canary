"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("481060"),
  i = n("881052"),
  l = n("484455"),
  o = n("592286"),
  c = n("689938"),
  d = n("17359");
t.default = function(e) {
  let {
    guildId: t,
    onSave: n,
    formDescription: u
  } = e, [f, m] = r.useState(null), [h, p] = r.useState(u), E = r.useRef(!1), T = r.useRef(!1);
  r.useEffect(() => () => {
    T.current = !0
  }, []);
  let C = r.useCallback(async () => {
    if (!E.current) {
      m(null);
      try {
        await n(t, h)
      } catch (e) {
        if (T.current) return;
        m(new i.APIError(e).getAnyErrorMessage())
      } finally {
        if (T.current) return;
        E.current = !1
      }
    }
  }, [h, t, n]);
  return (0, a.jsxs)(l.default, {
    title: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(s.TextArea, {
      className: d.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        p(e)
      },
      onBlur: C,
      autosize: !0
    }), null != f && "" !== f ? (0, a.jsx)(s.Text, {
      className: d.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}