"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("808388"),
  u = n("782340"),
  d = n("705542");

function c(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, l.jsxs)("div", {
    className: i(d.container, {
      [d.containerHide]: n
    }),
    children: [(0, l.jsx)("div", {
      className: d.notice,
      children: (0, l.jsx)(r.Text, {
        className: d.label,
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      })
    }), (0, l.jsx)("div", {
      className: d.noticeArrow
    })]
  })
}

function f(e) {
  let [t, n] = a.useState(), [s, i] = a.useState(), [r, d] = a.useState(!1), [f, h] = a.useState(!1), {
    enabled: m
  } = (0, o.useRoleSubscriptionMaxTiersExperiment)(e);
  a.useEffect(() => {
    m && null != t && null != s ? d(t < s) : d(!1)
  }, [m, t, s]);
  let p = a.useMemo(() => r ? (0, l.jsx)(c, {
    text: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_LISTINGS_SCROLLABLE_NOTICE,
    hasScrolled: f
  }) : null, [r, f]);
  return {
    horizontalScrollNotice: p,
    handleScroll: () => h(!0),
    handleSetScrollerRef: e => {
      var t;
      return i(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
  }
}