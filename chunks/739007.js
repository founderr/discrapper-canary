"use strict";
n.d(t, {
  _: function() {
    return l
  }
});
var i = n(735250),
  r = n(470079),
  s = n(561779),
  o = n(83622);
let a = e => "".concat(e.toFixed(0), "%"),
  l = r.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: l = 0,
      maxValue: u = 100,
      onChange: _,
      renderValue: c = a,
      "aria-label": d
    } = e, E = r.useRef(null);
    return r.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
      },
      blur: () => {
        var e;
        return null === (e = E.current) || void 0 === e ? void 0 : e.blur()
      },
      activate: () => !1
    }), []), (0, i.jsx)("div", {
      className: o.sliderContainer,
      children: (0, i.jsx)(s.i, {
        ref: E,
        mini: !0,
        handleSize: 16,
        className: o.slider,
        initialValue: n,
        minValue: l,
        maxValue: u,
        onValueChange: _,
        asValueChanges: _,
        onValueRender: c,
        orientation: "horizontal",
        "aria-label": d
      })
    })
  })