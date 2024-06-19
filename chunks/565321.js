t(47120);
var a = t(735250),
  r = t(470079),
  s = t(481060),
  i = t(881052),
  o = t(484455),
  l = t(592286),
  c = t(689938),
  d = t(237261);
n.Z = function(e) {
  let {
    guildId: n,
    onSave: t,
    formDescription: u
  } = e, [m, h] = r.useState(null), [C, x] = r.useState(u), f = r.useRef(!1), E = r.useRef(!1);
  r.useEffect(() => () => {
    E.current = !0
  }, []);
  let T = r.useCallback(async () => {
    if (!f.current) {
      h(null);
      try {
        await t(n, C)
      } catch (e) {
        if (E.current) return;
        h(new i.Hx(e).getAnyErrorMessage())
      } finally {
        if (E.current) return;
        f.current = !1
      }
    }
  }, [C, n, t]);
  return (0, a.jsxs)(o.Z, {
    title: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
    children: [(0, a.jsx)(s.TextArea, {
      className: d.fieldBackground,
      maxLength: l.Us,
      value: null != C ? C : "",
      placeholder: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
      onChange: e => {
        x(e)
      },
      onBlur: T,
      autosize: !0
    }), null != m && "" !== m ? (0, a.jsx)(s.Text, {
      className: d.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: m
    }) : null]
  })
}