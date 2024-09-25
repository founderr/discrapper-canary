n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
    o = n(481060),
    s = n(230711),
    l = n(26033),
    u = n(740605),
    c = n(180335),
    d = n(768419),
    _ = n(594174),
    E = n(981631),
    f = n(616922),
    h = n(689938);
function p(e) {
    var t;
    let { user: n, entry: r, display: p, onAction: m, onClose: I } = e,
        T = (0, a.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        }),
        g = (0, a.e7)([d.Z], () => d.Z.hasConnectedAccount());
    if ('live' === p || !(0, c.AZ)(r)) return null;
    if (!g)
        return (0, i.jsx)(o.MenuItem, {
            id: 'connect-spotify',
            label: h.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: f.ai }),
            action: () => {
                null == m || m({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), s.Z.open(E.oAB.CONNECTIONS), null == I || I();
            }
        });
    if (T) return null;
    let S = (0, l.dU)(r) ? (null === (t = r.extra.entries[0]) || void 0 === t ? void 0 : t.media) : r.extra.media;
    return null == S
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'play-on-spotify',
              label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
              action: () => {
                  null == m || m({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, u.o)(f.Hw.TRACK, S.external_id);
              }
          });
}
