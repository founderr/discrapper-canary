n(47120), n(653041);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  o = n(913527),
  l = n.n(o),
  c = n(481060),
  u = n(987134),
  d = n(689938),
  h = n(967794);
let E = l()().localeData().months(),
  _ = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  g = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: E[e]
  })),
  p = /[a-zA-Z0-9]/;

function f(e) {
  let {
    options: t,
    selectOption: n,
    children: i
  } = e, [a, o] = r.useState("");
  r.useEffect(() => {
    if ("" !== a) {
      let e = setTimeout(() => o(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [a, o]);
  let l = r.useCallback(e => {
    if (p.test(e.key)) {
      let s = "".concat(a).concat(e.key.toLowerCase()),
        r = t.find(e => e.label.toLowerCase().startsWith(s));
      null != r && n(r.value), o(s)
    }
  }, [n, o, a, t]);
  return (0, s.jsx)("div", {
    onKeyDown: l,
    children: i
  })
}

function m() {
  let e = l()().localeData().longDateFormat("L"),
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
let N = r.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: i,
    onChange: o,
    onPopulated: E,
    error: p,
    autoFocus: N,
    required: I
  } = e, {
    day: A,
    setDay: R,
    month: T,
    setMonth: C,
    year: S,
    setYear: x
  } = function(e) {
    let t = null,
      n = null,
      s = null;
    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
    let [i, a] = r.useState(t), [o, l] = r.useState(n), [c, u] = r.useState(s);
    return {
      day: i,
      setDay: a,
      month: o,
      setMonth: l,
      year: c,
      setYear: u
    }
  }(n), O = r.useMemo(() => null != A && null != T && null != S ? l()("".concat(A, "/").concat(T, "/").concat(S), "DD/MM/YYYY") : null, [A, T, S]);
  r.useEffect(() => {
    o((null == O ? void 0 : O.isValid()) ? O : null)
  }, [O, o]);
  let v = p;
  null != O && !O.isValid() && (v = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let Z = function() {
      let e = new Date().getFullYear(),
        t = r.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return r.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [L, b] = r.useState(N ? 0 : -1),
    M = r.useRef(null),
    y = r.useRef(null),
    D = r.useRef(null),
    P = r.useMemo(m, []),
    w = r.useCallback(() => {
      var e, t, n, s;
      switch (null === (e = P[L]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = M.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (n = y.current) || void 0 === n || n.focus();
          break;
        case "year":
          null === (s = D.current) || void 0 === s || s.focus()
      }
    }, [L, M, y, D, P]);
  r.useEffect(() => {
    setTimeout(w, 500)
  }, []), r.useEffect(() => {
    if (L >= P.length) {
      null == E || E();
      return
    }
    w()
  }, [L, w]);
  let j = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = P[e];
    switch (t) {
      case "day":
        j.push({
          key: "day",
          input: (0, s.jsx)(f, {
            options: _,
            selectOption: R,
            children: (0, s.jsx)(u.Z, {
              ref: M,
              className: h.__invalid_inputDay,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: u.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_DAY
              }),
              options: _,
              value: A,
              onChange: t => {
                let {
                  value: n
                } = t;
                R(n), b(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        j.push({
          key: "month",
          input: (0, s.jsx)(f, {
            options: g,
            selectOption: C,
            children: (0, s.jsx)(u.Z, {
              ref: y,
              className: h.__invalid_inputMonth,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: u.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_MONTH
              }),
              options: g,
              value: T,
              onChange: t => {
                let {
                  value: n
                } = t;
                C(n), b(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        j.push({
          key: "year",
          input: (0, s.jsx)(f, {
            options: Z,
            selectOption: x,
            children: (0, s.jsx)(u.Z, {
              ref: D,
              className: h.__invalid_inputYear,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: u.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_YEAR
              }),
              options: Z,
              value: S,
              onChange: t => {
                let {
                  value: n
                } = t;
                x(n), b(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, s.jsxs)("fieldset", {
    className: a()(h.container, i),
    children: [(0, s.jsx)(c.FormTitle, {
      tag: "legend",
      required: I,
      error: v,
      children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, s.jsx)("div", {
      className: h.inputs,
      children: j.map((e, t) => {
        let {
          key: n,
          input: r
        } = e;
        return (0, s.jsx)("div", {
          tabIndex: t + 1,
          className: h[n],
          children: r
        }, n)
      })
    })]
  })
});
t.Z = N