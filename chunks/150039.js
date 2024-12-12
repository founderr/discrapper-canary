r.d(n, {
    $U: function () {
        return m;
    },
    Jw: function () {
        return I;
    },
    Kg: function () {
        return g;
    },
    PO: function () {
        return b;
    },
    Wx: function () {
        return S;
    },
    ZT: function () {
        return A;
    },
    bd: function () {
        return E;
    },
    f$: function () {
        return C;
    },
    gc: function () {
        return p;
    },
    gd: function () {
        return N;
    },
    s6: function () {
        return y;
    },
    xQ: function () {
        return v;
    }
});
var i = r(653041);
var a = r(192379),
    s = r(442837),
    o = r(809206),
    l = r(676742),
    u = r(18438),
    c = r(778825),
    d = r(350327),
    f = r(621853),
    _ = r(271383),
    h = r(25990);
function p(e) {
    return a.useMemo(() => {
        let n = _.ZP.getMutableAllGuildsAndMembers(),
            r = {};
        for (let a in n) {
            var i;
            let s = null === (i = n[a][e]) || void 0 === i ? void 0 : i.avatar;
            if (null != s) null == r[s] && (r[s] = []), r[s].push(a);
        }
        return null != r ? Object.entries(r).map((e) => e[1][0]) : [];
    }, [e]);
}
function m(e, n) {
    let r = (0, s.e7)([_.ZP], () => (void 0 === n ? null : _.ZP.getMember(n.id, e.id))),
        i = (0, l.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: o } = (0, s.cj)([h.Z], () => ({
            pendingUserAvatarDecoration: h.Z.getPendingAvatarDecoration(),
            userErrors: h.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: u, guildErrors: d } = (0, s.cj)([c.Z], () => ({
            pendingGuildAvatarDecoration: c.Z.getPendingAvatarDecoration(),
            guildErrors: c.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: i,
        guildAvatarDecoration: null == r ? void 0 : r.avatarDecoration,
        pendingAvatarDecoration: null != n ? u : a,
        pendingErrors: null != n ? d : o
    };
}
function g(e, n) {
    return (0, s.e7)(
        [f.Z],
        () => {
            var r, i;
            return null == n ? (null === (r = f.Z.getUserProfile(e.id)) || void 0 === r ? void 0 : r.profileEffectId) : null === (i = f.Z.getGuildMemberProfile(e.id, n.id)) || void 0 === i ? void 0 : i.profileEffectId;
        },
        [e, n]
    );
}
function E(e) {
    return (0, s.cj)(
        [h.Z, c.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: h.Z.getPendingProfileEffectId(),
                      errors: h.Z.getErrors().profileEffect
                  }
                : {
                      pendingProfileEffectId: c.Z.getPendingProfileEffectId(),
                      errors: c.Z.getErrors().profileEffect
                  },
        [e]
    );
}
function v(e, n) {
    (0, d.Cf)(e === n ? void 0 : e);
}
function I(e, n) {
    (0, o.I5)(e === n ? void 0 : e);
}
function T(e) {
    return e ? u.cV : o.cV;
}
function b(e, n) {
    T(null != e)(n);
}
function y(e, n, r) {
    if (e === n) {
        null == r ? (0, o.xn)(void 0) : (0, u.xn)(void 0);
        return;
    }
    null == r ? (0, o.xn)(e) : (0, u.xn)(e);
}
function S(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e)
        return '' === e
            ? {
                  value: i ? r : null,
                  isUsingGuildValue: !1
              }
            : {
                  value: e,
                  isUsingGuildValue: i
              };
    return null != n && '' !== n
        ? {
              value: n,
              isUsingGuildValue: !0
          }
        : {
              value: r,
              isUsingGuildValue: !1
          };
}
function A(e) {
    var n, r;
    let { pendingProfileEffectId: i, displayProfile: a } = e,
        s = null == a ? void 0 : null === (n = a._userProfile) || void 0 === n ? void 0 : n.profileEffectId,
        o = null == a ? void 0 : null === (r = a._guildMemberProfile) || void 0 === r ? void 0 : r.profileEffectId,
        l = null === i;
    return l && null != o ? s : l ? null : null != i ? i : null == a ? void 0 : a.profileEffectId;
}
function N(e, n) {
    return void 0 === e ? null != n : null != e;
}
function C(e, n) {
    return void 0 === e ? null != n : null != e;
}
