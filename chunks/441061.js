t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(475179),
    a = t(358221),
    d = t(388032);
function o(n) {
    let e = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
    return (0, i.jsx)(r.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: d.intl.string(d.t.BL8ss7),
        checked: !e,
        action: () => u.Z.toggleVoiceParticipantsHidden(n, !e)
    });
}
