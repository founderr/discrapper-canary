"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("354023"),
  u = n("782340"),
  o = n("476057"),
  d = n("890957");
let c = r.default.getMaxAgeOptions;

function f(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: i
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(s.FormItem, {
    className: a(d.marginTop20, o.switch),
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
let h = r.default.getMaxUsesOptions;

function I(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: i,
    maxUses: r,
    temporary: I,
    onGenerateNewLink: g,
    onToggleTemporary: E,
    onSelectMaxAge: _,
    onSelectMaxUses: p
  } = e, v = c.find(e => e.value === i), m = h.find(e => e.value === r);
  return (0, l.jsx)("div", {
    className: o.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: g,
      children: [(0, l.jsx)(s.FormItem, {
        title: u.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(s.SingleSelect, {
          value: null !== (t = null == v ? void 0 : v.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: _,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(s.FormItem, {
        title: u.default.Messages.MAX_NUMBER_OF_USES,
        className: a(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(s.SingleSelect, {
          value: null == m ? void 0 : m.value,
          options: h,
          onChange: p
        })
      }), (0, l.jsx)(f, {
        temporary: I,
        shouldHide: n,
        onToggleTemporary: E
      })]
    })
  })
}