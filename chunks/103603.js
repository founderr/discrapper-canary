"use strict";
n.r(e), n.d(e, {
  fit: function() {
    return o
  },
  zoomFit: function() {
    return c
  },
  getRatio: function() {
    return d
  },
  getCoverRatio: function() {
    return f
  },
  makeCssUrlString: function() {
    return _
  },
  getPalette: function() {
    return E
  },
  getPaletteForAvatar: function() {
    return A
  },
  readFileAsBase64: function() {
    return I
  },
  dataUriFileSize: function() {
    return T
  },
  dataUrlToFile: function() {
    return m
  },
  dataUrlToBlob: function() {
    return g
  },
  isPNGAnimated: function() {
    return R
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var i = n("627445"),
  r = n.n(i),
  a = n("917351"),
  s = n.n(a),
  l = n("48648"),
  u = n.n(l);

function o(t) {
  let {
    width: e,
    height: n,
    maxWidth: i,
    maxHeight: r,
    minWidth: a = 0,
    minHeight: s = 0
  } = t;
  if (e !== i || n !== r) {
    let t = e > i ? i / e : 1;
    e = Math.max(Math.round(e * t), a), n = Math.max(Math.round(n * t), s);
    let l = n > r ? r / n : 1;
    e = Math.max(Math.round(e * l), a), n = Math.max(Math.round(n * l), s)
  }
  return {
    width: e,
    height: n
  }
}

function c(t, e) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return o({
    width: t,
    height: e,
    maxWidth: i,
    maxHeight: n
  })
}

function d(t) {
  let {
    width: e,
    height: n,
    maxWidth: i,
    maxHeight: r
  } = t, a = 1;
  e > i && (a = i / e), e = Math.round(e * a);
  let s = 1;
  return (n = Math.round(n * a)) > r && (s = r / n), Math.min(a * s, 1)
}

function f(t) {
  let {
    width: e,
    height: n,
    maxWidth: i,
    maxHeight: r
  } = t;
  return e === n ? 1 : Math.min(Math.max(i / e, r / n), 1)
}

function _(t) {
  return null == t || "" === t ? "none" : "url(".concat(t, ")")
}
let h = [
  [0, 0, 0]
];

function E(t, e, n) {
  let i = document.createElement("canvas"),
    r = i.getContext("2d");
  if (null == r) return h;
  let a = i.width = 0 === t.width ? 128 : t.width,
    s = i.height = 0 === t.height ? 128 : t.height;
  r.drawImage(t, 0, 0, a, s);
  let l = r.getImageData(0, 0, a, s).data,
    o = function(t, e, n) {
      let i = [];
      for (let r = 0, a, s, l, u, o; r < e; r += n) s = t[(a = 4 * r) + 0], l = t[a + 1], u = t[a + 2], (void 0 === (o = t[a + 3]) || o >= 125) && !(s > 250 && l > 250 && u > 250) && i.push([s, l, u]);
      return i
    }(l, a * s, n),
    c = u(o, e);
  return "boolean" == typeof c ? h : c.palette()
}
let A = t => "number" == typeof t ? null : p(t),
  p = s.memoize(t => new Promise((e, n) => {
    let i = new Image;
    i.crossOrigin = "Anonymous", i.onerror = t => {
      n(t), i.onerror = i.onload = null, i = null
    }, i.onload = () => {
      e(E(i, 5, 10)), i.onerror = i.onload = null, i = null
    }, i.src = t
  }));

function I(t) {
  return new Promise((e, n) => {
    let i = new FileReader;
    i.readAsDataURL(t), i.onload = () => {
      r("string" == typeof i.result, "Result must be a string"), e(i.result)
    }, i.onerror = t => n(t)
  })
}

function T(t) {
  let e = t.split(";base64,");
  return r(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
}
async function m(t, e, n) {
  let i = g(t),
    r = await i.arrayBuffer();
  return new File([r], e, {
    type: n
  })
}

function g(t) {
  let e;
  e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
  let n = t.split(",")[0].split(":")[1].split(";")[0],
    i = new Uint8Array(e.length);
  for (var r = 0; r < e.length; r++) i[r] = e.charCodeAt(r);
  return new Blob([i], {
    type: n
  })
}
async function R(t) {
  var e;
  let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let i = await t.text(),
    r = i.indexOf("IDAT");
  return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
}