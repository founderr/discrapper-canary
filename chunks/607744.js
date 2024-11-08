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
    h = n(981631),
    p = n(372897);
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
    I(e), g.add(e);
    let n = f.Z.getGuild(e),
        r = _.default.getCurrentUser();
    if (null == n || n.verificationLevel === h.sFg.NONE || null == r || n.isOwner(r) || r.isPhoneVerified()) return;
    let i = d.ZP.getMember(n.id, r.id);
    if (null != i) {
        var a;
        if ((0, u.yE)(null !== (a = i.flags) && void 0 !== a ? a : 0, p.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of i.roles) {
            let r = f.Z.getRole(n.id, t);
            null != r && !r.managed && e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.hasFeature(h.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let s = +r.createdAt + 60000 * h.YeM.ACCOUNT_AGE - Date.now(),
        o = +n.joinedAt + 60000 * h.YeM.MEMBER_AGE - Date.now(),
        c = n.verificationLevel >= h.sFg.LOW && !r.isClaimed(),
        m = !1,
        v = !1,
        S = !1,
        b = !1;
    !r.isPhoneVerified() && !r.isStaff() && ((m = n.verificationLevel >= h.sFg.LOW && !r.verified), (v = n.verificationLevel >= h.sFg.VERY_HIGH), (S = n.verificationLevel >= h.sFg.MEDIUM && s > 0), (b = n.verificationLevel >= h.sFg.HIGH && o > 0));
    let T = [];
    b && T.push(o),
        S && T.push(s),
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
            newAccount: S,
            newMember: b,
            canChat: !(c || m || v || S || b),
            accountDeadline: new Date(Date.now() + s),
            memberDeadline: new Date(Date.now() + o),
            timeoutRef: t
        });
}
function I(e) {
    let t = E[e];
    null != t && clearTimeout(t.timeoutRef), delete E[e];
}
function S(e) {
    g.delete(e.guild.id), v(e.guild.id);
}
class b extends (r = o.ZP.Store) {
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
    (a = 'displayName') in (i = b)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new b(l.Z, {
        CONNECTION_OPEN: function () {
            for (let e in (g.clear(), E)) I(e);
        },
        CONNECTION_CLOSED: function () {
            c.default.keys(E).forEach(I);
        },
        CURRENT_USER_UPDATE: function () {
            g.clear();
        },
        GUILD_CREATE: S,
        GUILD_UPDATE: S,
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            I(t.id);
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
