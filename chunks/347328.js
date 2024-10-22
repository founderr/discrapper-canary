n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(726542),
    l = n(394821),
    u = n(740605),
    c = n(180335),
    d = n(553795),
    _ = n(594174),
    E = n(981631),
    f = n(689938);
function h(e) {
    let { user: t, activity: n, entry: h, display: p, onAction: I, onClose: m } = e,
        T = (0, i.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
        }),
        S = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, E.ABu.CRUNCHYROLL));
    if (!(0, l.Z)(n) && !(0, c.gr)(h)) return null;
    if (!S)
        return (0, r.jsx)(a.MenuItem, {
            id: 'connect-crunchyroll',
            label: f.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: o.Z.get(E.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == I || I({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(E.oAB.CONNECTIONS), null == m || m();
            }
        });
    if (T || 'live' === p || !(0, c.gr)(h)) return null;
    let g = h.extra.url;
    return null == g || '' === g
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'watch-on-crunchyroll',
              label: f.Z.Messages.WATCH_ON_CRUNCHYROLL,
              action: () => {
                  null == I || I({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, u.Y)(g);
              }
          });
}
