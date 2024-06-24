n(47120);
var t = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(481060),
  c = n(981631),
  o = n(689938),
  d = n(870786);
a.Z = i.forwardRef(function(e, a) {
  let {
    query: n,
    canShowCta: l = !1,
    onChange: u,
    onSubmit: g,
    className: m
  } = e, [_, C] = i.useState(!1);
  return (0, t.jsx)(r.SearchBox, {
    ref: a,
    className: s()(d.search, m),
    label: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    placeholder: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    searchTerm: n,
    cta: l && _ && n.length > 0 ? o.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
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