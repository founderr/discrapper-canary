n.d(t, {
    IE: function () {
        return C;
    },
    K9: function () {
        return I;
    },
    NX: function () {
        return f;
    },
    R_: function () {
        return S;
    },
    e$: function () {
        return E;
    },
    ti: function () {
        return g;
    },
    zV: function () {
        return _;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var i = n(913527),
    s = n.n(i),
    r = n(278074),
    l = n(768581),
    o = n(709054),
    a = n(624138),
    d = n(219496),
    u = n(801461),
    c = n(689938);
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.ZP.getUserAvatarURL(
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
function E(e) {
    let t = (0, a._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let p = ['@', '#', ':'],
    h = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    m = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function f(e) {
    var t, n;
    let i = e.username.toLowerCase();
    if (
        ((t = i),
        (n = u.kt),
        t
            .split('')
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of p) if (i.includes(e)) return !0;
    for (let e of m) if (i === e.toLowerCase()) return !0;
    for (let e of h) if (i.includes(e.toLowerCase())) return !0;
    return !1;
}
function S(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function I(e) {
    let t = o.default.extractTimestamp(e);
    try {
        return s()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function g(e) {
    return (0, r.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: d.K.RATE_LIMIT,
            message: c.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        }))
        .with({ error: r.P.not(r.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: d.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: d.K.AVAILABLE,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        }))
        .with({ taken: !0 }, () => ({
            type: d.K.ERROR,
            message: c.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        }))
        .with({ error: r.P.nullish }, () => ({
            type: d.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function C(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
