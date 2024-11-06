n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(224706),
    s = n(931240),
    o = n(650461),
    c = n(94963),
    d = n(745628),
    u = n(950279),
    h = n(796918),
    m = n(513532),
    p = n(741595),
    g = n(974842),
    f = n(363915),
    _ = n(359380),
    E = n(308083),
    I = n(388032);
function C(e) {
    let t = (0, o.Wg)(),
        { progress: n, errors: i } = (0, l.cj)([o.ZP], () => {
            var n;
            let i = o.ZP.getStateForGuild(e);
            return {
                progress: null !== (n = i.progress) && void 0 !== n ? n : t,
                errors: i.errors
            };
        });
    return {
        progress: n,
        errors: i,
        handleClanUpdate: r.useCallback((t) => s._9(e, t), [e])
    };
}
let v = {
    [E.Wy.GAMES]: function (e) {
        let { guildId: t } = e;
        r.useEffect(() => {
            a.Z.getDetectableGames();
        }, []);
        let { progress: n, errors: l, handleClanUpdate: s } = C(t);
        return (0, i.jsx)(u.Z, {
            title: I.intl.string(I.t.t6Mbq6),
            description: I.intl.string(I.t.E7Ymwc),
            onUpdateGames: (e) => s({ gameApplicationIds: e }),
            gameApplicationIds: n.gameApplicationIds,
            error: null == l ? void 0 : l.gameApplicationIds,
            guildId: t,
            includeSuggestedGames: !0
        });
    },
    [E.Wy.PLAYSTYLE]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: l } = C(t);
        return (0, i.jsx)(p.Z, {
            title: I.intl.string(I.t.W0h7pa),
            description: I.intl.string(I.t.JHYekZ),
            onUpdatePlaystyle: (e) => l({ playstyle: e }),
            playstyle: n.playstyle,
            error: null == r ? void 0 : r.playstyle
        });
    },
    [E.Wy.UTILITY_TRAITS]: function (e) {
        let { guildId: t } = e,
            { progress: n, handleClanUpdate: r } = C(t);
        return (0, i.jsx)(_.Z, {
            guildId: t,
            title: I.intl.string(I.t.G4tP09),
            description: I.intl.string(I.t['6Eos19']),
            onUpdateTraits: (e) => r({ interests: e }),
            progress: n
        });
    },
    [E.Wy.INTERESTS]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: l } = C(t);
        return (0, i.jsx)(h.Z, {
            guildId: t,
            handleUpdate: l,
            progress: n,
            error: null == r ? void 0 : r.interests
        });
    },
    [E.Wy.DESCRIPTION]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: l } = C(t);
        return (0, i.jsx)(d.Z, {
            guildId: t,
            handleUpdate: l,
            progress: n,
            errors: r
        });
    },
    [E.Wy.CUSTOMIZE_TAG_BADGE]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: l } = C(t);
        return (0, i.jsx)(g.Z, {
            handleUpdate: l,
            tag: n.tag,
            error: null == r ? void 0 : r.tag,
            badge: n.badgeKind,
            primaryColor: n.badgePrimaryColor,
            secondaryColor: n.badgeSecondaryColor,
            furthestStep: n.furthestStep
        });
    },
    [E.Wy.CUSTOMIZE_BANNER]: function (e) {
        let { guildId: t } = e,
            { progress: n, handleClanUpdate: r } = C(t);
        return (0, i.jsx)(c.Z, {
            handleUpdate: r,
            progress: n,
            guildId: t
        });
    },
    [E.Wy.MEMBER_APPLICATION]: function (e) {
        let { guildId: t } = e,
            { errors: n } = C(t);
        return (0, i.jsx)(m.Z, {
            guildId: t,
            error: null == n ? void 0 : n.verificationForm
        });
    }
};
function S(e) {
    return e.currentStep.toString();
}
function N(e) {
    let t = v[e.currentStep];
    return (0, i.jsx)(t, { guildId: e.guildId });
}
function T(e) {
    let { guildId: t } = e,
        n = (0, o.Wg)(),
        a = (0, l.e7)([o.ZP], () => {
            var e, i, r;
            return null !== (r = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== r ? r : n.currentStep;
        }),
        s = r.useMemo(
            () => [
                {
                    currentStep: a,
                    guildId: t
                }
            ],
            [a, t]
        );
    return (0, i.jsx)(f.Z, {
        currentStep: a,
        items: s,
        renderItem: N,
        getItemKey: S
    });
}
