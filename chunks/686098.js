"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return i
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("77078");

function i(e) {
  return s.useCallback(() => {
    (0, l.openModalLazy)(async () => {
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