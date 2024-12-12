var i = r(200651),
    a = r(192379),
    s = r(588468),
    o = r(271383),
    l = r(483360),
    u = r(51144),
    c = r(877565),
    d = r(590921),
    f = r(665692),
    _ = r(388032);
let h = {
    sentinel: f.ME,
    stores: [o.ZP],
    matches: (e, n, r, i, a) => (a.mentions.user !== d.h3.DENY || a.mentions.role !== d.Fw.DENY || a.mentions.global !== d.VV.DENY) && !0,
    queryResults(e, n, r, i, a) {
        let s = i.mentions.global === d.VV.ALLOW_EVERYONE || i.mentions.global === d.VV.ALLOW_EVERYONE_OR_HERE,
            o = i.mentions.global === d.VV.ALLOW_EVERYONE_OR_HERE,
            u = i.mentions.user !== d.h3.DENY,
            c = i.mentions.role !== d.Fw.DENY,
            f = i.mentions.user === d.h3.ALLOW_GUILD,
            _ = i.mentions.role === d.Fw.ALLOW_ALL;
        return {
            results: l.ZP.queryMentionResults({
                query: r,
                channel: e,
                canMentionEveryone: s,
                canMentionHere: o,
                canMentionUsers: u,
                canMentionRoles: c,
                includeAllGuildUsers: f,
                includeNonMentionableRoles: _,
                request: a
            })
        };
    },
    renderResults(e) {
        let n,
            r,
            {
                results: { users: o, globals: l, roles: u },
                selectedIndex: h,
                channel: p,
                query: m,
                options: g,
                onHover: E,
                onClick: v
            } = e,
            I = o.map((e, n) =>
                (0, i.jsx)(
                    s.ZP.User,
                    {
                        guildId: p.guild_id,
                        onClick: v,
                        onHover: E,
                        selected: h === n,
                        index: n,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: g.hidePersonalInformation
                    },
                    e.user.id
                )
            ),
            T = l.map((e, n) =>
                (0, i.jsx)(
                    s.ZP.Generic,
                    {
                        onClick: v,
                        onHover: E,
                        selected: h === n + o.length,
                        index: o.length + n,
                        text: e.text,
                        description: g.hideMentionDescription ? null : e.description,
                        'aria-label': e.text
                    },
                    e.text
                )
            ),
            b = u.map((e, n) =>
                (0, i.jsx)(
                    s.ZP.Role,
                    {
                        onClick: v,
                        onHover: E,
                        selected: h === n + o.length + l.length,
                        index: o.length + l.length + n,
                        role: e,
                        hideDescription: g.hideMentionDescription
                    },
                    e.id
                )
            );
        return (
            g.mentions.user === d.h3.DENY ? ((n = _.t.MLiD1d), (r = _.intl.string(_.t.LPJmLy))) : ((n = _.t.rPNimp), (r = _.intl.string(_.t['9Oq93t']))),
            (0, i.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, c.gm)({
                            titleWithQuery: n,
                            titleWithoutQuery: r,
                            query: m,
                            getQuery: (e) => ''.concat(f.ME).concat(e)
                        }),
                        I,
                        o.length > 0 && l.length > 0 ? (0, i.jsx)(s.ZP.Divider, {}) : null,
                        T,
                        (o.length > 0 && u.length > 0) || (l.length > 0 && u.length > 0) ? (0, i.jsx)(s.ZP.Divider, {}) : null,
                        b
                    ]
                },
                'mentions'
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: n, globals: r, roles: i },
                index: a,
                options: s,
                channel: o
            } = e,
            l = n[a],
            u = r[a - n.length],
            c = i[a - n.length - r.length];
        return null != l ? s.insertText(p(l.user, o, s.hidePersonalInformation), m(l.user)) : null != u ? s.insertText(g(u)) : null != c && s.insertText(E(c), v(c)), { type: d.z2.MENTION };
    }
};
function p(e, n, r) {
    return l.ZP.hasSameRoleAsUsername(n, e) ? ''.concat(f.ME).concat(e.tag) : ''.concat(f.ME).concat(u.ZP.getUserTag(e, { identifiable: r ? 'never' : 'always' }));
}
function m(e) {
    return '<@'.concat(e.id, '>');
}
function g(e) {
    return e.text;
}
function E(e) {
    return ''.concat(f.ME).concat(e.name);
}
function v(e) {
    return '<@&'.concat(e.id, '>');
}
n.Z = h;
