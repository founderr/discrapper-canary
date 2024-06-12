"use strict";
n.r(t), n.d(t, {
  formatMessageCountLabel: function() {
    return s
  },
  getMessageCountText: function() {
    return i
  }
});
var u = n("709054"),
  l = n("124368"),
  r = n("689938");
let a = e => u.default.compare("992549565104128000", e) > -1,
  i = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let n = a(t);
      return (null == t || n) && e >= l.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= l.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
    }
  },
  o = (e, t, n) => {
    let u = i(e, n);
    return "0" === u ? r.default.Messages.SEE_THREAD : t.format({
      count: u
    })
  },
  s = (e, t) => o(e, r.default.Messages.THREAD_MESSAGE_COUNT, t)