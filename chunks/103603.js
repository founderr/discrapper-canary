"use strict";
n.r(t), n.d(t, {
  fit: function() {
    return o
  },
  zoomFit: function() {
    return d
  },
  getRatio: function() {
    return c
  },
  getCoverRatio: function() {
    return f
  },
  makeCssUrlString: function() {
    return h
  },
  getPalette: function() {
    return g
  },
  getPaletteForAvatar: function() {
    return E
  },
  readFileAsBase64: function() {
    return p
  },
  dataUriFileSize: function() {
    return v
  },
  dataUrlToFile: function() {
    return m
  },
  dataUrlToBlob: function() {
    return T
  },
  isPNGAnimated: function() {
    return S
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var l = n("627445"),
  i = n.n(l),
  a = n("917351"),
  s = n.n(a),
  r = n("48648"),
  u = n.n(r);

function o(e) {
  let {
    width: t,
    height: n,
    maxWidth: l,
    maxHeight: i,
    minWidth: a = 0,
    minHeight: s = 0
  } = e;
  if (t !== l || n !== i) {
    let e = t > l ? l / t : 1;
    t = Math.max(Math.round(t * e), a), n = Math.max(Math.round(n * e), s);
    let r = n > i ? i / n : 1;
    t = Math.max(Math.round(t * r), a), n = Math.max(Math.round(n * r), s)
  }
  return {
    width: t,
    height: n
  }
}

function d(e, t) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    l = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return o({
    width: e,
    height: t,
    maxWidth: l,
    maxHeight: n
  })
}

function c(e) {
  let {
    width: t,
    height: n,
    maxWidth: l,
    maxHeight: i
  } = e, a = 1;
  t > l && (a = l / t), t = Math.round(t * a);
  let s = 1;
  return (n = Math.round(n * a)) > i && (s = i / n), Math.min(a * s, 1)
}

function f(e) {
  let {
    width: t,
    height: n,
    maxWidth: l,
    maxHeight: i
  } = e;
  return t === n ? 1 : Math.min(Math.max(l / t, i / n), 1)
}

function h(e) {
  return null == e || "" === e ? "none" : "url(".concat(e, ")")
}
let I = [
  [0, 0, 0]
];

function g(e, t, n) {
  let l = document.createElement("canvas"),
    i = l.getContext("2d");
  if (null == i) return I;
  let a = l.width = 0 === e.width ? 128 : e.width,
    s = l.height = 0 === e.height ? 128 : e.height;
  i.drawImage(e, 0, 0, a, s);
  let r = i.getImageData(0, 0, a, s).data,
    o = function(e, t, n) {
      let l = [];
      for (let i = 0, a, s, r, u, o; i < t; i += n) s = e[(a = 4 * i) + 0], r = e[a + 1], u = e[a + 2], (void 0 === (o = e[a + 3]) || o >= 125) && !(s > 250 && r > 250 && u > 250) && l.push([s, r, u]);
      return l
    }(r, a * s, n),
    d = u(o, t);
  return "boolean" == typeof d ? I : d.palette()
}
let E = e => "number" == typeof e ? null : _(e),
  _ = s.memoize(e => new Promise((t, n) => {
    let l = new Image;
    l.crossOrigin = "Anonymous", l.onerror = e => {
      n(e), l.onerror = l.onload = null, l = null
    }, l.onload = () => {
      t(g(l, 5, 10)), l.onerror = l.onload = null, l = null
    }, l.src = e
  }));

function p(e) {
  return new Promise((t, n) => {
    let l = new FileReader;
    l.readAsDataURL(e), l.onload = () => {
      i("string" == typeof l.result, "Result must be a string"), t(l.result)
    }, l.onerror = e => n(e)
  })
}

function v(e) {
  let t = e.split(";base64,");
  return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
}
async function m(e, t, n) {
  let l = T(e),
    i = await l.arrayBuffer();
  return new File([i], t, {
    type: n
  })
}

function T(e) {
  let t;
  t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
  let n = e.split(",")[0].split(":")[1].split(";")[0],
    l = new Uint8Array(t.length);
  for (var i = 0; i < t.length; i++) l[i] = t.charCodeAt(i);
  return new Blob([l], {
    type: n
  })
}
async function S(e) {
  var t;
  let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let l = await e.text(),
    i = l.indexOf("IDAT");
  return !!(i > 0) && -1 !== l.substring(0, i).indexOf("acTL") || !1
}