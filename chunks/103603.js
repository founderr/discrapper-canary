"use strict";
n.r(e), n.d(e, {
  fit: function() {
    return u
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
    return h
  },
  getPalette: function() {
    return _
  },
  getPaletteForAvatar: function() {
    return v
  },
  readFileAsBase64: function() {
    return E
  },
  dataUriFileSize: function() {
    return g
  },
  dataUrlToFile: function() {
    return I
  },
  dataUrlToBlob: function() {
    return S
  },
  isPNGAnimated: function() {
    return m
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var i = n("627445"),
  r = n.n(i),
  l = n("917351"),
  s = n.n(l),
  a = n("48648"),
  o = n.n(a);

function u(t) {
  let {
    width: e,
    height: n,
    maxWidth: i,
    maxHeight: r,
    minWidth: l = 0,
    minHeight: s = 0
  } = t;
  if (e !== i || n !== r) {
    let t = e > i ? i / e : 1;
    e = Math.max(Math.round(e * t), l), n = Math.max(Math.round(n * t), s);
    let a = n > r ? r / n : 1;
    e = Math.max(Math.round(e * a), l), n = Math.max(Math.round(n * a), s)
  }
  return {
    width: e,
    height: n
  }
}

function c(t, e) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return u({
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
  } = t, l = 1;
  e > i && (l = i / e), e = Math.round(e * l);
  let s = 1;
  return (n = Math.round(n * l)) > r && (s = r / n), Math.min(l * s, 1)
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

function h(t) {
  return null == t || "" === t ? "none" : "url(".concat(t, ")")
}
let p = [
  [0, 0, 0]
];

function _(t, e, n) {
  let i = document.createElement("canvas"),
    r = i.getContext("2d");
  if (null == r) return p;
  let l = i.width = 0 === t.width ? 128 : t.width,
    s = i.height = 0 === t.height ? 128 : t.height;
  r.drawImage(t, 0, 0, l, s);
  let a = r.getImageData(0, 0, l, s).data,
    u = function(t, e, n) {
      let i = [];
      for (let r = 0, l, s, a, o, u; r < e; r += n) s = t[(l = 4 * r) + 0], a = t[l + 1], o = t[l + 2], (void 0 === (u = t[l + 3]) || u >= 125) && !(s > 250 && a > 250 && o > 250) && i.push([s, a, o]);
      return i
    }(a, l * s, n),
    c = o(u, e);
  return "boolean" == typeof c ? p : c.palette()
}
let v = t => "number" == typeof t ? null : C(t),
  C = s.memoize(t => new Promise((e, n) => {
    let i = new Image;
    i.crossOrigin = "Anonymous", i.onerror = t => {
      n(t), i.onerror = i.onload = null, i = null
    }, i.onload = () => {
      e(_(i, 5, 10)), i.onerror = i.onload = null, i = null
    }, i.src = t
  }));

function E(t) {
  return new Promise((e, n) => {
    let i = new FileReader;
    i.readAsDataURL(t), i.onload = () => {
      r("string" == typeof i.result, "Result must be a string"), e(i.result)
    }, i.onerror = t => n(t)
  })
}

function g(t) {
  let e = t.split(";base64,");
  return r(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
}
async function I(t, e, n) {
  let i = S(t),
    r = await i.arrayBuffer();
  return new File([r], e, {
    type: n
  })
}

function S(t) {
  let e;
  e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
  let n = t.split(",")[0].split(":")[1].split(";")[0],
    i = new Uint8Array(e.length);
  for (var r = 0; r < e.length; r++) i[r] = e.charCodeAt(r);
  return new Blob([i], {
    type: n
  })
}
async function m(t) {
  var e;
  let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let i = await t.text(),
    r = i.indexOf("IDAT");
  return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
}