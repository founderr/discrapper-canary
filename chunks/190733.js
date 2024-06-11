"use strict";
a.r(t), a("47120");
var l = a("735250"),
  i = a("470079"),
  n = a("120356"),
  s = a.n(n),
  r = a("481060"),
  c = a("981631"),
  u = a("689938"),
  d = a("603385");
t.default = i.forwardRef(function(e, t) {
  let {
    query: a,
    canShowCta: n = !1,
    onChange: o,
    onSubmit: g,
    className: m
  } = e, [_, p] = i.useState(!1);
  return (0, l.jsx)(r.SearchBox, {
    ref: t,
    className: s()(d.search, m),
    label: u.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    placeholder: u.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    searchTerm: a,
    cta: n && _ && a.length > 0 ? u.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
    onChange: o,
    onClear: () => o(""),
    onFocus: () => p(!0),
    onBlur: () => p(!1),
    onKeyPress: e => {
      e.charCode === c.KeyboardKeys.ENTER && (null == g || g())
    },
    autoFocus: !0
  })
})