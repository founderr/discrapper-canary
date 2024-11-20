n.d(t, {
    EJ: function () {
        return h;
    },
    XV: function () {
        return _;
    },
    Z4: function () {
        return g;
    },
    Zp: function () {
        return m;
    },
    f6: function () {
        return E;
    },
    ky: function () {
        return I;
    },
    p0: function () {
        return T;
    },
    pY: function () {
        return b;
    },
    vh: function () {
        return p;
    }
});
var r = n(108131),
    i = n.n(r),
    a = n(442837),
    s = n(607070),
    o = n(715903),
    l = n(271383),
    u = n(594174),
    c = n(308083),
    d = n(981631),
    f = n(388032);
function _(e, t) {
    let n = Array.from(e);
    return (
        n.sort((e, n) => {
            let r = i().v3(''.concat(e).concat(t));
            return r - i().v3(''.concat(n).concat(t));
        }),
        n
    );
}
function p(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge
          }
        : {};
}
function h(e) {
    return null != e && e.hasFeature(d.oNc.CLAN);
}
function m(e, t) {
    var n, r;
    return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && (((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (r = e.clan) || void 0 === r ? void 0 : r.tag) !== t.tag) || null == t.identityEnabled);
}
function g(e, t) {
    return (null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled) || !1;
}
let E = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[1];
        if (2 === e.length)
            return f.intl.formatToPlainString(f.t['+v1gGx'], {
                item1: e[0],
                item2: e[1]
            });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(', '),
                r = f.intl.formatToPlainString(f.t['+E2fNj'], { n: e.length - t });
            return f.intl.formatToPlainString(f.t.hZNSNz, {
                items: n,
                last: r
            });
        }
        {
            let t = e.slice(0, -1).join(', '),
                n = e[e.length - 1];
            return f.intl.formatToPlainString(f.t.hZNSNz, {
                items: t,
                last: n
            });
        }
    },
    v = {
        [c.NC.SIZE_12]: 16,
        [c.NC.SIZE_16]: 16,
        [c.NC.SIZE_24]: 24,
        [c.NC.SIZE_32]: 32,
        [c.NC.SIZE_36]: 40
    };
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = v[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function b(e, t) {
    if (null == t) return;
    let { CDN_HOST: n } = window.GLOBAL_ENV;
    if (null != n) return ''.concat(location.protocol, '//').concat(n, '/clan-banners/').concat(e, '/').concat(t, '.png?size=512');
}
function T(e, t) {
    let n = (0, a.e7)([s.Z], () => s.Z.hideTags),
        r = (0, a.e7)([u.default], () => u.default.getUser(e), [e]),
        i = (0, a.e7)(
            [l.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = l.ZP.getMember(t, e);
                return (0, o.EY)(n);
            },
            [t, e]
        ),
        { tag: c, guildId: d } = p(null == r ? void 0 : r.clan);
    return !n && null != d && null != c && !i && !0;
}
c.NC.SIZE_12, c.NC.SIZE_16, c.NC.SIZE_24, c.NC.SIZE_32, c.NC.SIZE_36;
