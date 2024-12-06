n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(99690),
    u = n(359110),
    d = n(601070),
    h = n(91159),
    p = n(488131),
    m = n(496675),
    f = n(306680),
    g = n(594174),
    C = n(768581),
    _ = n(709054),
    v = n(981631),
    x = n(124368),
    I = n(388032),
    b = n(247472);
function S(e) {
    let { channel: t } = e,
        r = (0, a.Wu)([d.Z, f.ZP, m.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && m.Z.can(v.Plq.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = f.ZP.lastMessageId(e.id),
                        i = f.ZP.lastMessageId(t.id);
                    return _.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        l.useEffect(() => {
            (0, h.q)();
        }, []),
        (0, i.jsxs)('div', {
            className: b.popout,
            children: [
                (0, i.jsx)(s.Text, {
                    className: b.title,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: t.isForumLikeChannel() ? I.intl.string(I.t.ioVdOz) : I.intl.string(I.t.VNYs2t)
                }),
                r
                    .slice(0, t.isForumLikeChannel() ? r.length : c)
                    .map((e) => (0, i.jsx)(E, { thread: e }, e.id))
                    .filter((e) => l.isValidElement(e))
                    .slice(0, c),
                (0, i.jsx)(s.Clickable, {
                    className: b.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.Kh)(t.id)
                            : (0, s.openModalLazy)(async () => {
                                  let { default: e } = await n.e('36970').then(n.bind(n, 223901));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              });
                    },
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: I.intl.string(I.t['4qdZ9/'])
                    })
                })
            ]
        })
    );
}
function E(e) {
    let { thread: t } = e,
        n = (0, a.e7)([g.default], () => g.default.getUser(t.ownerId)),
        l = (0, h.Ok)(t);
    return (0, i.jsxs)(s.Clickable, {
        className: b.row,
        onClick: (e) => {
            (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, x.on.POPOUT);
        },
        children: [
            null == n
                ? (0, i.jsx)('img', {
                      className: b.avatar,
                      src: C.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: ''
                  })
                : (0, i.jsx)(c.Z, {
                      className: b.avatar,
                      user: n,
                      size: s.AvatarSizes.SIZE_16
                  }),
            (0, i.jsx)(s.Text, {
                className: b.name,
                variant: 'text-sm/normal',
                color: 'none',
                children: t.name
            }),
            (0, i.jsxs)(s.Text, {
                className: b.timestamp,
                variant: 'text-sm/normal',
                color: 'none',
                children: [
                    (0, i.jsx)('span', {
                        className: b.bullet,
                        children: '\u2022'
                    }),
                    (0, h.Ye)(l)
                ]
            })
        ]
    });
}
