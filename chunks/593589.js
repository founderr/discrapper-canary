t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(372900),
    s = t(238246),
    o = t(788983),
    u = t(207035),
    c = t(823748),
    d = t(981631),
    p = t(405601);
function m(e) {
    let { windowKey: n, channel: t } = e;
    return (0, l.jsx)(s.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, l.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t })
        })
    });
}
function x(e, n) {
    let t = (0, u.P)(n),
        a = i.useCallback(() => {
            o.bA(
                ''.concat(d.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (n) =>
                    (0, l.jsx)(m, {
                        windowKey: n,
                        channel: e
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480
                }
            );
        }, [e]);
    return t
        ? (0, l.jsx)(r.MenuItem, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => a()
          })
        : null;
}
