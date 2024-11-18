t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(200651),
    i = t(192379),
    a = t(442837),
    s = t(481060),
    r = t(249842),
    c = t(838367),
    o = t(83474);
function u(e) {
    let { guildId: n, channelId: t, messageId: u, ...d } = e,
        { unavailable: h, guild: m } = (0, a.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(n),
                unavailable: c.Z.hasFetchFailed(n)
            }),
            [n]
        ),
        g = null != m,
        f = i.useCallback(async () => {
            try {
                !g && (await (0, r.P)(n));
            } catch {}
        }, [g, n]);
    return h
        ? (0, l.jsx)(s.Popout, {
              position: 'right',
              renderPopout: (e) => (0, l.jsx)(o.SK, {}),
              ...d
          })
        : (0, l.jsx)(s.Popout, {
              position: 'right',
              preload: f,
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
