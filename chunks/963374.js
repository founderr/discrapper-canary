"use strict";
i.r(t), i.d(t, {
  createASTHighlighter: function() {
    return c
  }
}), i("47120"), i("757143"), i("653041");
var n = i("392711"),
  a = i.n(n),
  s = i("697741");
let l = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function r(e) {
  return e.toLowerCase()
}

function u(e) {
  return l.has(e)
}

function d(e) {
  return 0 === e.length
}

function c(e) {
  var t;
  let i = new Set((t = e, a()(t.split(/\W+/)).map(o).reject(d).map(r).reject(u).map(s.stemmer).value()));
  return e => (function e(t, i) {
    if (Array.isArray(t)) t.forEach(t => e(t, i));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        n = "";
      t.content.split(/(\W+)/g).forEach(t => {
        var a, l;
        if (a = t, l = i, !d(a = r(o(a))) && !u(a) && l.has((0, s.stemmer)(a))) n.length > 0 && e.push({
          type: "text",
          content: n
        }), e.push({
          type: "highlight",
          content: t
        }), n = "";
        else n += t
      }), e.length > 0 && (n.length > 0 && e.push({
        type: "text",
        content: n
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, i);
    return t
  })(e, i)
}