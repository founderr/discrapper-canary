t.d(n, {
    $: function () {
        return i;
    }
});
var a = t(735250);
t(470079);
var r = t(907040),
    s = t(185923);
function i(e) {
    let { channel: n, closePopout: t, analyticsOverride: i, onSelectEmoji: o, messageId: l } = e;
    return (0, a.jsx)(r.Z, {
        closePopout: t,
        channel: n,
        onSelectEmoji: o,
        pickerIntention: s.Hz.REACTION,
        analyticsOverride: i,
        messageId: l
    });
}
