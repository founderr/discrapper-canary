n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(259443),
    l = n(81897),
    r = n(911284),
    o = n(369566),
    c = n(502762),
    u = n(527790),
    d = n(638785),
    h = n(689938);
let p = new a.Y('UserProfilePanelRecentActivity');
function m(e) {
    let { user: t } = e,
        { recent: n } = (0, o.Z)(t.id),
        a = (0, l.Z)();
    return (s.useEffect(() => {
        (async () => {
            try {
                await (0, r.Z)(t.id, a);
            } catch (e) {
                p.log('Failed to fetch content inventory outbox for '.concat(t.id, ':'), e);
            }
        })();
    }, [t.id, a]),
    0 === n.length)
        ? null
        : (0, i.jsx)(c.Z.Overlay, {
              children: (0, i.jsx)(d.Z, {
                  section: 'ACTIVITY',
                  header: h.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
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
