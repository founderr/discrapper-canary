n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(224706),
    l = n(931240),
    o = n(650461),
    c = n(598131),
    d = n(34993),
    u = n(950279),
    _ = n(974842),
    E = n(363915),
    h = n(308083),
    m = n(689938);
function I(e) {
    let t = (0, o.Wg)(),
        { progress: n, errors: i } = (0, s.cj)([o.ZP], () => {
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
        handleClanUpdate: a.useCallback((t) => l._9(e, t), [e])
    };
}
let p = {
    [h.Wy.GAMES]: function (e) {
        let { guildId: t } = e;
        a.useEffect(() => {
            r.Z.getDetectableGames();
        }, []);
        let { progress: n, errors: s, handleClanUpdate: l } = I(t);
        return (0, i.jsx)(u.Z, {
            title: m.Z.Messages.CLAN_SETUP_GAMES_TITLE,
            description: m.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
            onUpdateGames: (e) => l({ gameApplicationIds: e }),
            gameApplicationIds: n.gameApplicationIds,
            error: null == s ? void 0 : s.gameApplicationIds,
            guildId: t,
            includeSuggestedGames: !0
        });
    },
    [h.Wy.CUSTOMIZE_TAG_BADGE]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: a, handleClanUpdate: s } = I(t);
        return (0, i.jsx)(_.Z, {
            handleUpdate: s,
            tag: n.tag,
            error: null == a ? void 0 : a.tag,
            badge: n.badgeKind,
            primaryColor: n.badgePrimaryColor,
            secondaryColor: n.badgeSecondaryColor,
            furthestStep: n.furthestStep
        });
    },
    [h.IS.CUSTOMIZE_DISCOVERY]: function (e) {
        let { guildId: t } = e,
            { progress: n } = I(t);
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(c.Z, {
                guildId: t,
                tag: n.tag,
                badge: n.badgeKind,
                primaryColor: n.badgePrimaryColor,
                secondaryColor: n.badgeSecondaryColor
            })
        });
    },
    [h.IS.THANK_YOU_END]: function (e) {
        let { guildId: t } = e;
        return (0, i.jsx)(d.Z, {});
    }
};
function g(e) {
    return e.currentStep.toString();
}
function T(e) {
    if (!p.hasOwnProperty(e.currentStep)) return null;
    let t = p[e.currentStep];
    return (0, i.jsx)(t, { guildId: e.guildId });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, o.Wg)(),
        r = (0, s.e7)([o.ZP], () => {
            var e, i, a;
            return null !== (a = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== a ? a : n.currentStep;
        });
    a.useEffect(() => {
        var e;
        if (((e = r), !p.hasOwnProperty(e))) l.LX();
    }, [r]);
    let c = a.useMemo(
        () => [
            {
                currentStep: r,
                guildId: t
            }
        ],
        [r, t]
    );
    return (0, i.jsx)(E.Z, {
        currentStep: r,
        items: c,
        renderItem: T,
        getItemKey: g
    });
}
