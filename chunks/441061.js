e.d(n, {
    Z: function () {
        return d;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    o = e(481060),
    a = e(475179),
    u = e(358221),
    l = e(388032);
function d(t) {
    let n = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(t));
    return (0, i.jsx)(o.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: l.intl.string(l.t.BL8ss7),
        checked: !n,
        action: () => a.Z.toggleVoiceParticipantsHidden(t, !n)
    });
}
