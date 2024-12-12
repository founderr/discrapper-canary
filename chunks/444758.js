var i = r(302454),
    a = r.n(i),
    s = r(430198),
    o = r(933557),
    l = r(66999),
    u = r(754688),
    c = r(592125),
    d = r(430824),
    f = r(496675),
    _ = r(699516),
    h = r(594174),
    p = r(768581),
    m = r(934415),
    g = r(624138),
    E = r(699450),
    v = r(594199),
    I = r(981631),
    T = r(388032);
let b = (e) => {
    let n = c.Z.getChannel(e);
    return null == n ? void 0 : n.getGuildId();
};
function y(e) {
    return {
        type: 'guild',
        guildId: e.id,
        content: (0, g.aF)(e.name, 32),
        icon: p.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            size: 40
        })
    };
}
function S(e, n) {
    let r;
    let i = O((0, g.aF)(e.name, 32));
    return {
        type: 'channel',
        content: [
            (r =
                'italics' === n
                    ? {
                          type: 'em',
                          content: [i]
                      }
                    : i)
        ],
        channelType: e.type,
        iconType: e.iconType
    };
}
function A(e, n) {
    let r = {
        type: 'channel',
        content: [O(e.roleSubscriptionGated ? e.name : T.intl.string(T.t['/YzI6+']))],
        channelType: e.roleSubscriptionGated ? e.type : I.d4z.UNKNOWN,
        iconType: 'locked'
    };
    return {
        type: 'channelMention',
        guildId: e.guildId,
        channelId: e.id,
        messageId: n,
        inContent: null,
        content: [r]
    };
}
function N(e) {
    return {
        type: 'channel',
        content: [O('')],
        iconType: e ? 'post' : 'message'
    };
}
function C(e, n) {
    var r;
    let i = c.Z.getChannel(e),
        a = (0, l.$)(e, c.Z, s.Z, f.Z).isSubscriptionGated,
        d = null !== (r = (0, m.wl)(i)) && void 0 !== r ? r : 'text';
    if (null != n) {
        let r = n.find((n) => n.id === e);
        if (null != r)
            return {
                type: r.type,
                id: r.id,
                guildId: r.guild_id,
                name: r.name,
                isDm: null != i && i.isPrivate(),
                isForumPost: null != i && i.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: a,
                iconType: d,
                parentId: null == i ? void 0 : i.parent_id
            };
    }
    return null != i
        ? {
              type: i.type,
              id: i.id,
              guildId: i.guild_id,
              name: (0, o.F6)(i, h.default, _.Z),
              isDm: i.isPrivate(),
              isForumPost: i.isForumPost(),
              isMentionable: (0, E.B)(i.type),
              canViewChannel: (0, u.YO)(i),
              roleSubscriptionGated: a,
              iconType: d,
              parentId: i.parent_id
          }
        : null;
}
function R(e) {
    return {
        type: 'link',
        content: [
            {
                type: 'text',
                content: e
            }
        ],
        target: e,
        title: void 0
    };
}
function O(e) {
    return {
        type: 'text',
        content: e
    };
}
function D(e) {
    return null != e ? R(e) : O('#'.concat(T.intl.string(T.t.J90oLS)));
}
function L() {
    return S(
        {
            name: T.intl.string(T.t.zLZPmp).toLowerCase(),
            type: I.d4z.UNKNOWN,
            iconType: 'text'
        },
        'italics'
    );
}
function x(e, n, r, i, a) {
    let s = d.Z.getGuild(e),
        o = (null == s ? void 0 : s.id) === i;
    return {
        type: 'channelMention',
        guildId: e,
        channelId: n,
        messageId: r,
        originalLink: a,
        inContent: null == s || o ? null : [y(s)],
        content: [L()]
    };
}
function w(e, n, r, i) {
    let a = y(e),
        s = S(n),
        o = N(n.isForumPost);
    if (r && i) {
        if (n.isForumPost) {
            let e = c.Z.getChannel(n.parentId);
            if (null != e) {
                var l;
                return {
                    inContent: [
                        S({
                            name: e.name,
                            type: e.type,
                            iconType: null !== (l = (0, m.wl)(e)) && void 0 !== l ? l : 'forum'
                        })
                    ],
                    content: [s]
                };
            }
        }
        return {
            inContent: [s],
            content: [o]
        };
    }
    if (r && !i)
        return {
            inContent: null,
            content: [s]
        };
    if (!r && i)
        return {
            inContent: [a],
            content: [n.isForumPost ? s : o]
        };
    else if (!r && !i)
        return {
            inContent: [a],
            content: [s]
        };
}
function P(e, n, r, i) {
    if (!e.canViewChannel) return A(e, n);
    if (!e.isMentionable) return O('#'.concat(e.name));
    let a = {
            type: 'channelMention',
            channelId: e.id,
            guildId: e.guildId,
            messageId: n,
            originalLink: i
        },
        s = d.Z.getGuild(e.guildId);
    if (null == s)
        return e.isDm
            ? {
                  ...a,
                  guildId: I.ME,
                  inContent: [S(e)],
                  content: [N(!1)]
              }
            : D(i);
    let o = e.guildId === r,
        l = null != n;
    return {
        ...a,
        ...w(s, e, o, l)
    };
}
let M = {
        order: v.ZP.order,
        requiredFirstCharacters: ['<'],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, n, r) {
            let i = e[1];
            if (r.returnMentionIds)
                return {
                    type: 'channelMention',
                    id: i
                };
            let a = C(i, r.mentionChannels);
            return null == a ? x(null, i, null, b(r.channelId)) : P(a, null, b(r.channelId));
        }
    },
    k = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let n = u.Jv.exec(e);
            return null != n && ((null != n[2] && /\D/.test(n[2])) || (null != n[3] && /\D/.test(n[3]))) ? null : n;
        },
        parse(e, n, r) {
            let i = e[0],
                a = e[1],
                s = e[2],
                o = e[3];
            if (null == s) return R(i);
            let l = C(s, null);
            return null == l ? x(a, s, o, b(r.channelId), i) : P(l, o, b(r.channelId), i);
        }
    },
    U = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match: (e) => u.M0.exec(e),
        parse(e, n, r) {
            let i = e[0],
                a = e[1],
                s = e[2],
                o = e[3],
                l = e[4];
            if (null == s || null == o) return R(i);
            let u = C(o, null);
            if (null != u) return P(u, l, b(r.channelId), i);
            let c = C(s, null);
            return null != c ? P(c, l, b(r.channelId), i) : x(a, s, l, b(r.channelId), i);
        }
    };
n.Z = {
    channelMention: M,
    channelOrMessageUrl: k,
    mediaPostLink: U
};
