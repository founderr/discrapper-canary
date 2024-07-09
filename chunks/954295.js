i.d(n, {
    Z: function () {
        return d;
    }
}), i(789020), i(653041);
var l = i(735250);
i(470079);
var s = i(481060), o = i(860719), t = i(689938), a = i(744224);
function r(e) {
    let {
        content: n,
        heading: i
    } = e;
    return (0, l.jsxs)('div', {
        className: a.row,
        children: [
            null != i ? (0, l.jsx)(s.Heading, {
                className: a.heading,
                variant: 'text-sm/normal',
                children: i
            }) : null,
            (0, l.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: n
            })
        ]
    });
}
function d(e) {
    let {
            flags: n,
            listScrollerStyle: i
        } = e, {
            hasMessageContent: d,
            hasGuildPresences: c,
            hasGuildMembers: u
        } = (0, o.w)({ flags: n });
    if (null == n)
        return null;
    let I = [];
    return d && I.push((0, l.jsx)(r, {
        heading: t.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
        content: t.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
    })), c && I.push((0, l.jsx)(r, {
        heading: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
        content: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
    })), u && I.push((0, l.jsx)(r, {
        heading: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
        content: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
    })), I.length > 0 && I.push((0, l.jsx)('div', {
        className: a.divider,
        children: (0, l.jsx)(s.FormDivider, {})
    })), I.push((0, l.jsx)(r, { content: t.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' }) })), (0, l.jsx)(s.ScrollerThin, {
        className: i,
        children: I
    });
}
