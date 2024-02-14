"use strict";
n.r(t), n.d(t, {
  getMessageCountText: function() {
    return r
  },
  formatMessageCountLabel: function() {
    return d
  }
});
var s = n("299039"),
  i = n("648564"),
  a = n("782340");
let l = e => s.default.compare("992549565104128000", e) > -1,
  r = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let n = l(t);
      return (null == t || n) && e >= i.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= i.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
    }
  },
  u = (e, t, n) => {
    let s = r(e, n);
    return "0" === s ? a.default.Messages.SEE_THREAD : t.format({
      count: s
    })
  },
  d = (e, t) => u(e, a.default.Messages.THREAD_MESSAGE_COUNT, t)