a.d(n, {
    $: function () {
        return i;
    }
});
var t = a(735250);
a(470079);
var r = a(907040),
    s = a(185923);
function i(e) {
    let { channel: n, closePopout: a, analyticsOverride: i, onSelectEmoji: o, messageId: l } = e;
    return (0, t.jsx)(r.Z, {
        closePopout: a,
        channel: n,
        onSelectEmoji: o,
        pickerIntention: s.Hz.REACTION,
        analyticsOverride: i,
        messageId: l
    });
}
