t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    o = t(100527),
    a = t(906732),
    s = t(613464),
    d = t(6025),
    c = t(433355),
    u = t(430824),
    x = t(981631),
    h = t(998810);
function _(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([u.Z], () => u.Z.getGuild(n)),
        { analyticsLocations: _ } = (0, a.ZP)(o.Z.MEMBER_SAFETY_PAGE),
        g = (0, r.e7)([c.ZP], () => c.ZP.getGuildSidebarState(n), [n]),
        C = l.useCallback(() => {
            d.Z.closeGuildSidebar(n);
        }, [n]),
        I = null != g;
    return null != t && I && null != g
        ? (0, i.jsx)(a.Gt, {
              value: _,
              children: (0, i.jsx)('div', {
                  className: h.__invalid_sidebarContainer,
                  style: { width: x.$Y6 },
                  children: (0, i.jsx)(s.Z, {
                      userId: g.details.userId,
                      guildId: g.details.guildId,
                      onClose: C
                  })
              })
          })
        : null;
}
