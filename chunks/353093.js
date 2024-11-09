n.d(t, {
    EJ: function () {
        return m;
    },
    XV: function () {
        return h;
    },
    Z4: function () {
        return E;
    },
    Zp: function () {
        return g;
    },
    f6: function () {
        return v;
    },
    ky: function () {
        return S;
    },
    p0: function () {
        return b;
    },
    pY: function () {
        return T;
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
    u = n(594174);
n(963202);
var c = n(954138),
    d = n(308083),
    f = n(981631),
    _ = n(388032);
function h(e, t) {
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
function m(e) {
    return null != e && e.hasFeature(f.oNc.CLAN);
}
function g(e, t) {
    var n, r;
    return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && (((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (r = e.clan) || void 0 === r ? void 0 : r.tag) !== t.tag) || null == t.identityEnabled);
}
function E(e, t) {
    return (null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled) || !1;
}
let v = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[1];
        if (2 === e.length)
            return _.intl.formatToPlainString(_.t['+v1gGx'], {
                item1: e[0],
                item2: e[1]
            });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(', '),
                r = _.intl.formatToPlainString(_.t['+E2fNj'], { n: e.length - t });
            return _.intl.formatToPlainString(_.t.hZNSNz, {
                items: n,
                last: r
            });
        }
        {
            let t = e.slice(0, -1).join(', '),
                n = e[e.length - 1];
            return _.intl.formatToPlainString(_.t.hZNSNz, {
                items: t,
                last: n
            });
        }
    },
    I = {
        [d.NC.SIZE_12]: 16,
        [d.NC.SIZE_16]: 16,
        [d.NC.SIZE_24]: 24,
        [d.NC.SIZE_32]: 32,
        [d.NC.SIZE_36]: 40
    };
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = I[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function T(e, t) {
    if (null == t) return;
    let { CDN_HOST: n } = window.GLOBAL_ENV;
    if (null != n) return ''.concat(location.protocol, '//').concat(n, '/clan-banners/').concat(e, '/').concat(t, '.png?size=512');
}
function b(e, t) {
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
        { tag: d, guildId: f } = p(null == r ? void 0 : r.clan),
        _ = (0, c.Z)('clan_tag_chiplet');
    return !n && !!_ && null != f && null != d && !i && !0;
}
d.NC.SIZE_12, d.NC.SIZE_16, d.NC.SIZE_24, d.NC.SIZE_32, d.NC.SIZE_36;
