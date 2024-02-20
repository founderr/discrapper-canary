"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("866227"),
  a = n.n(s),
  o = n("900419"),
  l = n.n(o),
  u = n("446674"),
  c = n("915639");
n("4828");
var d = n("413713");

function p(e) {
  let {
    value: t = a().local(),
    minDate: n,
    maxDate: s,
    onSelect: o,
    calendarClassName: p,
    autoFocus: h,
    onClickOutside: f
  } = e, E = r.useCallback((e, t) => {
    null == o || o(a(e), t)
  }, [o]), _ = r.useMemo(() => t.toDate(), [t]), m = r.useMemo(() => null == s ? void 0 : s.toDate(), [s]), S = r.useMemo(() => null == n ? void 0 : n.toDate(), [n]), g = (0, u.useStateFromStores)([c.default], () => c.default.locale), T = r.useRef(null), I = r.useCallback(e => {
    let t = e.currentTarget;
    t.classList.contains("react-datepicker__day") && setTimeout(() => {
      var e, n;
      if (null === (e = T.current) || void 0 === e ? void 0 : e.contains(t)) return;
      let i = null === (n = T.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
      null != i && i.focus()
    }, 100)
  }, []);
  return (0, i.jsx)("div", {
    ref: T,
    className: d.calendarPicker,
    children: (0, i.jsx)(l, {
      calendarClassName: p,
      selected: _,
      onChange: E,
      autoFocus: h,
      fixedHeight: !0,
      inline: !0,
      locale: g,
      maxDate: m,
      minDate: S,
      onKeyDown: I,
      onClickOutside: f
    })
  })
}