"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("866227"),
  i = n.n(s),
  u = n("77078"),
  c = n("414943"),
  d = n("782340"),
  f = n("283764");
let p = i().localeData().months(),
  A = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  E = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: p[e]
  })),
  _ = /[a-zA-Z0-9]/;

function m(e) {
  let {
    options: t,
    selectOption: n,
    children: r
  } = e, [o, s] = l.useState("");
  l.useEffect(() => {
    if ("" !== o) {
      let e = setTimeout(() => s(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [o, s]);
  let i = l.useCallback(e => {
    if (_.test(e.key)) {
      let a = "".concat(o).concat(e.key.toLowerCase()),
        l = t.find(e => e.label.toLowerCase().startsWith(a));
      null != l && n(l.value), s(a)
    }
  }, [n, s, o, t]);
  return (0, a.jsx)("div", {
    onKeyDown: i,
    children: r
  })
}

function h() {
  let e = i().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    n = e.indexOf("M"),
    a = e.indexOf("Y");
  return (-1 === t || -1 === n || -1 === a) && (t = 0, n = 1, a = 2), [{
    index: t,
    type: "day"
  }, {
    index: n,
    type: "month"
  }, {
    index: a,
    type: "year"
  }].sort((e, t) => e.index < t.index ? -1 : 1)
}
let v = l.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: r,
    onChange: s,
    onPopulated: p,
    error: _,
    autoFocus: v,
    required: g
  } = e, {
    day: T,
    setDay: y,
    month: S,
    setMonth: G,
    year: b,
    setYear: N
  } = function(e) {
    let t = null,
      n = null,
      a = null;
    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
    let [r, o] = l.useState(t), [s, i] = l.useState(n), [u, c] = l.useState(a);
    return {
      day: r,
      setDay: o,
      month: s,
      setMonth: i,
      year: u,
      setYear: c
    }
  }(n), C = l.useMemo(() => null != T && null != S && null != b ? i("".concat(T, "/").concat(S, "/").concat(b), "DD/MM/YYYY") : null, [T, S, b]);
  l.useEffect(() => {
    s((null == C ? void 0 : C.isValid()) ? C : null)
  }, [C, s]);
  let O = _;
  null != C && !C.isValid() && (O = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let M = function() {
      let e = new Date().getFullYear(),
        t = l.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return l.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [R, x] = l.useState(v ? 0 : -1),
    w = l.useRef(null),
    D = l.useRef(null),
    U = l.useRef(null),
    k = l.useMemo(h, []),
    I = l.useCallback(() => {
      var e, t, n, a;
      switch (null === (e = k[R]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = w.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (n = D.current) || void 0 === n || n.focus();
          break;
        case "year":
          null === (a = U.current) || void 0 === a || a.focus()
      }
    }, [R, w, D, U, k]);
  l.useEffect(() => {
    setTimeout(I, 500)
  }, []), l.useEffect(() => {
    if (R >= k.length) {
      null == p || p();
      return
    }
    I()
  }, [R, I]);
  let F = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = k[e];
    switch (t) {
      case "day":
        F.push({
          key: "day",
          input: (0, a.jsx)(m, {
            options: A,
            selectOption: y,
            children: (0, a.jsx)(c.default, {
              ref: w,
              className: f.inputDay,
              "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, a.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_DAY
              }),
              options: A,
              value: T,
              onChange: t => {
                let {
                  value: n
                } = t;
                y(n), x(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        F.push({
          key: "month",
          input: (0, a.jsx)(m, {
            options: E,
            selectOption: G,
            children: (0, a.jsx)(c.default, {
              ref: D,
              className: f.inputMonth,
              "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, a.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_MONTH
              }),
              options: E,
              value: S,
              onChange: t => {
                let {
                  value: n
                } = t;
                G(n), x(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        F.push({
          key: "year",
          input: (0, a.jsx)(m, {
            options: M,
            selectOption: N,
            children: (0, a.jsx)(c.default, {
              ref: U,
              className: f.inputYear,
              "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, a.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_YEAR
              }),
              options: M,
              value: b,
              onChange: t => {
                let {
                  value: n
                } = t;
                N(n), x(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, a.jsxs)("fieldset", {
    className: o(f.container, r),
    children: [(0, a.jsx)(u.FormTitle, {
      tag: "legend",
      required: g,
      error: O,
      children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, a.jsx)("div", {
      className: f.inputs,
      children: F.map((e, t) => {
        let {
          key: n,
          input: l
        } = e;
        return (0, a.jsx)("div", {
          tabIndex: t + 1,
          className: f[n],
          children: l
        }, n)
      })
    })]
  })
});
var g = v