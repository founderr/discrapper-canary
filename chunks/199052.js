n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(695464),
  o = n(459);
let c = 16 / 9;

function u(e, t) {
  return Math.max(1, Math.floor((t - e) / (8 + e)) + 1)
}

function d(e, t, n) {
  let l = t - e;
  for (; l > 0;) {
    let t = e,
      i = Math.floor(l / 2);
    n(t += i) ? (e = t + 1, l -= i + 1) : l = i
  }
  return e
}

function h(e) {
  var t;
  let {
    className: n,
    children: s,
    keyExtractor: h,
    paddingTop: m = 0,
    paddingBottom: p = 0
  } = e, [E, g] = i.useState({
    width: 0,
    height: 0
  }), {
    width: f,
    height: C
  } = E, _ = null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0, I = f - 16, x = C - (m + p), {
    tileStyle: T,
    tileWidth: N,
    rows: Z,
    columns: S
  } = i.useMemo(() => (function(e, t, n) {
    let {
      rows: l,
      columns: i,
      tileWidth: s
    } = function(e, t, n) {
      let l;
      let i = Math.floor(t / 25);
      l = e > 25 ? d(i, t, e => {
        let l = u(e, t),
          i = function(e, t) {
            let n = e / c;
            return Math.ceil((t - n) / (8 + n)) + 1
          }(e, n);
        return l * i > 25
      }) : d(i, t, l => {
        let i = u(l, t),
          s = function(e, t) {
            let n = e / c;
            return Math.floor((t - n) / (8 + n)) + 1
          }(l, n);
        return i * s >= e
      }) - 1;
      let s = u(l, t),
        a = Math.ceil(e / s);
      return {
        tileWidth: l,
        columns: Math.max(1, s),
        rows: a
      }
    }(e, t, n);
    return {
      tileStyle: {
        width: s
      },
      tileWidth: s,
      rows: l,
      columns: i
    }
  })(_, I, x), [_, I, x]), v = S + 1, A = v * N + (v - 1) * 8 <= f, M = Math.floor(N / c) + 8, R = Math.max(0, x - M * Z) / 2;
  return (0, l.jsx)(r.Z, {
    fade: !0,
    className: n,
    listPadding: [m + R, 0, p + R - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * S;
      return (0, l.jsx)("div", {
        className: o.row,
        children: null == s ? void 0 : null === (t = s.slice(n, n + S)) || void 0 === t ? void 0 : t.map((e, t) => {
          var i;
          let s = n + t;
          return (0, l.jsx)("div", {
            style: T,
            className: a()(o.tile, {
              [o.padColumn]: A,
              [o.noVerticalMargin]: s >= (Z - 1) * S,
              [o.noHorizontalMargin]: (s + 1) % S == 0 || s === _ - 1
            }),
            children: (0, l.jsx)("div", {
              className: o.tileSizer,
              children: e(N)
            })
          }, null !== (i = null == h ? void 0 : h(s)) && void 0 !== i ? i : s)
        })
      }, e)
    },
    rowCount: Z,
    rowCountBySection: [Z],
    rowHeight: M,
    onResize: g
  })
}