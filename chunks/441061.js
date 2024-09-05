t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    o = t(475179),
    l = t(358221),
    u = t(689938);
function d(e) {
    let n = (0, r.e7)([l.Z], () => l.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: u.Z.Messages.STREAM_SHOW_NON_VIDEO,
        checked: !n,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
