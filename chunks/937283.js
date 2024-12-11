t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(442837),
    a = t(100527),
    o = t(906732),
    s = t(613464),
    c = t(6025),
    d = t(433355),
    u = t(430824),
    x = t(981631),
    m = t(998810);
function h(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([u.Z], () => u.Z.getGuild(n)),
        { analyticsLocations: h } = (0, o.ZP)(a.Z.MEMBER_SAFETY_PAGE),
        b = (0, i.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
        _ = r.useCallback(() => {
            c.Z.closeGuildSidebar(n);
        }, [n]),
        C = null != b;
    return null != t && C && null != b
        ? (0, l.jsx)(o.Gt, {
              value: h,
              children: (0, l.jsx)('div', {
                  className: m.__invalid_sidebarContainer,
                  style: { width: x.$Y6 },
                  children: (0, l.jsx)(s.Z, {
                      userId: b.details.userId,
                      guildId: b.details.guildId,
                      onClose: _
                  })
              })
          })
        : null;
}
