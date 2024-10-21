n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(475179),
    a = n(112560),
    l = n(689938);
let r = n(576394);
function o(e) {
    let { width: t, className: n, channelId: o, noArt: c = !1 } = e;
    return (0, i.jsx)(a.Z, {
        artURL: r,
        noArt: c,
        size: (0, a.L)(t),
        className: n,
        callToAction: l.Z.Messages.STREAM_SHOW_ALL_PARTICIPANTS,
        header: l.Z.Messages.STREAM_PARTICIPANTS_HIDDEN.format(),
        onCTAClick: () => s.Z.toggleVoiceParticipantsHidden(o, !1)
    });
}
