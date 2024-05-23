"use strict";
n.r(t), n.d(t, {
  getKeywordSubstitutedContent: function() {
    return o
  }
}), n("47120"), n("724458");
var i = n("960048"),
  r = n("592204"),
  s = n("803141"),
  a = n("603158");

function o(e, t) {
  if (!(0, r.isEligibleForKeywordFiltering)({
      location: "keyword_substituted_content"
    })) return e;
  try {
    let n = function(e) {
      let t = s.default.getKeywordTrie();
      if ("" === e) return [];
      let n = (0, a.normalize)(e).toLowerCase();
      return Object.entries(t.search(n)).map(e => {
        let [t, n] = e;
        return {
          start: Number(t),
          end: n
        }
      })
    }(e);
    if (0 === n.length) return e;
    return n.sort((e, t) => t.start - e.start).reduce((e, n) => (function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = Math.max(t, 0),
        s = Math.min(n, e.length - 1),
        a = i ? "\\*" : "*",
        o = [...e.substring(r, s + 1)].map(e => " " === e ? " " : a).join("");
      return "".concat(e.substring(0, r)).concat(o).concat(e.substring(s + 1))
    })(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
  } catch (t) {
    return i.default.captureException(t, {
      tags: {
        app_context: "keyword_filtering"
      }
    }), e
  }
}