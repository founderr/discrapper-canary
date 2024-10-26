t.d(e, {
    Z: function () {
        return h;
    }
});
var o = t(200651),
    u = t(192379),
    i = t(481060),
    r = t(372900),
    l = t(238246),
    a = t(788983),
    s = t(207035),
    c = t(823748),
    d = t(981631),
    p = t(405601);
function Z(n) {
    let { windowKey: e, channel: t } = n;
    return (0, o.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, o.jsx)(r.Z.Provider, {
            value: t.guild_id,
            children: (0, o.jsx)(c.Z, { providedChannel: t })
        })
    });
}
function h(n, e) {
    let t = (0, s.P)(e),
        r = u.useCallback(() => {
            a.bA(
                ''.concat(d.KJ3.CHANNEL_POPOUT, '-').concat(n.id),
                (e) =>
                    (0, o.jsx)(Z, {
                        windowKey: e,
                        channel: n
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480
                }
            );
        }, [n]);
    return t
        ? (0, o.jsx)(i.MenuItem, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => r()
          })
        : null;
}
