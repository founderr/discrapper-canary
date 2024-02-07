"use strict";
n("424973"), t.exports.parse = function(t) {
  var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
  if (!e) return null;
  e.shift();
  var n = null,
    r = [];
  e[2] && (n = (o = e[2].split("-")).shift(), r = o);
  var i = [];
  e[5] && (i = e[5].split("-")).shift();
  var u = [];
  if (e[6]) {
    (o = e[6].split("-")).shift();
    for (var o, a, s = []; o.length;) {
      var l = o.shift();
      1 === l.length ? a ? (u.push({
        singleton: a,
        extension: s
      }), a = l, s = []) : a = l : s.push(l)
    }
    u.push({
      singleton: a,
      extension: s
    })
  }
  var c = [];
  e[7] && ((c = e[7].split("-")).shift(), c.shift());
  var d = [];
  return e[8] && (d = e[8].split("-")).shift(), {
    langtag: {
      language: {
        language: n,
        extlang: r
      },
      script: e[3] || null,
      region: e[4] || null,
      variant: i,
      extension: u,
      privateuse: c
    },
    privateuse: d,
    grandfathered: {
      irregular: e[0] || null,
      regular: e[1] || null
    }
  }
}