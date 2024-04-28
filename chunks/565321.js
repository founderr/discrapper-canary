"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("881052"),
  l = n("484455"),
  o = n("592286"),
  u = n("689938"),
  c = n("17359");
t.default = function(e) {
  let {
    guildId: t,
    onSave: n,
    formDescription: d
  } = e, [f, p] = r.useState(null), [m, E] = r.useState(d), I = r.useRef(!1), _ = r.useRef(!1);
  r.useEffect(() => () => {
    _.current = !0
  }, []);
  let h = r.useCallback(async () => {
    if (!I.current) {
      p(null);
      try {
        await n(t, m)
      } catch (e) {
        if (_.current) return;
        p(new a.APIError(e).getAnyErrorMessage())
      } finally {
        if (_.current) return;
        I.current = !1
      }
    }
  }, [m, t, n]);
  return (0, i.jsxs)(l.default, {
    title: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, i.jsx)(s.TextArea, {
      className: c.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != m ? m : "",
      placeholder: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        E(e)
      },
      onBlur: h,
      autosize: !0
    }), null != f && "" !== f ? (0, i.jsx)(s.Text, {
      className: c.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}