t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(475179),
    a = t(358221),
    o = t(388032);
function d(n) {
    let e = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: o.intl.string(o.t.BL8ss7),
        checked: !e,
        action: () => u.Z.toggleVoiceParticipantsHidden(n, !e)
    });
}
