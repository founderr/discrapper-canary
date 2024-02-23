"use strict";
r("424973"), t.exports.parse = function(t) {
  var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
  if (!n) return null;
  n.shift();
  var r = null,
    i = [];
  n[2] && (r = (e = n[2].split("-")).shift(), i = e);
  var o = [];
  n[5] && (o = n[5].split("-")).shift();
  var u = [];
  if (n[6]) {
    (e = n[6].split("-")).shift();
    for (var e, s, a = []; e.length;) {
      var h = e.shift();
      1 === h.length ? s ? (u.push({
        singleton: s,
        extension: a
      }), s = h, a = []) : s = h : a.push(h)
    }
    u.push({
      singleton: s,
      extension: a
    })
  }
  var f = [];
  n[7] && ((f = n[7].split("-")).shift(), f.shift());
  var c = [];
  return n[8] && (c = n[8].split("-")).shift(), {
    langtag: {
      language: {
        language: r,
        extlang: i
      },
      script: n[3] || null,
      region: n[4] || null,
      variant: o,
      extension: u,
      privateuse: f
    },
    privateuse: c,
    grandfathered: {
      irregular: n[0] || null,
      regular: n[1] || null
    }
  }
}