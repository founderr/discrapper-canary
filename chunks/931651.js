n.d(t, {
    $: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(907040),
    l = n(185923);
function o(e) {
    let { channel: t, closePopout: n, analyticsOverride: o, onSelectEmoji: a, messageId: s } = e;
    return (0, i.jsx)(r.Z, {
        closePopout: n,
        channel: t,
        onSelectEmoji: a,
        pickerIntention: l.Hz.REACTION,
        analyticsOverride: o,
        messageId: s
    });
}
