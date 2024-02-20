"use strict";
n.r(t), n.d(t, {
  SegmentedControl: function() {
    return d
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("577776"),
  u = n("518434");

function c(e) {
  let {
    option: t,
    selected: n,
    onClick: s,
    look: c,
    className: d,
    selectedClassName: p
  } = e, h = {
    [function(e) {
      switch (e) {
        case "tab":
        default:
          return u.tabItemSelected;
        case "pill":
          return u.pillItemSelected
      }
    }(c)]: n
  };
  null != p && (h[p] = n);
  let f = r.useCallback(e => s(t, e), [s, t]);
  return (0, i.jsx)(o.Clickable, {
    className: a(function(e) {
      switch (e) {
        case "tab":
        default:
          return u.tabItem;
        case "pill":
          return u.pillItem
      }
    }(c), d, h),
    onClick: f,
    children: (0, i.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "none",
      children: t.name
    })
  })
}

function d(e) {
  let {
    options: t,
    value: n,
    onChange: s,
    look: o = "tab",
    className: l,
    optionClassName: d,
    selectedOptionClassName: p
  } = e, h = r.useCallback(e => {
    var t;
    let r = n === e.value;
    return (0, i.jsx)(c, {
      selected: r,
      option: e,
      look: o,
      onClick: s,
      className: d,
      selectedClassName: p
    }, null !== (t = e.key) && void 0 !== t ? t : String(e.value))
  }, [n, o, s, d, p]);
  return (0, i.jsx)("div", {
    className: a(function(e) {
      switch (e) {
        case "tab":
        default:
          return u.tabContainer;
        case "pill":
          return u.pillContainer
      }
    }(o), l),
    children: t.map(h)
  })
}