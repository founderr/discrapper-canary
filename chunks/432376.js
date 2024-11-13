n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: o, isLurking: s, isGuest: a, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (n || d) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: s || a || !h || !((!0 === o || d) && !u && r),
        disableReactionUpdates: s || a || !h || !0 === l || !0 === c
    };
}
