"use strict";
n.r(e), n.d(e, {
  fit: function() {
    return s
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
    return E
  },
  getPalette: function() {
    return h
  },
  getPaletteForAvatar: function() {
    return S
  },
  readFileAsBase64: function() {
    return T
  },
  dataUriFileSize: function() {
    return I
  },
  dataUrlToFile: function() {
    return A
  },
  dataUrlToBlob: function() {
    return m
  },
  isPNGAnimated: function() {
    return C
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var r = n("627445"),
  i = n.n(r),
  u = n("917351"),
  o = n.n(u),
  a = n("48648"),
  l = n.n(a);

function s(t) {
  let {
    width: e,
    height: n,
    maxWidth: r,
    maxHeight: i,
    minWidth: u = 0,
    minHeight: o = 0
  } = t;
  if (e !== r || n !== i) {
    let t = e > r ? r / e : 1;
    e = Math.max(Math.round(e * t), u), n = Math.max(Math.round(n * t), o);
    let a = n > i ? i / n : 1;
    e = Math.max(Math.round(e * a), u), n = Math.max(Math.round(n * a), o)
  }
  return {
    width: e,
    height: n
  }
}

function c(t, e) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return s({
    width: t,
    height: e,
    maxWidth: r,
    maxHeight: n
  })
}

function d(t) {
  let {
    width: e,
    height: n,
    maxWidth: r,
    maxHeight: i
  } = t, u = 1;
  e > r && (u = r / e), e = Math.round(e * u);
  let o = 1;
  return (n = Math.round(n * u)) > i && (o = i / n), Math.min(u * o, 1)
}

function f(t) {
  let {
    width: e,
    height: n,
    maxWidth: r,
    maxHeight: i
  } = t;
  return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
}

function E(t) {
  return null == t || "" === t ? "none" : "url(".concat(t, ")")
}
let _ = [
  [0, 0, 0]
];

function h(t, e, n) {
  let r = document.createElement("canvas"),
    i = r.getContext("2d");
  if (null == i) return _;
  let u = r.width = 0 === t.width ? 128 : t.width,
    o = r.height = 0 === t.height ? 128 : t.height;
  i.drawImage(t, 0, 0, u, o);
  let a = i.getImageData(0, 0, u, o).data,
    s = function(t, e, n) {
      let r = [];
      for (let i = 0, u, o, a, l, s; i < e; i += n) o = t[(u = 4 * i) + 0], a = t[u + 1], l = t[u + 2], (void 0 === (s = t[u + 3]) || s >= 125) && !(o > 250 && a > 250 && l > 250) && r.push([o, a, l]);
      return r
    }(a, u * o, n),
    c = l(s, e);
  return "boolean" == typeof c ? _ : c.palette()
}
let S = t => "number" == typeof t ? null : p(t),
  p = o.memoize(t => new Promise((e, n) => {
    let r = new Image;
    r.crossOrigin = "Anonymous", r.onerror = t => {
      n(t), r.onerror = r.onload = null, r = null
    }, r.onload = () => {
      e(h(r, 5, 10)), r.onerror = r.onload = null, r = null
    }, r.src = t
  }));

function T(t) {
  return new Promise((e, n) => {
    let r = new FileReader;
    r.readAsDataURL(t), r.onload = () => {
      i("string" == typeof r.result, "Result must be a string"), e(r.result)
    }, r.onerror = t => n(t)
  })
}

function I(t) {
  let e = t.split(";base64,");
  return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
}
async function A(t, e, n) {
  let r = m(t),
    i = await r.arrayBuffer();
  return new File([i], e, {
    type: n
  })
}

function m(t) {
  let e;
  e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
  let n = t.split(",")[0].split(":")[1].split(";")[0],
    r = new Uint8Array(e.length);
  for (var i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
  return new Blob([r], {
    type: n
  })
}
async function C(t) {
  var e;
  let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let r = await t.text(),
    i = r.indexOf("IDAT");
  return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
}