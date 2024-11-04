n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(475179),
    r = n(112560),
    s = n(388032);
let a = n(576394);
function o(e) {
    let { width: t, className: n, channelId: o, noArt: c = !1 } = e;
    return (0, i.jsx)(r.Z, {
        artURL: a,
        noArt: c,
        size: (0, r.L)(t),
        className: n,
        callToAction: s.intl.string(s.t.kLQySE),
        header: s.intl.format(s.t.mAf1OD, {}),
        onCTAClick: () => l.Z.toggleVoiceParticipantsHidden(o, !1)
    });
}
