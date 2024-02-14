"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return i
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078");

function i(e) {
  return l.useCallback(() => {
    null != e && (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("36170").then(n.bind(n, "36170"));
      return n => (0, a.jsx)(t, {
        ...n,
        quest: e
      })
    })
  }, [e])
}