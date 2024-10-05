n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: s, isLurking: o, isGuest: a, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (n || d) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || a || !h || !((!0 === s || d) && !u && r),
        disableReactionUpdates: o || a || !h || !0 === l || !0 === c
    };
}
