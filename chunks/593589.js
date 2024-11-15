t.d(e, {
    Z: function () {
        return Z;
    }
});
var i = t(200651),
    o = t(192379),
    r = t(481060),
    l = t(372900),
    u = t(238246),
    a = t(788983),
    c = t(207035),
    s = t(823748),
    d = t(981631),
    p = t(118018);
function h(n) {
    let { windowKey: e, channel: t } = n;
    return (0, i.jsx)(u.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, i.jsx)(l.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(s.Z, { providedChannel: t })
        })
    });
}
function Z(n, e) {
    let t = (0, c.P)(e),
        l = o.useCallback(() => {
            a.bA(
                ''.concat(d.KJ3.CHANNEL_POPOUT, '-').concat(n.id),
                (e) =>
                    (0, i.jsx)(h, {
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
        ? (0, i.jsx)(r.MenuItem, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => l()
          })
        : null;
}
