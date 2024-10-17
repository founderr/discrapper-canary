t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(789020);
var o = t(735250);
t(470079);
var i = t(597312),
    s = t(442837),
    l = t(481060),
    c = t(860719),
    r = t(621853),
    a = t(689938),
    d = t(834585);
function u(e) {
    let { icon: n, title: t, description: i } = e;
    return (0, o.jsxs)('div', {
        className: d.row,
        children: [
            (0, o.jsx)('div', {
                className: d.rowIcon,
                children: (0, o.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, o.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, o.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        children: t
                    }),
                    (0, o.jsx)(l.Text, {
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
        t = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: _, hasGuildPresences: I, hasGuildMembers: E } = (0, c.w)({ flags: null == t ? void 0 : t.flags });
    return (0, o.jsxs)(i.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            _ &&
                (0, o.jsx)(u, {
                    icon: l.ChatIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }),
            I &&
                (0, o.jsx)(u, {
                    icon: l.GameControllerIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }),
            E &&
                (0, o.jsx)(u, {
                    icon: l.GroupIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }),
            (0, o.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: a.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
