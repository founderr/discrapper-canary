n.d(i, {
    Z: function () {
        return d;
    }
}), n(789020), n(653041);
var l = n(735250);
n(470079);
var s = n(481060), t = n(860719), o = n(689938), a = n(744224);
function r(e) {
    let {
        content: i,
        heading: n
    } = e;
    return (0, l.jsxs)('div', {
        className: a.row,
        children: [
            null != n ? (0, l.jsx)(s.Heading, {
                className: a.heading,
                variant: 'text-sm/normal',
                children: n
            }) : null,
            (0, l.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: i
            })
        ]
    });
}
function d(e) {
    let {
            flags: i,
            listScrollerStyle: n
        } = e, {
            hasMessageContent: d,
            hasGuildPresences: c,
            hasGuildMembers: u
        } = (0, t.w)({ flags: i });
    if (null == i)
        return null;
    let I = [];
    return d && I.push((0, l.jsx)(r, {
        heading: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
        content: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
    })), c && I.push((0, l.jsx)(r, {
        heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
        content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
    })), u && I.push((0, l.jsx)(r, {
        heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
        content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
    })), I.length > 0 && I.push((0, l.jsx)('div', {
        className: a.divider,
        children: (0, l.jsx)(s.FormDivider, {})
    })), I.push((0, l.jsx)(r, { content: o.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' }) })), (0, l.jsx)(s.ScrollerThin, {
        className: n,
        children: I
    });
}
