s.d(n, {
    Z: function () {
        return I;
    }
}),
    s(789020);
var t = s(735250);
s(470079);
var i = s(597312),
    l = s(442837),
    o = s(481060),
    r = s(860719),
    c = s(621853),
    a = s(689938),
    d = s(834585);
function u(e) {
    let { icon: n, title: s, description: i } = e;
    return (0, t.jsxs)('div', {
        className: d.row,
        children: [
            (0, t.jsx)('div', {
                className: d.rowIcon,
                children: (0, t.jsx)(n, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, t.jsxs)('div', {
                className: d.rowText,
                children: [
                    (0, t.jsx)(o.Heading, {
                        variant: 'text-xs/semibold',
                        children: s
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { user: n } = e,
        s = (0, l.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        { hasMessageContent: I, hasGuildPresences: _, hasGuildMembers: E } = (0, r.w)({ flags: null == s ? void 0 : s.flags });
    return (0, t.jsxs)(i.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            I &&
                (0, t.jsx)(u, {
                    icon: o.ChatIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }),
            _ &&
                (0, t.jsx)(u, {
                    icon: o.GameControllerIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }),
            E &&
                (0, t.jsx)(u, {
                    icon: o.GroupIcon,
                    title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }),
            (0, t.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: a.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
