n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(224706),
    s = n(931240),
    o = n(650461),
    c = n(598131),
    d = n(34993),
    u = n(950279),
    h = n(974842),
    m = n(363915),
    p = n(308083),
    g = n(388032);
function f(e) {
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
let _ = {
    [p.Wy.GAMES]: function (e) {
        let { guildId: t } = e;
        r.useEffect(() => {
            a.Z.getDetectableGames();
        }, []);
        let { progress: n, errors: l, handleClanUpdate: s } = f(t);
        return (0, i.jsx)(u.Z, {
            title: g.intl.string(g.t.t6Mbq6),
            description: g.intl.string(g.t.E7Ymwc),
            onUpdateGames: (e) => s({ gameApplicationIds: e }),
            gameApplicationIds: n.gameApplicationIds,
            error: null == l ? void 0 : l.gameApplicationIds,
            guildId: t,
            includeSuggestedGames: !0
        });
    },
    [p.Wy.CUSTOMIZE_TAG_BADGE]: function (e) {
        let { guildId: t } = e,
            { progress: n, errors: r, handleClanUpdate: l } = f(t);
        return (0, i.jsx)(h.Z, {
            handleUpdate: l,
            tag: n.tag,
            error: null == r ? void 0 : r.tag,
            badge: n.badgeKind,
            primaryColor: n.badgePrimaryColor,
            secondaryColor: n.badgeSecondaryColor,
            furthestStep: n.furthestStep
        });
    },
    [p.IS.CUSTOMIZE_DISCOVERY]: function (e) {
        let { guildId: t } = e,
            { progress: n } = f(t);
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
    [p.IS.THANK_YOU_END]: function (e) {
        let { guildId: t } = e;
        return (0, i.jsx)(d.Z, {});
    }
};
function E(e) {
    return e.currentStep.toString();
}
function I(e) {
    if (!_.hasOwnProperty(e.currentStep)) return null;
    let t = _[e.currentStep];
    return (0, i.jsx)(t, { guildId: e.guildId });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, o.Wg)(),
        a = (0, l.e7)([o.ZP], () => {
            var e, i, r;
            return null !== (r = null === (i = o.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : null === (e = i.progress) || void 0 === e ? void 0 : e.currentStep) && void 0 !== r ? r : n.currentStep;
        });
    r.useEffect(() => {
        var e;
        if (((e = a), !_.hasOwnProperty(e))) s.LX();
    }, [a]);
    let c = r.useMemo(
        () => [
            {
                currentStep: a,
                guildId: t
            }
        ],
        [a, t]
    );
    return (0, i.jsx)(m.Z, {
        currentStep: a,
        items: c,
        renderItem: I,
        getItemKey: E
    });
}
