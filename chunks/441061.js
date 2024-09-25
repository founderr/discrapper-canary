t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    s = t(475179),
    o = t(358221),
    d = t(689938);
function l(e) {
    let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'no-video-hide',
        label: d.Z.Messages.STREAM_SHOW_NON_VIDEO,
        checked: !n,
        action: () => s.Z.toggleVoiceParticipantsHidden(e, !n)
    });
}
