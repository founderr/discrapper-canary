s(47120);
var n = s(470079);
t.Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
    [t, s] = n.useState(!1),
    [a, i] = n.useState(0),
    [r, l] = n.useState(!1),
    [o, c] = n.useState(0);
  return n.useEffect(() => {
    a >= e && (l(!0), c(Math.floor(a / e)));
    let t = setTimeout(() => {
      i(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [a, e]), n.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        l(!1), c(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    i(e => e + 1)
  }, [t]), {
    onHover: () => {
      s(!0)
    },
    onUnhover: () => {
      s(!1)
    },
    isEasterEggTriggered: r,
    easterEggLevel: o
  }
}