"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("124299"),
  u = n("154462");
let o = 16 / 9;

function d(e, t) {
  return Math.floor((t - e) / (8 + e)) + 1
}

function c(e, t, n) {
  let l = t - e;
  for (; l > 0;) {
    let t = e,
      a = Math.floor(l / 2);
    n(t += a) ? (e = t + 1, l -= a + 1) : l = a
  }
  return e
}

function f(e) {
  var t;
  let {
    className: n,
    children: s,
    keyExtractor: f,
    paddingTop: h = 0,
    paddingBottom: m = 0
  } = e, [p, E] = a.useState({
    width: 0,
    height: 0
  }), {
    width: g,
    height: C
  } = p, S = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, _ = g - 16, I = C - (h + m), {
    tileStyle: T,
    tileWidth: v,
    rows: x,
    columns: N
  } = a.useMemo(() => (function(e, t, n) {
    let {
      rows: l,
      columns: a,
      tileWidth: s
    } = function(e, t, n) {
      let l;
      let a = Math.floor(t / 25);
      l = e > 25 ? c(a, t, e => {
        let l = d(e, t),
          a = function(e, t) {
            let n = e / o;
            return Math.ceil((t - n) / (8 + n)) + 1
          }(e, n);
        return l * a > 25
      }) : c(a, t, l => {
        let a = d(l, t),
          s = function(e, t) {
            let n = e / o;
            return Math.floor((t - n) / (8 + n)) + 1
          }(l, n);
        return a * s >= e
      }) - 1;
      let s = d(l, t),
        i = Math.ceil(e / s);
      return {
        tileWidth: l,
        columns: Math.max(1, s),
        rows: i
      }
    }(e, t, n);
    return {
      tileStyle: {
        width: s
      },
      tileWidth: s,
      rows: l,
      columns: a
    }
  })(S, _, I), [S, _, I]), A = N + 1, M = A * v + (A - 1) * 8, R = M <= g, j = Math.floor(v / o) + 8, L = Math.max(0, I - j * x) / 2;
  return (0, l.jsx)(r.default, {
    fade: !0,
    className: n,
    listPadding: [h + L, 0, m + L - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * N;
      return (0, l.jsx)("div", {
        className: u.row,
        children: null == s ? void 0 : null === (t = s.slice(n, n + N)) || void 0 === t ? void 0 : t.map((e, t) => {
          var a;
          let s = n + t;
          return (0, l.jsx)("div", {
            style: T,
            className: i(u.tile, {
              [u.padColumn]: R,
              [u.noVerticalMargin]: s >= (x - 1) * N,
              [u.noHorizontalMargin]: (s + 1) % N == 0 || s === S - 1
            }),
            children: (0, l.jsx)("div", {
              className: u.tileSizer,
              children: e(v)
            })
          }, null !== (a = null == f ? void 0 : f(s)) && void 0 !== a ? a : s)
        })
      }, e)
    },
    rowCount: x,
    rowCountBySection: [x],
    rowHeight: j,
    onResize: E
  })
}