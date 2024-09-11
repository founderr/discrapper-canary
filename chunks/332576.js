t.d(n, {
    Z: function () {
        return c;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    l = t(481060),
    a = t(475179),
    o = t(358221),
    u = t(979651),
    d = t(981631),
    r = t(689938);
function c(e, n) {
    let t = (0, i.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(n), [n, e]);
    return (0, i.e7)(
        [o.Z, u.Z],
        () => {
            let t = u.Z.isInChannel(n, e) && u.Z.hasVideo(n),
                s = o.Z.getLayout(n),
                i = s === d.AEg.MINIMUM || s === d.AEg.NORMAL;
            return !t || i;
        },
        [n, e]
    )
        ? null
        : (0, s.jsx)(l.MenuItem, {
              id: 'focus-video',
              label: t ? r.Z.Messages.UNFOCUS_PARTICIPANT : r.Z.Messages.FOCUS_PARTICIPANT,
              action: () => a.Z.selectParticipant(n, t ? null : e)
          });
}
