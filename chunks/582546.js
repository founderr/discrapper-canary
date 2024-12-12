r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(442837),
    o = r(481060),
    l = r(230711),
    u = r(26033),
    c = r(740605),
    d = r(180335),
    f = r(768419),
    _ = r(594174),
    h = r(981631),
    p = r(616922),
    m = r(388032);
function g(e) {
    var n;
    let { user: r, entry: i, display: g, onAction: E, onClose: v } = e,
        I = (0, s.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === r.id;
        }),
        T = (0, s.e7)([f.Z], () => f.Z.hasConnectedAccount());
    if ('live' === g || !(0, d.AZ)(i)) return null;
    if (!T)
        return (0, a.jsx)(o.MenuItem, {
            id: 'connect-spotify',
            label: m.intl.formatToPlainString(m.t.XWSHTU, { platform: p.ai }),
            action: () => {
                null == E || E({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), l.Z.open(h.oAB.CONNECTIONS), null == v || v();
            }
        });
    if (I) return null;
    let b = (0, u.dU)(i) ? (null === (n = i.extra.entries[0]) || void 0 === n ? void 0 : n.media) : i.extra.media;
    return null == b
        ? null
        : (0, a.jsx)(o.MenuItem, {
              id: 'play-on-spotify',
              label: m.intl.string(m.t.rRffNz),
              action: () => {
                  null == E || E({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, c.o)(p.Hw.TRACK, b.external_id);
              }
          });
}
