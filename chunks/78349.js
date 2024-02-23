"use strict";
n("424973"), e.exports.parse = function(e) {
  var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
  if (!t) return null;
  t.shift();
  var n = null,
    r = [];
  t[2] && (n = (a = t[2].split("-")).shift(), r = a);
  var s = [];
  t[5] && (s = t[5].split("-")).shift();
  var i = [];
  if (t[6]) {
    (a = t[6].split("-")).shift();
    for (var a, l, o = []; a.length;) {
      var u = a.shift();
      1 === u.length ? l ? (i.push({
        singleton: l,
        extension: o
      }), l = u, o = []) : l = u : o.push(u)
    }
    i.push({
      singleton: l,
      extension: o
    })
  }
  var c = [];
  t[7] && ((c = t[7].split("-")).shift(), c.shift());
  var d = [];
  return t[8] && (d = t[8].split("-")).shift(), {
    langtag: {
      language: {
        language: n,
        extlang: r
      },
      script: t[3] || null,
      region: t[4] || null,
      variant: s,
      extension: i,
      privateuse: c
    },
    privateuse: d,
    grandfathered: {
      irregular: t[0] || null,
      regular: t[1] || null
    }
  }
}