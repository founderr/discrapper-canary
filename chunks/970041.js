n.d(i, {
    Z: function () {
        return I;
    }
}), n(789020);
var s = n(735250);
n(470079);
var l = n(597312), t = n(442837), o = n(481060), r = n(860719), a = n(621853), d = n(689938), c = n(21232);
function u(e) {
    let {
        icon: i,
        title: n,
        description: l
    } = e;
    return (0, s.jsxs)('div', {
        className: c.row,
        children: [
            (0, s.jsx)('div', {
                className: c.rowIcon,
                children: (0, s.jsx)(i, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, s.jsxs)('div', {
                className: c.rowText,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'text-xs/semibold',
                        children: n
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let {user: i} = e, n = (0, t.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
        }), {
            hasMessageContent: I,
            hasGuildPresences: _,
            hasGuildMembers: f
        } = (0, r.w)({ flags: null == n ? void 0 : n.flags });
    return (0, s.jsxs)(l.zJ, {
        fade: !0,
        className: c.scroller,
        children: [
            I && (0, s.jsx)(u, {
                icon: o.ChatIcon,
                title: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
            }),
            _ && (0, s.jsx)(u, {
                icon: o.GameControllerIcon,
                title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
            }),
            f && (0, s.jsx)(u, {
                icon: o.GroupIcon,
                title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
            }),
            (0, s.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' })
            })
        ]
    });
}
