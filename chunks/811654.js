n.d(t, {
    HI: function () {
        return h;
    },
    _H: function () {
        return p;
    },
    af: function () {
        return m;
    },
    tx: function () {
        return I;
    }
});
var r = n(47120);
var i = n(524846),
    a = n(911969),
    o = n(592125),
    s = n(271383),
    l = n(430824),
    u = n(594174),
    c = n(483360),
    d = n(823379),
    _ = n(5192),
    E = n(280501);
n(892902);
let f = 15,
    h = 1000;
function p(e, t, n) {
    let r = o.Z.getChannel(n);
    if (null == r) return [];
    let i = e === a.re.USER_SELECT || e === a.re.MENTIONABLE_SELECT,
        s = e === a.re.ROLE_SELECT || e === a.re.MENTIONABLE_SELECT,
        { users: l, roles: u } = c.ZP.queryMentionResults({
            query: t,
            channel: r,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: i,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: f
        }),
        d = l.map((e) => {
            var t;
            let i = _.ZP.getNickname(r.getGuildId(), n, e.user);
            return {
                type: E.tM.USER,
                value: e.user.id,
                label: null !== (t = null != i ? i : e.user.globalName) && void 0 !== t ? t : e.user.username
            };
        });
    return [
        ...d,
        ...u.map((e) => ({
            type: E.tM.ROLE,
            value: e.id,
            label: e.name
        }))
    ];
}
function m(e, t, n) {
    let r = o.Z.getChannel(t);
    return null == r
        ? []
        : c.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: r,
              channelTypes: n,
              limit: f
          }).channels.map((e) => ({
              type: E.tM.CHANNEL,
              value: e.id,
              label: e.name
          }));
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let r = l.Z.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case i.$.USER: {
                    var t;
                    let n = u.default.getUser(e.id);
                    if (null == n) return null;
                    let i = null != r ? s.ZP.getNick(r.id, n.id) : void 0;
                    return {
                        type: E.tM.USER,
                        value: n.id,
                        label: null !== (t = null != i ? i : n.globalName) && void 0 !== t ? t : n.username
                    };
                }
                case i.$.ROLE: {
                    if (null == r) return null;
                    let t = l.Z.getRole(r.id, e.id);
                    if (null == t) return null;
                    return {
                        type: E.tM.ROLE,
                        value: t.id,
                        label: t.name
                    };
                }
                case i.$.CHANNEL: {
                    if (null == r) return null;
                    let t = o.Z.getChannel(e.id);
                    if (null == t || t.guild_id !== r.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return {
                        type: E.tM.CHANNEL,
                        value: t.id,
                        label: t.name
                    };
                }
            }
        })
        .filter(d.lm);
}
