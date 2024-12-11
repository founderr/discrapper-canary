t.d(n, {
    Z: function () {
        return b;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(442837),
    a = t(252618),
    o = t(693546),
    s = t(863249),
    c = t(328977),
    d = t(853486),
    u = t(598077),
    x = t(430824),
    m = t(388032),
    h = t(861683);
function b(e) {
    let { guildId: n } = e,
        t = (0, c.L)({ guildId: n }),
        { user: b } = null != t ? t : {},
        _ = r.useMemo(() => (null != b ? new u.Z(b) : null), [b]),
        C = (0, i.e7)([x.Z], () => x.Z.getGuild(n), [n]);
    return ((0, a.Tt)({
        subsection: m.intl.string(m.t.nqrK8f),
        location: null == C ? void 0 : C.name
    }),
    r.useEffect(() => {
        s.ZP.fetchVerificationForm(n);
    }, [n]),
    null != t && null != C && null != _)
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)('div', { className: h.sidebarSeparator }),
                  (0, l.jsx)('section', {
                      className: h.sidebar,
                      children: (0, l.jsx)(d.Z, {
                          guild: C,
                          guildJoinRequest: t,
                          guildJoinRequestUser: _,
                          onClose: () => o.Z.setSelectedGuildJoinRequest(n, null)
                      })
                  })
              ]
          })
        : null;
}
