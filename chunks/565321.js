"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("481060"),
  s = n("881052"),
  l = n("484455"),
  o = n("592286"),
  d = n("689938"),
  c = n("915580");
t.default = function(e) {
  let {
    guildId: t,
    onSave: n,
    formDescription: u
  } = e, [f, m] = i.useState(null), [h, E] = i.useState(u), T = i.useRef(!1), p = i.useRef(!1);
  i.useEffect(() => () => {
    p.current = !0
  }, []);
  let _ = i.useCallback(async () => {
    if (!T.current) {
      m(null);
      try {
        await n(t, h)
      } catch (e) {
        if (p.current) return;
        m(new s.APIError(e).getAnyErrorMessage())
      } finally {
        if (p.current) return;
        T.current = !1
      }
    }
  }, [h, t, n]);
  return (0, a.jsxs)(l.default, {
    title: d.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(r.TextArea, {
      className: c.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: d.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        E(e)
      },
      onBlur: _,
      autosize: !0
    }), null != f && "" !== f ? (0, a.jsx)(r.Text, {
      className: c.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}