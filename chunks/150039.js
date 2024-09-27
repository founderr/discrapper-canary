n.d(t, {
    $U: function () {
        return h;
    },
    Jw: function () {
        return T;
    },
    Kg: function () {
        return p;
    },
    PO: function () {
        return S;
    },
    Wx: function () {
        return v;
    },
    ZT: function () {
        return N;
    },
    bd: function () {
        return m;
    },
    f$: function () {
        return R;
    },
    gc: function () {
        return f;
    },
    gd: function () {
        return O;
    },
    s6: function () {
        return A;
    },
    xQ: function () {
        return I;
    }
});
var r = n(653041);
var i = n(470079),
    a = n(442837),
    o = n(809206),
    s = n(676742),
    l = n(18438),
    u = n(778825),
    c = n(350327),
    d = n(621853),
    _ = n(271383),
    E = n(25990);
function f(e) {
    return i.useMemo(() => {
        let t = _.ZP.getMutableAllGuildsAndMembers(),
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
    let n = (0, a.e7)([_.ZP], () => (void 0 === t ? null : _.ZP.getMember(t.id, e.id))),
        r = (0, s.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: i, userErrors: o } = (0, a.cj)([E.Z], () => ({
            pendingUserAvatarDecoration: E.Z.getPendingAvatarDecoration(),
            userErrors: E.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: l, guildErrors: c } = (0, a.cj)([u.Z], () => ({
            pendingGuildAvatarDecoration: u.Z.getPendingAvatarDecoration(),
            guildErrors: u.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? l : i,
        pendingErrors: null != t ? c : o
    };
}
function p(e, t) {
    return (0, a.e7)(
        [d.Z],
        () => {
            var n, r;
            return null == t ? (null === (n = d.Z.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId) : null === (r = d.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === r ? void 0 : r.profileEffectId;
        },
        [e, t]
    );
}
function m(e) {
    return (0, a.cj)(
        [E.Z, u.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: E.Z.getPendingProfileEffectId(),
                      errors: E.Z.getErrors().profileEffect
                  }
                : {
                      pendingProfileEffectId: u.Z.getPendingProfileEffectId(),
                      errors: u.Z.getErrors().profileEffect
                  },
        [e]
    );
}
function I(e, t) {
    (0, c.Cf)(e === t ? void 0 : e);
}
function T(e, t) {
    (0, o.I5)(e === t ? void 0 : e);
}
function g(e) {
    return e ? l.cV : o.cV;
}
function S(e, t) {
    g(null != e)(t);
}
function A(e, t, n) {
    if (e === t) {
        null == n ? (0, o.xn)(void 0) : (0, l.xn)(void 0);
        return;
    }
    null == n ? (0, o.xn)(e) : (0, l.xn)(e);
}
function v(e, t, n) {
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
function N(e) {
    var t, n;
    let { pendingProfileEffectId: r, displayProfile: i } = e,
        a = null == i ? void 0 : null === (t = i._userProfile) || void 0 === t ? void 0 : t.profileEffectId,
        o = null == i ? void 0 : null === (n = i._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId,
        s = null === r;
    return s && null != o ? a : s ? null : null != r ? r : null == i ? void 0 : i.profileEffectId;
}
function O(e, t) {
    return void 0 === e ? null != t : null != e;
}
function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
