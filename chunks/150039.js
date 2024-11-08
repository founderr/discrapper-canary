n.d(t, {
    $U: function () {
        return h;
    },
    Jw: function () {
        return E;
    },
    Kg: function () {
        return p;
    },
    PO: function () {
        return v;
    },
    Wx: function () {
        return S;
    },
    ZT: function () {
        return b;
    },
    bd: function () {
        return m;
    },
    f$: function () {
        return y;
    },
    gc: function () {
        return _;
    },
    gd: function () {
        return T;
    },
    s6: function () {
        return I;
    },
    xQ: function () {
        return g;
    }
}),
    n(653041);
var r = n(192379),
    i = n(442837),
    a = n(809206),
    s = n(676742),
    o = n(18438),
    l = n(778825),
    u = n(350327),
    c = n(621853),
    d = n(271383),
    f = n(25990);
function _(e) {
    return r.useMemo(() => {
        let t = d.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null === (r = t[i][e]) || void 0 === r ? void 0 : r.avatar;
            if (null != a) null == n[a] && (n[a] = []), n[a].push(i);
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function h(e, t) {
    let n = (0, i.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t.id, e.id))),
        r = (0, s.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: o } = (0, i.cj)([f.Z], () => ({
            pendingUserAvatarDecoration: f.Z.getPendingAvatarDecoration(),
            userErrors: f.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: u, guildErrors: c } = (0, i.cj)([l.Z], () => ({
            pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
            guildErrors: l.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? u : a,
        pendingErrors: null != t ? c : o
    };
}
function p(e, t) {
    return (0, i.e7)(
        [c.Z],
        () => {
            var n, r;
            return null == t ? (null === (n = c.Z.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId) : null === (r = c.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === r ? void 0 : r.profileEffectId;
        },
        [e, t]
    );
}
function m(e) {
    return (0, i.cj)(
        [f.Z, l.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: f.Z.getPendingProfileEffectId(),
                      errors: f.Z.getErrors().profileEffect
                  }
                : {
                      pendingProfileEffectId: l.Z.getPendingProfileEffectId(),
                      errors: l.Z.getErrors().profileEffect
                  },
        [e]
    );
}
function g(e, t) {
    (0, u.Cf)(e === t ? void 0 : e);
}
function E(e, t) {
    (0, a.I5)(e === t ? void 0 : e);
}
function v(e, t) {
    (null != e ? o.cV : a.cV)(t);
}
function I(e, t, n) {
    if (e === t) {
        null == n ? (0, a.xn)(void 0) : (0, o.xn)(void 0);
        return;
    }
    null == n ? (0, a.xn)(e) : (0, o.xn)(e);
}
function S(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e)
        return '' === e
            ? {
                  value: r ? n : null,
                  isUsingGuildValue: !1
              }
            : {
                  value: e,
                  isUsingGuildValue: r
              };
    return null != t && '' !== t
        ? {
              value: t,
              isUsingGuildValue: !0
          }
        : {
              value: n,
              isUsingGuildValue: !1
          };
}
function b(e) {
    var t, n;
    let { pendingProfileEffectId: r, displayProfile: i } = e,
        a = null == i ? void 0 : null === (t = i._userProfile) || void 0 === t ? void 0 : t.profileEffectId,
        s = null == i ? void 0 : null === (n = i._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId,
        o = null === r;
    return o && null != s ? a : o ? null : null != r ? r : null == i ? void 0 : i.profileEffectId;
}
function T(e, t) {
    return void 0 === e ? null != t : null != e;
}
function y(e, t) {
    return void 0 === e ? null != t : null != e;
}
