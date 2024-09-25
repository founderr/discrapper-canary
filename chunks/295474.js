n.d(t, {
    Ux: function () {
        return T;
    },
    gS: function () {
        return g;
    },
    ww: function () {
        return S;
    }
});
var r = n(789020);
var i = n(470079),
    a = n(399606),
    o = n(230711),
    s = n(906732),
    l = n(18438),
    u = n(314897),
    c = n(271383),
    d = n(430824),
    _ = n(496675),
    E = n(914010),
    f = n(715903),
    h = n(981631),
    p = n(372897),
    m = n(526761),
    I = n(689938);
function T(e) {
    return (0, a.e7)(
        [u.default, c.ZP],
        () => {
            if (null == e) return !1;
            let t = u.default.getId();
            return (0, f.EY)(c.ZP.getMember(e, t));
        },
        [e]
    );
}
function g(e) {
    return (0, a.cj)(
        [u.default, c.ZP, E.Z, d.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = E.Z.getGuildId(),
                r = null != e ? e : n,
                i = d.Z.getGuild(r);
            if (null == i || null == r) return t;
            let a = u.default.getId(),
                o = c.ZP.getMember(r, a),
                s = (0, f.Ow)(null == o ? void 0 : o.flags);
            if (0 === s.size) return t;
            if (s.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                if (null == e) {
                    var l;
                    t.nick = [I.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({ guildName: null !== (l = i.name) && void 0 !== l ? l : '' })];
                } else t.nick = [I.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
            }
            return s.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t;
        },
        [e]
    );
}
function S(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: r, analyticsLocations: u, openWithoutBackstack: c } = e,
        { analyticsLocations: E } = (0, s.ZP)(),
        f = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        p = (0, a.e7)([_.Z], () => null != f && _.Z.can(h.Plq.CHANGE_NICKNAME, f), [f]);
    return [
        i.useCallback(() => {
            if (null == f) return;
            let e = h.oAB.PROFILE_CUSTOMIZATION,
                t = m.NB.GUILD;
            p ? (0, l.Fq)(f, null != u ? u : E) : (t = m.NB.USER_PROFILE);
            o.Z.open(e, t, {
                scrollPosition: n,
                analyticsLocation: r,
                analyticsLocations: u,
                openWithoutBackstack: c
            });
        }, [p, n, r, u, c, f, E]),
        p
    ];
}
