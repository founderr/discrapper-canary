t(47120);
var a = t(735250),
  r = t(470079),
  i = t(481060),
  s = t(881052),
  o = t(484455),
  l = t(592286),
  c = t(689938),
  d = t(944309);
n.Z = function(e) {
  let {
guildId: n,
onSave: t,
formDescription: u
  } = e, [m, C] = r.useState(null), [f, _] = r.useState(u), h = r.useRef(!1), x = r.useRef(!1);
  r.useEffect(() => () => {
x.current = !0;
  }, []);
  let g = r.useCallback(async () => {
if (!h.current) {
  C(null);
  try {
    await t(n, f);
  } catch (e) {
    if (x.current)
      return;
    C(new s.Hx(e).getAnyErrorMessage());
  } finally {
    if (x.current)
      return;
    h.current = !1;
  }
}
  }, [
f,
n,
t
  ]);
  return (0, a.jsxs)(o.Z, {
title: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
children: [
  (0, a.jsx)(i.TextArea, {
    className: d.fieldBackground,
    maxLength: l.Us,
    value: null != f ? f : '',
    placeholder: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
    onChange: e => {
      _(e);
    },
    onBlur: g,
    autosize: !0
  }),
  null != m && '' !== m ? (0, a.jsx)(i.Text, {
    className: d.errorText,
    variant: 'text-xs/normal',
    color: 'text-danger',
    children: m
  }) : null
]
  });
};