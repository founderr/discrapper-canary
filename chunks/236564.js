n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(475179),
    r = n(112560),
    a = n(388032);
let s = n(576394);
function o(e) {
    let { width: t, className: n, channelId: o, noArt: c = !1 } = e;
    return (0, i.jsx)(r.Z, {
        artURL: s,
        noArt: c,
        size: (0, r.L)(t),
        className: n,
        callToAction: a.intl.string(a.t.kLQySE),
        header: a.intl.format(a.t.mAf1OD, {}),
        onCTAClick: () => l.Z.toggleVoiceParticipantsHidden(o, !1)
    });
}
