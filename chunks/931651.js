t.d(n, {
    $: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var r = t(907040),
    s = t(185923);
function o(e) {
    let { channel: n, closePopout: t, analyticsOverride: o, onSelectEmoji: i, messageId: l } = e;
    return (0, a.jsx)(r.Z, {
        closePopout: t,
        channel: n,
        onSelectEmoji: i,
        pickerIntention: s.Hz.REACTION,
        analyticsOverride: o,
        messageId: l
    });
}
