"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("424973");
var s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  l = n.n(r),
  i = n("866227"),
  o = n.n(i),
  u = n("77078"),
  d = n("414943"),
  c = n("782340"),
  E = n("283764");
let f = o().localeData().months(),
  h = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  _ = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: f[e]
  })),
  g = /[a-zA-Z0-9]/;

function m(e) {
  let {
    options: t,
    selectOption: n,
    children: r
  } = e, [l, i] = a.useState("");
  a.useEffect(() => {
    if ("" !== l) {
      let e = setTimeout(() => i(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [l, i]);
  let o = a.useCallback(e => {
    if (g.test(e.key)) {
      let s = "".concat(l).concat(e.key.toLowerCase()),
        a = t.find(e => e.label.toLowerCase().startsWith(s));
      null != a && n(a.value), i(s)
    }
  }, [n, i, l, t]);
  return (0, s.jsx)("div", {
    onKeyDown: o,
    children: r
  })
}

function p() {
  let e = o().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    n = e.indexOf("M"),
    s = e.indexOf("Y");
  return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
    index: t,
    type: "day"
  }, {
    index: n,
    type: "month"
  }, {
    index: s,
    type: "year"
  }].sort((e, t) => e.index < t.index ? -1 : 1)
}
let T = a.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: r,
    onChange: i,
    onPopulated: f,
    error: g,
    autoFocus: T,
    required: R
  } = e, {
    day: A,
    setDay: S,
    month: I,
    setMonth: N,
    year: L,
    setYear: C
  } = function(e) {
    let t = null,
      n = null,
      s = null;
    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
    let [r, l] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
    return {
      day: r,
      setDay: l,
      month: i,
      setMonth: o,
      year: u,
      setYear: d
    }
  }(n), O = a.useMemo(() => null != A && null != I && null != L ? o("".concat(A, "/").concat(I, "/").concat(L), "DD/MM/YYYY") : null, [A, I, L]);
  a.useEffect(() => {
    i((null == O ? void 0 : O.isValid()) ? O : null)
  }, [O, i]);
  let M = g;
  null != O && !O.isValid() && (M = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let v = function() {
      let e = new Date().getFullYear(),
        t = a.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return a.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [x, D] = a.useState(T ? 0 : -1),
    U = a.useRef(null),
    b = a.useRef(null),
    G = a.useRef(null),
    y = a.useMemo(p, []),
    P = a.useCallback(() => {
      var e, t, n, s;
      switch (null === (e = y[x]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = U.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (n = b.current) || void 0 === n || n.focus();
          break;
        case "year":
          null === (s = G.current) || void 0 === s || s.focus()
      }
    }, [x, U, b, G, y]);
  a.useEffect(() => {
    setTimeout(P, 500)
  }, []), a.useEffect(() => {
    if (x >= y.length) {
      null == f || f();
      return
    }
    P()
  }, [x, P]);
  let B = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = y[e];
    switch (t) {
      case "day":
        B.push({
          key: "day",
          input: (0, s.jsx)(m, {
            options: h,
            selectOption: S,
            children: (0, s.jsx)(d.default, {
              ref: U,
              className: E.inputDay,
              "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_DAY
              }),
              options: h,
              value: A,
              onChange: t => {
                let {
                  value: n
                } = t;
                S(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        B.push({
          key: "month",
          input: (0, s.jsx)(m, {
            options: _,
            selectOption: N,
            children: (0, s.jsx)(d.default, {
              ref: b,
              className: E.inputMonth,
              "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_MONTH
              }),
              options: _,
              value: I,
              onChange: t => {
                let {
                  value: n
                } = t;
                N(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        B.push({
          key: "year",
          input: (0, s.jsx)(m, {
            options: v,
            selectOption: C,
            children: (0, s.jsx)(d.default, {
              ref: G,
              className: E.inputYear,
              "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_YEAR
              }),
              options: v,
              value: L,
              onChange: t => {
                let {
                  value: n
                } = t;
                C(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, s.jsxs)("fieldset", {
    className: l(E.container, r),
    children: [(0, s.jsx)(u.FormTitle, {
      tag: "legend",
      required: R,
      error: M,
      children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, s.jsx)("div", {
      className: E.inputs,
      children: B.map((e, t) => {
        let {
          key: n,
          input: a
        } = e;
        return (0, s.jsx)("div", {
          tabIndex: t + 1,
          className: E[n],
          children: a
        }, n)
      })
    })]
  })
});
var R = T