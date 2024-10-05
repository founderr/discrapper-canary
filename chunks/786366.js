t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(789020);
var s = t(735250);
t(470079);
var i = t(597312),
    o = t(442837),
    l = t(481060),
    r = t(860719),
    c = t(621853),
    a = t(689938),
    d = t(834585);
function u(e) {
    let { icon: n, title: t, description: i } = e;
    return (0, s.jsxs)('div', {
        className: d.row,
        children: [
            (0, s.jsx)('div', {
                className: d.rowIcon,
                children: (0, s.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, s.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
function _(e) {
    let { user: n } = e,
        t = (0, o.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: _, hasGuildPresences: I, hasGuildMembers: E } = (0, r.w)({ flags: null == t ? void 0 : t.flags });
    return (0, s.jsxs)(i.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            _ &&
                (0, s.jsx)(u, {
                    icon: l.ChatIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }),
            I &&
                (0, s.jsx)(u, {
                    icon: l.GameControllerIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }),
            E &&
                (0, s.jsx)(u, {
                    icon: l.GroupIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }),
            (0, s.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: a.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
