"use strict";
n.r(t), n.d(t, {
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
    return E
  },
  getPalette: function() {
    return S
  },
  getPaletteForAvatar: function() {
    return h
  },
  readFileAsBase64: function() {
    return I
  },
  dataUriFileSize: function() {
    return T
  },
  dataUrlToFile: function() {
    return C
  },
  isPNGAnimated: function() {
    return v
  }
}), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
var i = n("627445"),
  r = n.n(i),
  l = n("917351"),
  a = n.n(l),
  s = n("48648"),
  o = n.n(s);

function u(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: r,
    minWidth: l = 0,
    minHeight: a = 0
  } = e;
  if (t !== i || n !== r) {
    let e = t > i ? i / t : 1;
    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), a);
    let s = n > r ? r / n : 1;
    t = Math.max(Math.round(t * s), l), n = Math.max(Math.round(n * s), a)
  }
  return {
    width: t,
    height: n
  }
}

function c(e, t) {
  let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
  return u({
    width: e,
    height: t,
    maxWidth: i,
    maxHeight: n
  })
}

function d(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: r
  } = e, l = 1;
  t > i && (l = i / t), t = Math.round(t * l);
  let a = 1;
  return (n = Math.round(n * l)) > r && (a = r / n), Math.min(l * a, 1)
}

function f(e) {
  let {
    width: t,
    height: n,
    maxWidth: i,
    maxHeight: r
  } = e;
  return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
}

function E(e) {
  return null == e || "" === e ? "none" : "url(".concat(e, ")")
}
let _ = [
  [0, 0, 0]
];

function S(e, t, n) {
  let i = document.createElement("canvas"),
    r = i.getContext("2d");
  if (null == r) return _;
  let l = i.width = 0 === e.width ? 128 : e.width,
    a = i.height = 0 === e.height ? 128 : e.height;
  r.drawImage(e, 0, 0, l, a);
  let s = r.getImageData(0, 0, l, a).data,
    u = function(e, t, n) {
      let i = [];
      for (let r = 0, l, a, s, o, u; r < t; r += n) a = e[(l = 4 * r) + 0], s = e[l + 1], o = e[l + 2], (void 0 === (u = e[l + 3]) || u >= 125) && !(a > 250 && s > 250 && o > 250) && i.push([a, s, o]);
      return i
    }(s, l * a, n),
    c = o(u, t);
  return "boolean" == typeof c ? _ : c.palette()
}
let h = e => "number" == typeof e ? null : p(e),
  p = a.memoize(e => new Promise((t, n) => {
    let i = new Image;
    i.crossOrigin = "Anonymous", i.onerror = e => {
      n(e), i.onerror = i.onload = null, i = null
    }, i.onload = () => {
      t(S(i, 5, 10)), i.onerror = i.onload = null, i = null
    }, i.src = e
  }));

function I(e) {
  return new Promise((t, n) => {
    let i = new FileReader;
    i.readAsDataURL(e), i.onload = () => {
      r("string" == typeof i.result, "Result must be a string"), t(i.result)
    }, i.onerror = e => n(e)
  })
}

function T(e) {
  let t = e.split(";base64,");
  return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
}
async function C(e, t, n) {
  let i = function(e) {
      let t;
      t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
      let n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new Uint8Array(t.length);
      for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
      return new Blob([i], {
        type: n
      })
    }(e),
    r = await i.arrayBuffer();
  return new File([r], t, {
    type: n
  })
}
async function v(e) {
  var t;
  let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
  if ("image/png" !== n) throw Error("File is not a PNG");
  let i = await e.text(),
    r = i.indexOf("IDAT");
  return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
}