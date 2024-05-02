"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("481060"),
  s = n("881052"),
  l = n("484455"),
  o = n("592286"),
  c = n("689938"),
  d = n("915580");
t.default = function(e) {
  let {
    guildId: t,
    onSave: n,
    formDescription: u
  } = e, [f, m] = r.useState(null), [h, p] = r.useState(u), T = r.useRef(!1), E = r.useRef(!1);
  r.useEffect(() => () => {
    E.current = !0
  }, []);
  let C = r.useCallback(async () => {
    if (!T.current) {
      m(null);
      try {
        await n(t, h)
      } catch (e) {
        if (E.current) return;
        m(new s.APIError(e).getAnyErrorMessage())
      } finally {
        if (E.current) return;
        T.current = !1
      }
    }
  }, [h, t, n]);
  return (0, a.jsxs)(l.default, {
    title: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(i.TextArea, {
      className: d.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != h ? h : "",
      placeholder: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        p(e)
      },
      onBlur: C,
      autosize: !0
    }), null != f && "" !== f ? (0, a.jsx)(i.Text, {
      className: d.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}