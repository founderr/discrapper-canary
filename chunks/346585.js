n.d(t, {
    IE: function () {
        return I;
    },
    K9: function () {
        return C;
    },
    NX: function () {
        return S;
    },
    R_: function () {
        return m;
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
var r = n(913527),
    i = n.n(r),
    s = n(278074),
    l = n(768581),
    a = n(709054),
    o = n(624138),
    c = n(219496),
    d = n(801461),
    u = n(388032);
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
    let t = (0, o._I)(e.username).replace(d.RN, '').replace(d.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let p = ['@', '#', ':'],
    h = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    f = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function S(e) {
    var t, n;
    let r = e.username.toLowerCase();
    if (
        ((t = r),
        (n = d.kt),
        t
            .split('')
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of p) if (r.includes(e)) return !0;
    for (let e of f) if (r === e.toLowerCase()) return !0;
    for (let e of h) if (r.includes(e.toLowerCase())) return !0;
    return !1;
}
function m(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function C(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function g(e) {
    return (0, s.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: u.intl.string(u.t.T15lqq)
        }))
        .with({ error: s.P.not(s.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: c.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: u.intl.string(u.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: u.intl.string(u.t.mCrAUV)
        }))
        .with({ error: s.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function I(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
