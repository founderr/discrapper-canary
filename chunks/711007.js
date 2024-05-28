"use strict";
n.r(t), n.d(t, {
  usePurchaseTokenAuthStep: function() {
    return s
  }
});
var u = n("470079"),
  i = n("409813"),
  l = n("882712");

function s(e, t, n) {
  u.useEffect(() => {
    null != e && e !== i.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === l.PurchaseTokenAuthState.PENDING ? n(i.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === l.PurchaseTokenAuthState.SUCCESS && n(i.Step.REVIEW)
  }, [e, t, n])
}