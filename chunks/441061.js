t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(735250);
t(470079);
var r = t(442837),
    o = t(481060),
    a = t(475179),
    u = t(358221),
    s = t(689938);
function l(e) {
    let n = (0, r.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(o.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: s.Z.Messages.STREAM_SHOW_NON_VIDEO,
        checked: !n,
        action: () => a.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
