"use strict";
n.r(t), n.d(t, {
  CalendarPicker: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(913527),
  o = n.n(s),
  a = n(578807),
  l = n.n(a),
  u = n(442837),
  _ = n(706454);
n(17908);
var c = n(507888);

function d(e) {
  let {
    value: t = o()().local(),
    minDate: n,
    maxDate: s,
    onSelect: a,
    calendarClassName: d,
    autoFocus: E,
    onClickOutside: I
  } = e, T = r.useCallback((e, t) => {
    null == a || a(o()(e), t)
  }, [a]), h = r.useMemo(() => t.toDate(), [t]), f = r.useMemo(() => null == s ? void 0 : s.toDate(), [s]), S = r.useMemo(() => null == n ? void 0 : n.toDate(), [n]), A = (0, u.e7)([_.default], () => _.default.locale), N = r.useRef(null), m = r.useCallback(e => {
    let t = e.currentTarget;
    if (!!t.classList.contains("react-datepicker__day")) setTimeout(() => {
      var e, n;
      if (null === (e = N.current) || void 0 === e ? void 0 : e.contains(t)) return;
      let i = null === (n = N.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
      if (null != i) i.focus()
    }, 100)
  }, []);
  return (0, i.jsx)("div", {
    ref: N,
    className: c.calendarPicker,
    children: (0, i.jsx)(l(), {
      calendarClassName: d,
      selected: h,
      onChange: T,
      autoFocus: E,
      fixedHeight: !0,
      inline: !0,
      locale: A,
      maxDate: f,
      minDate: S,
      onKeyDown: m,
      onClickOutside: I
    })
  })
}
t.default = d