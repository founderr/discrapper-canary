t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(518756),
    r = t(576749),
    o = t(388032);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, a.Z)(e),
        d = (0, r.Z)();
    return u
        ? (0, i.jsx)(l.MenuItem, {
              id: 'create-event',
              label: o.intl.string(o.t['60lJ0N']),
              icon: n ? l.CalendarPlusIcon : void 0,
              action: () => {
                  (0, l.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([t.e('18543'), t.e('22347'), t.e('58023'), t.e('99267')]).then(t.bind(t, 779250));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              guildId: e
                          });
                  }, d);
              }
          })
        : null;
}
