"use strict";
l.r(t), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("408814"),
  c = l("981631"),
  o = l("689938"),
  d = l("834191");
t.default = a.forwardRef(function(e, t) {
  let {
    query: l,
    canShowCta: n = !1,
    onChange: u,
    onSubmit: _,
    className: m
  } = e, [p, f] = a.useState(!1);
  return (0, i.jsx)(r.default, {
    ref: t,
    className: s()(d.search, m),
    label: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    placeholder: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
    searchTerm: l,
    cta: n && p && l.length > 0 ? o.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
    onChange: u,
    onClear: () => u(""),
    onFocus: () => f(!0),
    onBlur: () => f(!1),
    onKeyPress: e => {
      e.charCode === c.KeyboardKeys.ENTER && (null == _ || _())
    },
    autoFocus: !0
  })
})