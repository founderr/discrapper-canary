n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: o, isLurking: a, isGuest: s, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (n || d) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: a || s || !h || !((!0 === o || d) && !u && r),
        disableReactionUpdates: a || s || !h || !0 === l || !0 === c
    };
}
