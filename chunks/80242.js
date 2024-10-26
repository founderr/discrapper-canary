n.d(t, {
    o: function () {
        return c;
    }
});
var i = n(192379),
    a = n(970606),
    s = n(41152),
    r = n(116175),
    l = n(308083);
let o = [l.Wy.GAMES, l.Wy.CUSTOMIZE_TAG_BADGE, l.IS.CUSTOMIZE_DISCOVERY, l.IS.THANK_YOU_END];
function c(e) {
    let { guildId: t, progress: n, inSettings: c, updateCurrentStep: d } = e,
        { currentStep: u, gameApplicationIds: _, tag: E } = n,
        h = i.useCallback(
            (e) => {
                switch (e) {
                    case l.Wy.GAMES:
                        (0, a.Gx)({
                            guildId: t,
                            signupPage: (0, s.F)(e),
                            actionType: a.eI.CHOOSE_GAME_IDS,
                            gameApplicationIds: Array.from(n.gameApplicationIds),
                            inSettings: c
                        });
                        break;
                    case l.Wy.CUSTOMIZE_TAG_BADGE:
                        (0, a.Gx)({
                            guildId: t,
                            signupPage: (0, s.F)(e),
                            actionType: a.eI.UPDATE_GUILD_IDENTITY,
                            guildTag: n.tag,
                            badgeName: (0, r.VF)(n.badgeKind),
                            badgePrimaryColor: n.badgePrimaryColor,
                            badgeSecondaryColor: n.badgeSecondaryColor,
                            inSettings: c
                        });
                        break;
                    default:
                        return;
                }
            },
            [t, n, c]
        ),
        m = i.useCallback(() => {
            let e = o.indexOf(u);
            if (-1 === e) {
                d(l.Wy.GAMES);
                return;
            }
            if (e === o.length - 1) {
                d(l.IS.THANK_YOU_END + 1);
                return;
            }
            let t = o[e + 1];
            h(u), d(t);
        }, [u, h, d]),
        I = i.useCallback(() => {
            let e = o.indexOf(u);
            if (-1 === e || 0 === e) {
                d(l.Wy.GAMES);
                return;
            }
            d(o[e - 1]);
        }, [u, d]),
        p = i.useMemo(() => {
            switch (u) {
                case l.Wy.GAMES:
                    return 0 === _.size;
                case l.Wy.CUSTOMIZE_TAG_BADGE:
                    return E.length < 2;
                default:
                    return !1;
            }
        }, [u, _.size, E.length]),
        g = i.useMemo(() => {
            switch (Number(u)) {
                case l.Wy.GAMES:
                case l.IS.THANK_YOU_END:
                    return !0;
                default:
                    return !1;
            }
        }, [u]);
    return i.useMemo(
        () => ({
            onNextClick: m,
            onBackClick: I,
            isNextDisabled: p,
            isBackDisabled: g
        }),
        [g, p, I, m]
    );
}
