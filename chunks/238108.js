n(47120);
var s = n(470079);
t.Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
    [t, n] = s.useState(!1),
    [a, i] = s.useState(0),
    [r, l] = s.useState(!1),
    [o, c] = s.useState(0);
  return s.useEffect(() => {
    a >= e && (l(!0), c(Math.floor(a / e)));
    let t = setTimeout(() => {
      i(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [a, e]), s.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        l(!1), c(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    i(e => e + 1)
  }, [t]), {
    onHover: () => {
      n(!0)
    },
    onUnhover: () => {
      n(!1)
    },
    isEasterEggTriggered: r,
    easterEggLevel: o
  }
}