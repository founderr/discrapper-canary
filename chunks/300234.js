var a = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    i = n(239091),
    o = n(884338),
    c = n(592125),
    d = n(720202),
    u = n(594174),
    h = n(260483),
    m = n(314208),
    g = n(124368),
    f = n(31812);
function x(e) {
    let { channel: t } = e,
        n = (0, r.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberIdsPreview(t.id)) && void 0 !== e ? e : [];
        }),
        s = (0, r.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberCount(t.id)) && void 0 !== e ? e : 0;
        }),
        i = (0, r.Wu)([u.default], () => n.map((e) => u.default.getUser(e)));
    return (l.useEffect(() => {
        n.filter((e, t) => null == i[t]).forEach((e) => {
            d.Z.requestMember(t.guild_id, e);
        });
    }, []),
    0 === n.length)
        ? null
        : (0, a.jsx)(o.Z, {
              className: f.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: i,
              count: s,
              max: g.yX
          });
}
t.Z = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: o } = e,
        d = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        u = (0, r.e7)([c.Z], () => c.Z.getChannel(d.parent_id));
    return (0, a.jsxs)(s.Clickable, {
        className: f.container,
        onClick: (e) => l(d, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('13154')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channel: d
                    });
            }),
        children: [
            (0, a.jsxs)('div', {
                className: f.left,
                children: [
                    (0, a.jsxs)(s.Heading, {
                        className: f.threadNameLine,
                        variant: 'heading-md/semibold',
                        children: [
                            (0, a.jsx)('span', {
                                className: f.threadName,
                                children: d.name
                            }),
                            o && null != u
                                ? (0, a.jsx)('span', {
                                      className: f.parentName,
                                      children: '#'.concat(u.name)
                                  })
                                : null
                        ]
                    }),
                    (0, m.Z)(d)
                ]
            }),
            (0, a.jsx)(x, { channel: d })
        ]
    });
});
