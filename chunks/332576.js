n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(475179),
    a = n(358221),
    u = n(979651),
    d = n(981631),
    s = n(388032);
function c(e, t) {
    let n = (0, l.e7)([a.Z], () => e === a.Z.getSelectedParticipantId(t), [t, e]);
    return (0, l.e7)(
        [a.Z, u.Z],
        () => {
            let n = u.Z.isInChannel(t, e) && u.Z.hasVideo(t),
                i = a.Z.getLayout(t),
                l = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
            return !n || l;
        },
        [t, e]
    )
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'focus-video',
              label: n ? s.intl.string(s.t.KJPKUV) : s.intl.string(s.t['77cRNz']),
              action: () => o.Z.selectParticipant(t, n ? null : e)
          });
}
