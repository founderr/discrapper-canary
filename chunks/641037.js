n.d(t, {
    G: function () {
        return o;
    },
    V: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(931240),
    a = n(308083),
    s = n(388032);
function o(e) {
    return [
        {
            index: a.Wy.GAMES,
            name: s.intl.string(s.t.OeK1VF),
            hasError: (null == e ? void 0 : e.gameApplicationIds) != null
        },
        {
            index: a.Wy.PLAYSTYLE,
            name: s.intl.string(s.t['5bXlz8']),
            hasError: (null == e ? void 0 : e.playstyle) != null
        },
        {
            index: a.Wy.UTILITY_TRAITS,
            name: s.intl.string(s.t.Ftxkr6)
        },
        {
            index: a.Wy.INTERESTS,
            name: s.intl.string(s.t['+P0jJy']),
            hasError: (null == e ? void 0 : e.interests) != null
        },
        {
            index: a.Wy.DESCRIPTION,
            name: s.intl.string(s.t['iGB+Oj']),
            hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
        },
        {
            index: a.Wy.CUSTOMIZE_TAG_BADGE,
            name: s.intl.string(s.t.PP3Fjo),
            hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
        },
        {
            index: a.Wy.CUSTOMIZE_BANNER,
            name: s.intl.string(s.t.mE3pAQ),
            hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
        },
        {
            index: a.Wy.MEMBER_APPLICATION,
            name: s.intl.string(s.t.iLTI5e),
            hasError: (null == e ? void 0 : e.verificationForm) != null
        }
    ];
}
async function c(e) {
    let { guildId: t, onSuccess: a, progress: s } = e;
    try {
        await l.sv(t, s);
    } catch (e) {
        return;
    }
    a(),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e('63636').then(n.bind(n, 511385));
            return (n) =>
                (0, i.jsx)(e, {
                    guildId: t,
                    tag: s.tag,
                    brandPrimaryColor: s.brandPrimaryColor,
                    ...n
                });
        });
}
