"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("77078"),
  r = n("354023"),
  o = n("782340"),
  u = n("911011"),
  d = n("926622");
let c = r.default.getMaxAgeOptions;

function f(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: i
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(a.FormItem, {
    className: s(d.marginTop20, u.switch),
    children: (0, l.jsx)(a.FormSwitch, {
      value: t,
      onChange: e => i(e),
      note: o.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: o.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let g = r.default.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: i,
    maxUses: r,
    temporary: h,
    onGenerateNewLink: I,
    onToggleTemporary: E,
    onSelectMaxAge: m,
    onSelectMaxUses: v
  } = e, p = c.find(e => e.value === i), T = g.find(e => e.value === r);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: I,
      children: [(0, l.jsx)(a.FormItem, {
        title: o.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(a.SingleSelect, {
          value: null !== (t = null == p ? void 0 : p.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: m,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(a.FormItem, {
        title: o.default.Messages.MAX_NUMBER_OF_USES,
        className: s(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(a.SingleSelect, {
          value: null == T ? void 0 : T.value,
          options: g,
          onChange: v
        })
      }), (0, l.jsx)(f, {
        temporary: h,
        shouldHide: n,
        onToggleTemporary: E
      })]
    })
  })
}