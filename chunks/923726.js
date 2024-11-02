n.d(t, {
    $F: function () {
        return _;
    },
    Bt: function () {
        return a;
    },
    Gp: function () {
        return h;
    },
    hQ: function () {
        return c;
    },
    kT: function () {
        return s;
    },
    s1: function () {
        return o;
    },
    ss: function () {
        return d;
    },
    sy: function () {
        return u;
    },
    yi: function () {
        return f;
    }
}),
    n(223892);
var r = n(644542),
    i = n(981631);
function a(e) {
    let { enableRoleSubscriptionsForGuild: t } = r.Xv.useExperiment(
            {
                guildId: null != e ? e : i.lds,
                location: '504714_1'
            },
            { autoTrackExposure: !0 }
        ),
        { enableRoleSubscriptionsForUser: n } = r.Zo.useExperiment({ location: '504714_2' }, { autoTrackExposure: !1 });
    return null != e && t && n;
}
function s(e) {
    let { enableRoleSubscriptionsForGuild: t } = r.Xv.getCurrentConfig({
            guildId: null != e ? e : i.lds,
            location: '504714_3'
        }),
        { enableRoleSubscriptionsForUser: n } = r.Zo.getCurrentConfig({ location: '504714_4' }, { autoTrackExposure: !1 });
    return null != e && t && n;
}
function o(e) {
    return r.ai.useExperiment({
        guildId: null != e ? e : i.lds,
        location: '504714_7'
    });
}
let l = [i.oNc.ROLE_SUBSCRIPTIONS_ENABLED, i.oNc.CREATOR_MONETIZABLE, i.oNc.CREATOR_MONETIZABLE_PROVISIONAL],
    u = (e) => null != e && l.some((t) => e.hasFeature(t));
function c(e) {
    let { enabled: t } = r.jJ.getCurrentConfig(
        {
            guildId: null != e ? e : i.lds,
            location: '504714_9'
        },
        { autoTrackExposure: !1 }
    );
    return t;
}
function d(e) {
    let { enabled: t } = r.jJ.useExperiment(
        {
            guildId: null != e ? e : i.lds,
            location: '504714_10'
        },
        { autoTrackExposure: !1 }
    );
    return t;
}
function f(e) {
    let { showCreatorPortalLink: t } = r.jJ.useExperiment(
        {
            guildId: null != e ? e : i.lds,
            location: '504714_11'
        },
        { autoTrackExposure: !1 }
    );
    return t;
}
function _() {
    let { enabled: e } = r.$i.getCurrentConfig({ location: '504714_12' }, { autoTrackExposure: !1 });
    return e;
}
function h() {
    let { enabled: e } = r.$i.useExperiment({ location: '504714_13' }, { autoTrackExposure: !1 });
    return e;
}
