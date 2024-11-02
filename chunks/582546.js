n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(26033),
    l = n(740605),
    u = n(180335),
    c = n(768419),
    d = n(594174),
    f = n(981631),
    _ = n(616922),
    h = n(388032);
function p(e) {
    var t;
    let { user: n, entry: p, display: m, onAction: g, onClose: E } = e,
        v = (0, i.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        }),
        I = (0, i.e7)([c.Z], () => c.Z.hasConnectedAccount());
    if ('live' === m || !(0, u.AZ)(p)) return null;
    if (!I)
        return (0, r.jsx)(a.MenuItem, {
            id: 'connect-spotify',
            label: h.intl.formatToPlainString(h.t.XWSHTU, { platform: _.ai }),
            action: () => {
                null == g || g({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), s.Z.open(f.oAB.CONNECTIONS), null == E || E();
            }
        });
    if (v) return null;
    let S = (0, o.dU)(p) ? (null === (t = p.extra.entries[0]) || void 0 === t ? void 0 : t.media) : p.extra.media;
    return null == S
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'play-on-spotify',
              label: h.intl.string(h.t.rRffNz),
              action: () => {
                  null == g || g({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, l.o)(_.Hw.TRACK, S.external_id);
              }
          });
}
