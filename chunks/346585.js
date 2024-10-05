n.d(t, {
    IE: function () {
        return p;
    },
    K9: function () {
        return m;
    },
    NX: function () {
        return f;
    },
    R_: function () {
        return I;
    },
    e$: function () {
        return _;
    },
    ti: function () {
        return A;
    },
    zV: function () {
        return d;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var s = n(913527),
    i = n.n(s),
    l = n(278074),
    r = n(768581),
    a = n(709054),
    c = n(624138),
    o = n(219496),
    E = n(801461),
    u = n(689938);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return r.ZP.getUserAvatarURL(
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
function _(e) {
    let t = (0, c._I)(e.username).replace(E.RN, '').replace(E.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let S = ['@', '#', ':'],
    h = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    C = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function f(e) {
    var t, n;
    let s = e.username.toLowerCase();
    if (
        ((t = s),
        (n = E.kt),
        t
            .split('')
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of S) if (s.includes(e)) return !0;
    for (let e of C) if (s === e.toLowerCase()) return !0;
    for (let e of h) if (s.includes(e.toLowerCase())) return !0;
    return !1;
}
function I(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function m(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function A(e) {
    return (0, l.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: o.K.RATE_LIMIT,
            message: u.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        }))
        .with({ error: l.P.not(l.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: o.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: o.K.AVAILABLE,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        }))
        .with({ taken: !0 }, () => ({
            type: o.K.ERROR,
            message: u.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        }))
        .with({ error: l.P.nullish }, () => ({
            type: o.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function p(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
