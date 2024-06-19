a(47120);
var t = a(735250),
  i = a(470079),
  l = a(120356),
  s = a.n(l),
  r = a(481060),
  c = a(981631),
  o = a(689938),
  d = a(870786);
n.Z = i.forwardRef(function(e, n) {
  let {
    query: a,
    canShowCta: l = !1,
    onChange: u,
    onSubmit: g,
    className: m
  } = e, [_, C] = i.useState(!1);
  return (0, t.jsx)(r.SearchBox, {
    ref: n,
    className: s()(d.search, m),
    label: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    placeholder: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    searchTerm: a,
    cta: l && _ && a.length > 0 ? o.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
    onChange: u,
    onClear: () => u(""),
    onFocus: () => C(!0),
    onBlur: () => C(!1),
    onKeyPress: e => {
      e.charCode === c.yXg.ENTER && (null == g || g())
    },
    autoFocus: !0
  })
})