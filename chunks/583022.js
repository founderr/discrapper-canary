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
    canAddNewReactions: l,
    isLurking: n,
    isGuest: s,
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: r
  } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
  return {
    disableReactionReads: !a,
    disableReactionCreates: n || s || !c || !((!0 === l || u) && !d && r),
    disableReactionUpdates: n || s || !c || !0 === o
  }
}