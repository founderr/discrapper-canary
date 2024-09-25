n.d(t, {
    IE: function () {
        return O;
    },
    K9: function () {
        return v;
    },
    NX: function () {
        return S;
    },
    R_: function () {
        return A;
    },
    e$: function () {
        return p;
    },
    ti: function () {
        return N;
    },
    zV: function () {
        return h;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(627341);
var o = n(913527),
    s = n.n(o),
    l = n(278074),
    u = n(768581),
    c = n(709054),
    d = n(624138),
    _ = n(219496),
    E = n(801461),
    f = n(689938);
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u.ZP.getUserAvatarURL(
        {
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: '0000'
        },
        t,
        80
    );
}
function p(e) {
    let t = (0, d._I)(e.username).replace(E.RN, '').replace(E.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let m = ['@', '#', ':'],
    I = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    T = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function g(e, t) {
    return e
        .split('')
        .filter((e) => !t.includes(e.charCodeAt(0)))
        .join('');
}
function S(e) {
    let t = e.username.toLowerCase();
    if (g(t, E.kt).length < 2) return !0;
    for (let e of m) if (t.includes(e)) return !0;
    for (let e of T) if (t === e.toLowerCase()) return !0;
    for (let e of I) if (t.includes(e.toLowerCase())) return !0;
    return !1;
}
function A(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function v(e) {
    let t = c.default.extractTimestamp(e);
    try {
        return s()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function N(e) {
    return (0, l.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: _.K.RATE_LIMIT,
            message: f.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        }))
        .with({ error: l.P.not(l.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: _.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: _.K.AVAILABLE,
            message: f.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        }))
        .with({ taken: !0 }, () => ({
            type: _.K.ERROR,
            message: f.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        }))
        .with({ error: l.P.nullish }, () => ({
            type: _.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function O(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
