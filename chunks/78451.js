s.d(a, {
    IF: function () {
        return N;
    },
    LJ: function () {
        return l;
    },
    MF: function () {
        return i;
    },
    X7: function () {
        return R;
    },
    c7: function () {
        return c;
    }
});
var _ = s(524437);
s(376345);
var E = s(692547),
    t = s(2150),
    n = s(187819),
    r = s(981631),
    I = s(973005),
    o = s(689938);
function l(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case u('PRIMARY_400'):
                    return t.q.ACCENT;
                case u('GREEN_360'):
                    return t.q.GREEN;
                case u('YELLOW_360'):
                    return t.q.YELLOW;
                case u('ORANGE_345'):
                    return t.q.ORANGE;
                case u('RED_400'):
                    return t.q.RED;
                default:
                    return t.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: o.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: o.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: r.sFg.NONE,
            disabled: e,
            tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
        },
        {
            name: o.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: o.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: r.sFg.LOW,
            color: a ? void 0 : u('GREEN_360')
        },
        {
            name: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({ min: r.YeM.ACCOUNT_AGE }),
            value: r.sFg.MEDIUM,
            color: a ? void 0 : u('YELLOW_360')
        },
        {
            name: o.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({ min: r.YeM.MEMBER_AGE }),
            value: r.sFg.HIGH,
            color: a ? void 0 : u('ORANGE_345')
        },
        {
            name: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: r.sFg.VERY_HIGH,
            color: a ? void 0 : u('RED_400')
        }
    ];
}
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: r.lxg.ALL_MEMBERS,
            color: u('RED_400')
        },
        {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
            color: u('YELLOW_360')
        },
        {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: r.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
            color: u('PRIMARY_400')
        }
    ];
}
function c() {
    let e = (0, n.sp)({ location: 'generate-dm-spam-options' });
    return [
        {
            name: e ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_ALL_TITLE : o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: e ? o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2 : o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: _.Xr.FRIENDS_AND_NON_FRIENDS,
            color: u('GREEN_360')
        },
        {
            name: e ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_NON_FRIENDS_TITLE : o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: e ? o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP_V2 : o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: _.Xr.NON_FRIENDS,
            color: u('YELLOW_360')
        },
        {
            name: e ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_DISABLED_TITLE : o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: e ? o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP_V2 : o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: _.Xr.DISABLED,
            color: u('RED_400')
        }
    ];
}
function R() {
    return [
        {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: I.TI.FRIENDS_AND_NON_FRIENDS,
            color: u('GREEN_360')
        },
        {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: I.TI.NON_FRIENDS,
            color: u('YELLOW_360')
        },
        {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: I.TI.DISABLED,
            color: u('RED_400')
        }
    ];
}
function u(e) {
    return E.Z.unsafe_rawColors[e].css;
}
