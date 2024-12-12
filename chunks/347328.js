r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(230711),
    l = r(726542),
    u = r(394821),
    c = r(740605),
    d = r(180335),
    f = r(553795),
    _ = r(981631),
    h = r(388032);
function p(e) {
    let { activity: n, entry: r, display: p, onAction: m, onClose: g } = e,
        E = (0, a.e7)([f.Z], () => null != f.Z.getAccount(null, _.ABu.CRUNCHYROLL));
    if (!(0, u.Z)(n) && !(0, d.gr)(r)) return null;
    if (!E)
        return (0, i.jsx)(s.MenuItem, {
            id: 'connect-crunchyroll',
            label: h.intl.formatToPlainString(h.t.XWSHTU, { platform: l.Z.get(_.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == m || m({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), o.Z.open(_.oAB.CONNECTIONS), null == g || g();
            }
        });
    if ('live' === p || !(0, d.gr)(r)) return null;
    let v = r.extra.url;
    return null == v || '' === v
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'watch-on-crunchyroll',
              label: h.intl.string(h.t.OpxQVF),
              action: () => {
                  null == m || m({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, c.Y)(v);
              }
          });
}
