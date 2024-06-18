"use strict";
n.d(t, {
  $x: function() {
    return r
  },
  GV: function() {
    return i
  },
  S$: function() {
    return g
  },
  Vn: function() {
    return o
  },
  tu: function() {
    return m
  }
});
var s = n(470079),
  l = n(31775),
  a = n.n(l);
let r = 0,
  i = 4,
  o = 4,
  c = "absolute",
  d = (e, t, n, s) => {
    if (0 === n) return [];
    if (1 === n) return [{
      width: e,
      height: t,
      top: 0,
      left: 0,
      position: c
    }];
    if (2 === n) {
      let n = Math.ceil((e - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: t
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: t
      }]
    }
    if (3 === n) {
      let n = Math.ceil((e - s) / 2),
        l = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: t
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: n + s,
        position: c,
        width: n,
        height: l
      }]
    } else {
      let n = Math.ceil((e - s) / 2),
        l = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: 0,
        position: c,
        width: n,
        height: l
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: n + s,
        position: c,
        width: n,
        height: l
      }]
    }
  },
  u = new(a())({
    max: 100
  });

function m(e) {
  let {
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e;
  return s.useMemo(() => (function(e) {
    var t, n, s;
    let {
      numAttachments: l,
      containerWidth: a,
      containerHeight: r
    } = e;
    let i = (t = l, n = a, s = r, "".concat(t, "-").concat(n, "-").concat(s)),
      o = u.get(i);
    if (null != o) return o;
    {
      let e = d(a, r, l, 4);
      return u.set(i, e), e
    }
  })({
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  }), [t, n, l])
}

function h(e) {
  return e.map((t, n) => ({
    minWidth: 2 * e[n].width,
    minHeight: 2 * e[n].height,
    maxWidth: 2 * e[n].width,
    maxHeight: 2 * e[n].height
  }))
}

function g(e) {
  let {
    imageContainerStyles: t,
    containerWidth: n,
    containerHeight: l
  } = e, a = s.useRef(h(t)), r = s.useRef(n), i = s.useRef(l), o = n > r.current + 100, c = l > i.current + 100;
  return (o || c) && (a.current = h(t)), a.current
}