n.d(t, {
    HH: function () {
        return A;
    },
    O9: function () {
        return f;
    },
    Vu: function () {
        return m;
    },
    W4: function () {
        return c;
    },
    Wz: function () {
        return d;
    },
    Z3: function () {
        return _;
    },
    ZR: function () {
        return u;
    },
    am: function () {
        return p;
    },
    av: function () {
        return O;
    },
    cq: function () {
        return T;
    },
    j: function () {
        return i;
    },
    k3: function () {
        return C;
    },
    kb: function () {
        return y;
    },
    n: function () {
        return h;
    },
    oi: function () {
        return r;
    },
    pw: function () {
        return N;
    },
    rk: function () {
        return v;
    },
    tB: function () {
        return S;
    },
    uo: function () {
        return R;
    },
    vD: function () {
        return g;
    },
    x3: function () {
        return I;
    }
});
var r,
    i,
    a = n(592125),
    o = n(823379),
    s = n(700785),
    l = n(981631);
let u = 7,
    c = 300,
    d = 7,
    _ = 60,
    E = 3,
    f = 5,
    h = 1,
    p = 30,
    m = 200,
    I = 7;
function T(e) {
    var t;
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null !== (t = e.icon) && void 0 !== t ? t : null
    };
}
function g(e) {
    var t, n;
    return {
        channelId: e.channel_id,
        title: e.title,
        description: null !== (t = e.description) && void 0 !== t ? t : '',
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null !== (n = e.icon) && void 0 !== n ? n : null
    };
}
function S(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: r, enabled: i } = e,
        s = {
            authorIds: t.author_ids,
            message: t.message
        },
        l = n.filter((e) => (0, o.lm)(a.Z.getChannel(e.channel_id))).map(T);
    return {
        welcomeMessage: s,
        newMemberActions: l,
        resourceChannels: r.filter((e) => (0, o.lm)(a.Z.getChannel(e.channel_id))).map(g),
        enabled: i
    };
}
function A(e, t) {
    var n, r;
    if (null == t) return null;
    let { welcomeMessage: i, newMemberActions: s, resourceChannels: l, enabled: u } = t,
        c = {
            author_ids: null !== (n = null == i ? void 0 : i.authorIds) && void 0 !== n ? n : [],
            message: null !== (r = null == i ? void 0 : i.message) && void 0 !== r ? r : ''
        },
        d = (null != s ? s : [])
            .filter((e) => (0, o.lm)(a.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, o, s;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
                        name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                        animated: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== o ? o : void 0
                    },
                    icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                };
            });
    return {
        guild_id: e,
        welcome_message: c,
        new_member_actions: d,
        resource_channels: (null != l ? l : [])
            .filter((e) => (0, o.lm)(a.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, o, s;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
                        name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                        animated: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== o ? o : void 0
                    },
                    icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                };
            }),
        enabled: u
    };
}
!(function (e) {
    (e[(e.VIEW = 0)] = 'VIEW'), (e[(e.CHAT = 1)] = 'CHAT');
})(r || (r = {}));
let v = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function N(e) {
    return null == e || ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0);
}
function O(e) {
    return null == e || (!!N(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0);
}
function R(e) {
    var t, n;
    return null != e && (!!O(e) || ((null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < u) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < E) && !0));
}
function C(e) {
    return e.type === l.d4z.GUILD_TEXT && !s.Uu(l.Plq.SEND_MESSAGES, e) && s.Uu(l.Plq.VIEW_CHANNEL, e);
}
function y(e) {
    switch (e.type) {
        case l.d4z.GUILD_TEXT:
        case l.d4z.GUILD_ANNOUNCEMENT:
        case l.d4z.GUILD_FORUM:
        case l.d4z.GUILD_MEDIA:
            return s.Uu(l.Plq.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
!(function (e) {
    (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.TODO = 1)] = 'TODO'), (e[(e.RESOURCE = 2)] = 'RESOURCE');
})(i || (i = {}));
