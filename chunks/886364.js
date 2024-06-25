var s = n(735250);
n(470079);
t.Z = e => {
  let {
    id: t,
    startColor: n,
    stopColor: i,
    color: l,
    stop: a
  } = e;
  return (0, s.jsxs)("linearGradient", {
    id: t,
    children: [(0, s.jsx)("stop", {
      offset: "0",
      stopColor: n
    }), (0, s.jsx)("stop", {
      offset: a,
      stopColor: i
    }), (0, s.jsx)("stop", {
      offset: a,
      stopColor: l
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: l
    })]
  })
}