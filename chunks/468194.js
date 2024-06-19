n.d(o, {
  De: function() {
    return t
  },
  Fv: function() {
    return a
  },
  Mg: function() {
    return O
  },
  Zg: function() {
    return u
  },
  _I: function() {
    return c
  },
  aF: function() {
    return e
  }
}), n(47120), n(757143);
let r = /[\u0300-\u036f]/g,
  i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function t(l) {
  return null == l ? "" : "".concat(l.charAt(0).toUpperCase()).concat(l.slice(1))
}
let e = function(l, o) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
  if (null == l || null == o) return "";
  if (l.length > o) {
    let r = i.test(l) ? [...l].slice(0, o - n.length).join("") : l.substring(0, o - n.length);
    return "".concat(r.replace(/[\s.]+$/, "")).concat(n)
  }
  return l
};

function u(l) {
  return null != l ? l.replace(/'s /g, " ").replace(/\w+/g, l => l[0]).replace(/\s/g, "") : ""
}

function O(l) {
  let o = parseInt(l, 10);
  return isNaN(o) ? 0 : o
}
let c = null == String.prototype.normalize ? l => l : l => l.normalize("NFD").replace(r, "").normalize("NFC"),
  a = null == String.prototype.normalize ? l => l : function(l) {
    let o = n(510085),
      r = "";
    return [...l.normalize("NFD")].forEach(l => {
      var n;
      r += null !== (n = o[l]) && void 0 !== n ? n : l
    }), r.normalize("NFD").toLocaleLowerCase()
  }