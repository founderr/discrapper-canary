n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(259443),
    s = n(81897),
    a = n(911284),
    o = n(369566),
    c = n(502762),
    u = n(527790),
    d = n(638785),
    h = n(388032);
let m = new r.Y('UserProfilePanelRecentActivity');
function p(e) {
    let { user: t } = e,
        { recent: n } = (0, o.Z)(t.id),
        r = (0, s.Z)();
    return (l.useEffect(() => {
        (async () => {
            try {
                await (0, a.Z)(t.id, r);
            } catch (e) {
                m.log('Failed to fetch content inventory outbox for '.concat(t.id, ':'), e);
            }
        })();
    }, [t.id, r]),
    0 === n.length)
        ? null
        : (0, i.jsx)(c.Z.Overlay, {
              children: (0, i.jsx)(d.Z, {
                  section: 'ACTIVITY',
                  header: h.intl.string(h.t.M0zgnZ),
                  minItems: 3,
                  items: n.map((e) =>
                      (0, i.jsx)(
                          u.Z,
                          {
                              user: t,
                              entry: e,
                              hideHeader: !0
                          },
                          e.id
                      )
                  )
              })
          });
}
