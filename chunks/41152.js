n.d(t, {
    D: function () {
        return l;
    },
    F: function () {
        return o;
    }
}),
    n(47120);
var i = n(970606),
    a = n(641037),
    s = n(308083),
    r = n(689938);
function l(e) {
    return [
        ...(0, a.G)(e),
        {
            index: s.IS.CUSTOMIZE_DISCOVERY,
            name: r.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_DISCOVERY_STEP
        },
        {
            index: s.IS.THANK_YOU_END,
            name: r.Z.Messages.CLAN_SETUP_EARLY_SIGNUP_THANK_YOU_STEP
        }
    ];
}
function o(e) {
    switch (e) {
        case s.Wy.GAMES:
            return i._9.GAMES_CHOICE;
        case s.Wy.CUSTOMIZE_TAG_BADGE:
            return i._9.CUSTOMIZE_IDENTITY;
        case s.IS.CUSTOMIZE_DISCOVERY:
            return i._9.CUSTOMIZE_DISCOVERY;
        case s.IS.THANK_YOU_END:
            return i._9.THANK_YOU_END;
        default:
            return i._9.UNKNOWN;
    }
}
