t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(249842),
    o = t(838367),
    c = t(576306),
    u = t(83474),
    d = t(914620);
function h(e) {
    let { guildId: n, channelId: t, messageId: h, ...m } = e,
        f = (0, c.h)(),
        { unavailable: x, guild: g } = (0, r.cj)(
            [o.Z],
            () => ({
                guild: o.Z.getGuild(n),
                unavailable: o.Z.hasFetchFailed(n)
            }),
            [n]
        ),
        _ = null != g,
        j = i.useCallback(async () => {
            if (!f)
                try {
                    !_ && (await (0, s.P)(n));
                } catch {}
        }, [f, _, n]);
    return x
        ? (0, l.jsx)(a.Popout, {
              position: 'right',
              renderPopout: (e) => (0, l.jsx)(u.SK, {}),
              ...m
          })
        : (0, l.jsx)(a.Popout, {
              position: 'right',
              preload: j,
              renderPopout: (e) =>
                  f
                      ? (0, l.jsx)(d.Z, {
                            ...e,
                            guildId: n
                        })
                      : null == g
                        ? (0, l.jsx)(l.Fragment, {})
                        : (0, l.jsx)(u.sK, {
                              ...e,
                              guild: g,
                              channelId: t,
                              messageId: h
                          }),
              ...m
          });
}
