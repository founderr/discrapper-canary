n(47120), n(789020), n(653041);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(630388),
    c = n(709054),
    d = n(271383),
    f = n(430824),
    _ = n(594174),
    p = n(981631),
    h = n(372897);
let m = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    },
    g = new Set(),
    E = {};
function v(e) {
    let t;
    b(e), g.add(e);
    let n = f.Z.getGuild(e),
        r = _.default.getCurrentUser();
    if (null == n || n.verificationLevel === p.sFg.NONE || null == r || n.isOwner(r) || r.isPhoneVerified()) return;
    let i = d.ZP.getMember(n.id, r.id);
    if (null != i) {
        var a;
        if ((0, u.yE)(null !== (a = i.flags) && void 0 !== a ? a : 0, h.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of i.roles) {
            let r = f.Z.getRole(n.id, t);
            null != r && !r.managed && e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.hasFeature(p.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let s = +r.createdAt + 60000 * p.YeM.ACCOUNT_AGE - Date.now(),
        o = +n.joinedAt + 60000 * p.YeM.MEMBER_AGE - Date.now(),
        c = n.verificationLevel >= p.sFg.LOW && !r.isClaimed(),
        m = !1,
        v = !1,
        I = !1,
        S = !1;
    !r.isPhoneVerified() && !r.isStaff() && ((m = n.verificationLevel >= p.sFg.LOW && !r.verified), (v = n.verificationLevel >= p.sFg.VERY_HIGH), (I = n.verificationLevel >= p.sFg.MEDIUM && s > 0), (S = n.verificationLevel >= p.sFg.HIGH && o > 0));
    let T = [];
    S && T.push(o),
        I && T.push(s),
        T.length > 0 &&
            (t = setTimeout(
                () =>
                    l.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...T)
            )),
        (E[e] = {
            notClaimed: c,
            notEmailVerified: m,
            notPhoneVerified: v,
            newAccount: I,
            newMember: S,
            canChat: !(c || m || v || I || S),
            accountDeadline: new Date(Date.now() + s),
            memberDeadline: new Date(Date.now() + o),
            timeoutRef: t
        });
}
function b(e) {
    let t = E[e];
    null != t && clearTimeout(t.timeoutRef), delete E[e];
}
function I(e) {
    g.delete(e.guild.id), v(e.guild.id);
}
class S extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default);
    }
    getCheck(e) {
        var t;
        return !g.has(e) && v(e), null !== (t = E[e]) && void 0 !== t ? t : m;
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
(s = 'GuildVerificationStore'),
    (a = 'displayName') in (i = S)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new S(l.Z, {
        CONNECTION_OPEN: function () {
            for (let e in (g.clear(), E)) b(e);
        },
        CONNECTION_CLOSED: function () {
            c.default.keys(E).forEach(b);
        },
        CURRENT_USER_UPDATE: function () {
            g.clear();
        },
        GUILD_CREATE: I,
        GUILD_UPDATE: I,
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            b(t.id);
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { guildId: n, user: r } = e;
            if (r.id !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            g.delete(n);
        },
        GUILD_VERIFICATION_CHECK: function (e) {
            let { guildId: t } = e;
            v(t);
        }
    }));
