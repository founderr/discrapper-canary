n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(249842),
    l = n(838367),
    u = n(83474);
function c(e) {
    let { guildId: t, channelId: n, messageId: c, ...d } = e,
        { unavailable: _, guild: E } = (0, a.cj)(
            [l.Z],
            () => ({
                guild: l.Z.getGuild(t),
                unavailable: l.Z.hasFetchFailed(t)
            }),
            [t]
        ),
        f = null != E,
        h = i.useCallback(async () => {
            try {
                !f && (await (0, s.P)(t));
            } catch {}
        }, [f, t]);
    return _
        ? (0, r.jsx)(o.Popout, {
              position: 'right',
              renderPopout: (e) => (0, r.jsx)(u.SK, {}),
              ...d
          })
        : (0, r.jsx)(o.Popout, {
              position: 'right',
              preload: h,
              renderPopout: (e) =>
                  null == E
                      ? (0, r.jsx)(r.Fragment, {})
                      : (0, r.jsx)(u.sK, {
                            ...e,
                            guild: E,
                            channelId: n,
                            messageId: c
                        }),
              ...d
          });
}
