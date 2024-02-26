"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return i
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078");

function i(e) {
  let {
    quest: t,
    location: i
  } = e;
  return a.useCallback(() => {
    null != t && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("36170").then(n.bind(n, "36170"));
      return n => (0, l.jsx)(e, {
        ...n,
        quest: t,
        location: i
      })
    })
  }, [t, i])
}