s.d(l, {
    Z: function () {
        return o;
    }
});
var a = s(200651),
    t = s(192379),
    i = s(442837),
    n = s(481060),
    r = s(249842),
    c = s(838367),
    d = s(83474);
function o(e) {
    let { guildId: l, channelId: s, messageId: o, ...u } = e,
        { unavailable: h, guild: m } = (0, i.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(l),
                unavailable: c.Z.hasFetchFailed(l)
            }),
            [l]
        ),
        x = null != m,
        g = t.useCallback(async () => {
            try {
                !x && (await (0, r.P)(l));
            } catch {}
        }, [x, l]);
    return h
        ? (0, a.jsx)(n.Popout, {
              position: 'right',
              renderPopout: (e) => (0, a.jsx)(d.SK, {}),
              ...u
          })
        : (0, a.jsx)(n.Popout, {
              position: 'right',
              preload: g,
              renderPopout: (e) =>
                  null == m
                      ? (0, a.jsx)(a.Fragment, {})
                      : (0, a.jsx)(d.sK, {
                            ...e,
                            guild: m,
                            channelId: s,
                            messageId: o
                        }),
              ...u
          });
}
