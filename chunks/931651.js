n.d(t, {
    $: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var s = n(907040),
    a = n(185923);
function r(e) {
    let { channel: t, closePopout: n, analyticsOverride: r, onSelectEmoji: l, messageId: o } = e;
    return (0, i.jsx)(s.Z, {
        closePopout: n,
        channel: t,
        onSelectEmoji: l,
        pickerIntention: a.Hz.REACTION,
        analyticsOverride: r,
        messageId: o
    });
}
