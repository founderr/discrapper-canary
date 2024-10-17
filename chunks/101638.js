n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(785717),
    a = n(369566),
    l = n(502762),
    r = n(527790),
    o = n(551498),
    c = n(689938),
    u = n(869426);
function d(e) {
    let { user: t } = e,
        { trackUserProfileAction: n } = (0, s.KZ)(),
        { recent: d } = (0, a.Z)(t.id);
    return 0 === d.length
        ? null
        : (0, i.jsx)(l.Z.Overlay, {
              className: u.overlay,
              children: (0, i.jsx)(o.Z, {
                  header: c.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                  startExpanded: !0,
                  listClassName: u.list,
                  onExpand: () =>
                      n({
                          action: 'PRESS_SECTION',
                          section: 'ACTIVITY'
                      }),
                  children: d.map((e) =>
                      (0, i.jsx)(
                          r.Z,
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
