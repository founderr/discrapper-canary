t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    s = t(475179),
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
                l = o.Z.getLayout(n),
                i = l === d.AEg.MINIMUM || l === d.AEg.NORMAL;
            return !t || i;
        },
        [n, e]
    )
        ? null
        : (0, l.jsx)(a.MenuItem, {
              id: 'focus-video',
              label: t ? r.Z.Messages.UNFOCUS_PARTICIPANT : r.Z.Messages.FOCUS_PARTICIPANT,
              action: () => s.Z.selectParticipant(n, t ? null : e)
          });
}
