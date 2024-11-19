n.d(t, {
    $: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(907040),
    u = n(185923);
function l(e) {
    let { channel: t, closePopout: n, analyticsOverride: l, onSelectEmoji: s, messageId: o } = e;
    return (0, r.jsx)(i.Z, {
        closePopout: n,
        channel: t,
        onSelectEmoji: s,
        pickerIntention: u.Hz.REACTION,
        analyticsOverride: l,
        messageId: o
    });
}
