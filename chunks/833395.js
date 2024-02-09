"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), n("808653"), n("424973");
var l = n("884691"),
  i = (e, t) => {
    let [n, i] = l.useState(-1), a = l.useRef(-1);
    return l.useEffect(() => {
      let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
      i(t.length), a.current = t.length
    }, [e, a, i]), l.useEffect(() => {
      0 === n && t()
    }, [n, t]), {
      pending: n,
      pendingRef: a,
      setPending: i
    }
  }