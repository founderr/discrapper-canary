t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(249842),
    c = t(838367),
    o = t(83474);
function u(e) {
    let { guildId: n, channelId: t, messageId: u, ...d } = e,
        { unavailable: h, guild: m } = (0, r.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(n),
                unavailable: c.Z.hasFetchFailed(n)
            }),
            [n]
        ),
        f = null != m,
        g = i.useCallback(async () => {
            try {
                !f && (await (0, s.P)(n));
            } catch {}
        }, [f, n]);
    return h
        ? (0, l.jsx)(a.Popout, {
              position: 'right',
              renderPopout: (e) => (0, l.jsx)(o.SK, {}),
              ...d
          })
        : (0, l.jsx)(a.Popout, {
              position: 'right',
              preload: g,
              renderPopout: (e) =>
                  null == m
                      ? (0, l.jsx)(l.Fragment, {})
                      : (0, l.jsx)(o.sK, {
                            ...e,
                            guild: m,
                            channelId: t,
                            messageId: u
                        }),
              ...d
          });
}
