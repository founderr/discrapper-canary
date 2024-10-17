n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(259443),
    l = n(911284),
    r = n(785717),
    o = n(369566),
    c = n(502762),
    u = n(527790),
    d = n(551498),
    h = n(689938),
    p = n(869426);
let m = new a.Y('UserProfilePanelRecentActivity'),
    _ = async (e) => {
        try {
            await (0, l.Z)(e);
        } catch (t) {
            m.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
        }
    };
function f(e) {
    let { user: t } = e,
        { trackUserProfileAction: n } = (0, r.KZ)(),
        { recent: a } = (0, o.Z)(t.id);
    return (s.useEffect(() => {
        _(t.id);
    }, [t.id]),
    0 === a.length)
        ? null
        : (0, i.jsx)(c.Z.Overlay, {
              className: p.overlay,
              children: (0, i.jsx)(d.Z, {
                  header: h.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                  startExpanded: !0,
                  listClassName: p.list,
                  onExpand: () =>
                      n({
                          action: 'PRESS_SECTION',
                          section: 'ACTIVITY'
                      }),
                  children: a.map((e) =>
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
