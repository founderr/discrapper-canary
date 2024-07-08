i.d(n, {
    Z: function () {
        return c;
    }
}), i(789020), i(653041);
var o = i(735250);
i(470079);
var s = i(481060), t = i(860719), l = i(689938), a = i(744224);
function r(e) {
    let {
        content: n,
        heading: i
    } = e;
    return (0, o.jsxs)('div', {
        className: a.row,
        children: [
            null != i ? (0, o.jsx)(s.Heading, {
                className: a.heading,
                variant: 'text-sm/normal',
                children: i
            }) : null,
            (0, o.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: n
            })
        ]
    });
}
function c(e) {
    let {
            flags: n,
            listScrollerStyle: i
        } = e, {
            hasMessageContent: c,
            hasGuildPresences: d,
            hasGuildMembers: u
        } = (0, t.w)({ flags: n });
    if (null == n)
        return null;
    let I = [];
    return c && I.push((0, o.jsx)(r, {
        heading: l.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
        content: l.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
    })), d && I.push((0, o.jsx)(r, {
        heading: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
        content: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
    })), u && I.push((0, o.jsx)(r, {
        heading: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
        content: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
    })), I.length > 0 && I.push((0, o.jsx)('div', {
        className: a.divider,
        children: (0, o.jsx)(s.FormDivider, {})
    })), I.push((0, o.jsx)(r, { content: l.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975' }) })), (0, o.jsx)(s.ScrollerThin, {
        className: i,
        children: I
    });
}
