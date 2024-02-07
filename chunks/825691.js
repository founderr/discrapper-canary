"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  s = n("77078"),
  a = n("354023"),
  u = n("782340"),
  o = n("911011"),
  d = n("926622");
let c = a.default.getMaxAgeOptions;

function f(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: i
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(s.FormItem, {
    className: r(d.marginTop20, o.switch),
    children: (0, l.jsx)(s.FormSwitch, {
      value: t,
      onChange: e => i(e),
      note: u.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: u.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let h = a.default.getMaxUsesOptions;

function g(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: i,
    maxUses: a,
    temporary: g,
    onGenerateNewLink: I,
    onToggleTemporary: v,
    onSelectMaxAge: E,
    onSelectMaxUses: _
  } = e, m = c.find(e => e.value === i), p = h.find(e => e.value === a);
  return (0, l.jsx)("div", {
    className: o.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: I,
      children: [(0, l.jsx)(s.FormItem, {
        title: u.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(s.SingleSelect, {
          value: null !== (t = null == m ? void 0 : m.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: E,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(s.FormItem, {
        title: u.default.Messages.MAX_NUMBER_OF_USES,
        className: r(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(s.SingleSelect, {
          value: null == p ? void 0 : p.value,
          options: h,
          onChange: _
        })
      }), (0, l.jsx)(f, {
        temporary: g,
        shouldHide: n,
        onToggleTemporary: v
      })]
    })
  })
}