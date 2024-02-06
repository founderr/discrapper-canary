"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  a = n.n(s),
  i = n("77078"),
  r = n("354023"),
  u = n("782340"),
  o = n("911011"),
  d = n("926622");
let c = r.default.getMaxAgeOptions;

function f(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: s
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(i.FormItem, {
    className: a(d.marginTop20, o.switch),
    children: (0, l.jsx)(i.FormSwitch, {
      value: t,
      onChange: e => s(e),
      note: u.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: u.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let h = r.default.getMaxUsesOptions;

function g(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: s,
    maxUses: r,
    temporary: g,
    onGenerateNewLink: I,
    onToggleTemporary: E,
    onSelectMaxAge: v,
    onSelectMaxUses: m
  } = e, p = c.find(e => e.value === s), _ = h.find(e => e.value === r);
  return (0, l.jsx)("div", {
    className: o.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: I,
      children: [(0, l.jsx)(i.FormItem, {
        title: u.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(i.SingleSelect, {
          value: null !== (t = null == p ? void 0 : p.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: v,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(i.FormItem, {
        title: u.default.Messages.MAX_NUMBER_OF_USES,
        className: a(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(i.SingleSelect, {
          value: null == _ ? void 0 : _.value,
          options: h,
          onChange: m
        })
      }), (0, l.jsx)(f, {
        temporary: g,
        shouldHide: n,
        onToggleTemporary: E
      })]
    })
  })
}