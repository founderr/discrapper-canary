n.d(t, {
  Z: function() {
    return i
  }
});

function i(e) {
  let {
    channel: t,
    canChat: n,
    renderReactions: i,
    canAddNewReactions: s,
    isLurking: a,
    isGuest: l,
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: r,
    isAutomodQuarantined: u
  } = e, c = t.isPrivate(), d = t.isSystemDM(), h = (n || c) && r;
  return {
    disableReactionReads: !i,
    disableReactionCreates: a || l || !h || !((!0 === s || c) && !d && r),
    disableReactionUpdates: a || l || !h || !0 === o || !0 === u
  }
}