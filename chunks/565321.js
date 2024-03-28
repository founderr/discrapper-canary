"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("442837"),
  s = i("481060"),
  r = i("881052"),
  o = i("863249"),
  d = i("944163"),
  c = i("484455"),
  u = i("592286"),
  f = i("689938"),
  E = i("482249");
t.default = function(e) {
  var t;
  let {
    guildId: i
  } = e, I = (0, n.useStateFromStores)([d.default], () => d.default.get(i)), [T, m] = l.useState(null), [_, x] = l.useState(null !== (t = null == I ? void 0 : I.description) && void 0 !== t ? t : ""), h = l.useRef(!1), p = l.useRef(!1);
  l.useEffect(() => () => {
    p.current = !0
  }, []);
  let M = l.useCallback(async () => {
    if (!h.current) {
      m(null);
      try {
        await o.default.updateVerificationFormDescription(i, _)
      } catch (e) {
        if (p.current) return;
        m(new r.APIError(e).getAnyErrorMessage())
      } finally {
        if (p.current) return;
        h.current = !1
      }
    }
  }, [_, i]);
  return (0, a.jsxs)(c.default, {
    title: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(s.TextArea, {
      className: E.fieldBackground,
      maxLength: u.MAX_DESCRIPTION_LENGTH,
      value: null != _ ? _ : "",
      placeholder: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        x(e)
      },
      onBlur: M,
      autosize: !0
    }), null != T && "" !== T ? (0, a.jsx)(s.Text, {
      className: E.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: T
    }) : null]
  })
}