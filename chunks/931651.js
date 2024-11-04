n.d(t, {
    $: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var o = n(907040),
    r = n(185923);
function l(e) {
    let { channel: t, closePopout: n, analyticsOverride: l, onSelectEmoji: s, messageId: a } = e;
    return (0, i.jsx)(o.Z, {
        closePopout: n,
        channel: t,
        onSelectEmoji: s,
        pickerIntention: r.Hz.REACTION,
        analyticsOverride: l,
        messageId: a
    });
}
