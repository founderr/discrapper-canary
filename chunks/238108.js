t(47120);
var n = t(470079);
s.Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
    [s, t] = n.useState(!1),
    [a, r] = n.useState(0),
    [i, l] = n.useState(!1),
    [o, _] = n.useState(0);
  return n.useEffect(() => {
    a >= e && (l(!0), _(Math.floor(a / e)));
    let s = setTimeout(() => {
      r(0)
    }, 1e3);
    return () => clearTimeout(s)
  }, [a, e]), n.useEffect(() => {
    if (!s) {
      let e = setTimeout(() => {
        l(!1), _(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    r(e => e + 1)
  }, [s]), {
    onHover: () => {
      t(!0)
    },
    onUnhover: () => {
      t(!1)
    },
    isEasterEggTriggered: i,
    easterEggLevel: o
  }
}