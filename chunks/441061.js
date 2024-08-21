n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(475179),
    s = n(358221),
    l = n(689938);
function d(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(a.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
        checked: !t,
        action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
    });
}
