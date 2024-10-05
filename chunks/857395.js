s.d(l, {
    Z: function () {
        return o;
    }
});
var a = s(735250),
    i = s(470079),
    t = s(442837),
    n = s(481060),
    c = s(249842),
    d = s(838367),
    r = s(83474);
function o(e) {
    let { guildId: l, channelId: s, messageId: o, ...u } = e,
        { unavailable: h, guild: m } = (0, t.cj)(
            [d.Z],
            () => ({
                guild: d.Z.getGuild(l),
                unavailable: d.Z.hasFetchFailed(l)
            }),
            [l]
        ),
        x = null != m,
        g = i.useCallback(async () => {
            try {
                !x && (await (0, c.P)(l));
            } catch {}
        }, [x, l]);
    return h
        ? (0, a.jsx)(n.Popout, {
              position: 'right',
              renderPopout: (e) => (0, a.jsx)(r.SK, {}),
              ...u
          })
        : (0, a.jsx)(n.Popout, {
              position: 'right',
              preload: g,
              renderPopout: (e) =>
                  null == m
                      ? (0, a.jsx)(a.Fragment, {})
                      : (0, a.jsx)(r.sK, {
                            ...e,
                            guild: m,
                            channelId: s,
                            messageId: o
                        }),
              ...u
          });
}
