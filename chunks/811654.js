l.d(n, {
    HI: function () {
        return E;
    },
    _H: function () {
        return p;
    },
    af: function () {
        return N;
    },
    tx: function () {
        return f;
    }
}),
    l(47120);
var t = l(524846),
    r = l(911969),
    a = l(592125),
    i = l(271383),
    s = l(430824),
    u = l(594174),
    o = l(483360),
    c = l(823379),
    d = l(5192),
    m = l(280501);
l(892902);
let E = 1000;
function p(e, n, l) {
    let t = a.Z.getChannel(l);
    if (null == t) return [];
    let i = e === r.re.USER_SELECT || e === r.re.MENTIONABLE_SELECT,
        s = e === r.re.ROLE_SELECT || e === r.re.MENTIONABLE_SELECT,
        { users: u, roles: c } = o.ZP.queryMentionResults({
            query: n,
            channel: t,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: i,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15
        }),
        E = u.map((e) => {
            var n;
            let r = d.ZP.getNickname(t.getGuildId(), l, e.user);
            return {
                type: m.tM.USER,
                value: e.user.id,
                label: null !== (n = null != r ? r : e.user.globalName) && void 0 !== n ? n : e.user.username
            };
        });
    return [
        ...E,
        ...c.map((e) => ({
            type: m.tM.ROLE,
            value: e.id,
            label: e.name
        }))
    ];
}
function N(e, n, l) {
    let t = a.Z.getChannel(n);
    return null == t
        ? []
        : o.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: t,
              channelTypes: l,
              limit: 15
          }).channels.map((e) => ({
              type: m.tM.CHANNEL,
              value: e.id,
              label: e.name
          }));
}
function f(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let r = s.Z.getGuild(n);
    return e
        .map((e) => {
            switch (e.type) {
                case t.$.USER: {
                    var n;
                    let l = u.default.getUser(e.id);
                    if (null == l) return null;
                    let t = null != r ? i.ZP.getNick(r.id, l.id) : void 0;
                    return {
                        type: m.tM.USER,
                        value: l.id,
                        label: null !== (n = null != t ? t : l.globalName) && void 0 !== n ? n : l.username
                    };
                }
                case t.$.ROLE: {
                    if (null == r) return null;
                    let n = s.Z.getRole(r.id, e.id);
                    if (null == n) return null;
                    return {
                        type: m.tM.ROLE,
                        value: n.id,
                        label: n.name
                    };
                }
                case t.$.CHANNEL: {
                    if (null == r) return null;
                    let n = a.Z.getChannel(e.id);
                    if (null == n || n.guild_id !== r.id || (l.length > 0 && !l.includes(n.type))) return null;
                    return {
                        type: m.tM.CHANNEL,
                        value: n.id,
                        label: n.name
                    };
                }
            }
        })
        .filter(c.lm);
}
