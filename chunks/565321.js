"use strict";
i.r(t), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("481060"),
  a = i("881052"),
  l = i("484455"),
  o = i("592286"),
  u = i("689938"),
  c = i("482249");
t.default = function(e) {
  let {
    guildId: t,
    onSave: i,
    formDescription: d
  } = e, [f, p] = r.useState(null), [C, m] = r.useState(d), h = r.useRef(!1), _ = r.useRef(!1);
  r.useEffect(() => () => {
    _.current = !0
  }, []);
  let E = r.useCallback(async () => {
    if (!h.current) {
      p(null);
      try {
        await i(t, C)
      } catch (e) {
        if (_.current) return;
        p(new a.APIError(e).getAnyErrorMessage())
      } finally {
        if (_.current) return;
        h.current = !1
      }
    }
  }, [C, t, i]);
  return (0, n.jsxs)(l.default, {
    title: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, n.jsx)(s.TextArea, {
      className: c.fieldBackground,
      maxLength: o.MAX_DESCRIPTION_LENGTH,
      value: null != C ? C : "",
      placeholder: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        m(e)
      },
      onBlur: E,
      autosize: !0
    }), null != f && "" !== f ? (0, n.jsx)(s.Text, {
      className: c.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: f
    }) : null]
  })
}