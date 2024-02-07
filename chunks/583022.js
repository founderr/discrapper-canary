"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
});
var a = e => {
  let {
    channel: t,
    canChat: i,
    renderReactions: a,
    canAddNewReactions: n,
    isLurking: l,
    isGuest: o,
    communicationDisabled: s,
    isActiveChannelOrUnarchivableThread: r
  } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
  return {
    disableReactionReads: !a,
    disableReactionCreates: l || o || !c || !((!0 === n || u) && !d && r),
    disableReactionUpdates: l || o || !c || !0 === s
  }
}