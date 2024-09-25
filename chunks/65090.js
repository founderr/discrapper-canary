var r = n(735250),
    i = n(470079),
    a = n(588468),
    o = n(271383),
    s = n(483360),
    l = n(51144),
    u = n(877565),
    c = n(590921),
    d = n(665692),
    _ = n(689938);
let E = {
    sentinel: d.ME,
    stores: [o.ZP],
    matches: (e, t, n, r, i) => (i.mentions.user !== c.h3.DENY || i.mentions.role !== c.Fw.DENY || i.mentions.global !== c.VV.DENY) && !0,
    queryResults(e, t, n, r, i) {
        let a = r.mentions.global === c.VV.ALLOW_EVERYONE || r.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            o = r.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            l = r.mentions.user !== c.h3.DENY,
            u = r.mentions.role !== c.Fw.DENY,
            d = r.mentions.user === c.h3.ALLOW_GUILD,
            _ = r.mentions.role === c.Fw.ALLOW_ALL;
        return {
            results: s.ZP.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: a,
                canMentionHere: o,
                canMentionUsers: l,
                canMentionRoles: u,
                includeAllGuildUsers: d,
                includeNonMentionableRoles: _,
                request: i
            })
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: o, globals: s, roles: l },
                selectedIndex: E,
                channel: f,
                query: h,
                options: p,
                onHover: m,
                onClick: I
            } = e,
            T = o.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.User,
                    {
                        guildId: f.guild_id,
                        onClick: I,
                        onHover: m,
                        selected: E === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: p.hidePersonalInformation
                    },
                    e.user.id
                )
            ),
            g = s.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Generic,
                    {
                        onClick: I,
                        onHover: m,
                        selected: E === t + o.length,
                        index: o.length + t,
                        text: e.text,
                        description: p.hideMentionDescription ? null : e.description,
                        'aria-label': e.text
                    },
                    e.text
                )
            ),
            S = l.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Role,
                    {
                        onClick: I,
                        onHover: m,
                        selected: E === t + o.length + s.length,
                        index: o.length + s.length + t,
                        role: e,
                        hideDescription: p.hideMentionDescription
                    },
                    e.id
                )
            );
        return (
            p.mentions.user === c.h3.DENY ? ((t = _.Z.Messages.ROLES_MATCHING), (n = _.Z.Messages.ROLES)) : ((t = _.Z.Messages.MEMBERS_MATCHING), (n = _.Z.Messages.MEMBERS)),
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, u.gm)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: h,
                            getQuery: (e) => ''.concat(d.ME).concat(e)
                        }),
                        T,
                        o.length > 0 && s.length > 0 ? (0, r.jsx)(a.ZP.Divider, {}) : null,
                        g,
                        (o.length > 0 && l.length > 0) || (s.length > 0 && l.length > 0) ? (0, r.jsx)(a.ZP.Divider, {}) : null,
                        S
                    ]
                },
                'mentions'
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: t, globals: n, roles: r },
                index: i,
                options: a,
                channel: o
            } = e,
            s = t[i],
            l = n[i - t.length],
            u = r[i - t.length - n.length];
        return null != s ? a.insertText(f(s.user, o, a.hidePersonalInformation), h(s.user)) : null != l ? a.insertText(p(l)) : null != u && a.insertText(m(u), I(u)), { type: c.z2.MENTION };
    }
};
function f(e, t, n) {
    return s.ZP.hasSameRoleAsUsername(t, e) ? ''.concat(d.ME).concat(e.tag) : ''.concat(d.ME).concat(l.ZP.getUserTag(e, { identifiable: n ? 'never' : 'always' }));
}
function h(e) {
    return '<@'.concat(e.id, '>');
}
function p(e) {
    return e.text;
}
function m(e) {
    return ''.concat(d.ME).concat(e.name);
}
function I(e) {
    return '<@&'.concat(e.id, '>');
}
t.Z = E;
