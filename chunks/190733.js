"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  r = a("408814"),
  c = a("981631"),
  u = a("689938"),
  o = a("603385");
t.default = n.forwardRef(function(e, t) {
  let {
    query: a,
    canShowCta: s = !1,
    onChange: d,
    onSubmit: m,
    className: g
  } = e, [p, _] = n.useState(!1);
  return (0, l.jsx)(r.default, {
    ref: t,
    className: i()(o.search, g),
    label: u.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    placeholder: u.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    searchTerm: a,
    cta: s && p && a.length > 0 ? u.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
    onChange: d,
    onClear: () => d(""),
    onFocus: () => _(!0),
    onBlur: () => _(!1),
    onKeyPress: e => {
      e.charCode === c.KeyboardKeys.ENTER && (null == m || m())
    },
    autoFocus: !0
  })
})