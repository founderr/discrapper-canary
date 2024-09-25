function r(e) {
    let { channel: t, canChat: n, renderReactions: r, canAddNewReactions: i, isLurking: a, isGuest: o, communicationDisabled: s, isActiveChannelOrUnarchivableThread: l, isAutomodQuarantined: u } = e,
        c = t.isPrivate(),
        d = t.isSystemDM(),
        _ = (!0 === i || c) && !d && l,
        E = (n || c) && l,
        f = a || o || !E || !0 === s || !0 === u;
    return {
        disableReactionReads: !r,
        disableReactionCreates: a || o || !E || !_,
        disableReactionUpdates: f
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
});
