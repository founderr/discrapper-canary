n.d(t, {
    CW: function () {
        return l;
    },
    DF: function () {
        return I;
    },
    KA: function () {
        return T;
    },
    M1: function () {
        return _;
    },
    PM: function () {
        return d;
    },
    Pn: function () {
        return R;
    },
    Rq: function () {
        return s;
    },
    ih: function () {
        return S;
    },
    s$: function () {
        return f;
    },
    sN: function () {
        return c;
    }
});
var r = n(367907),
    E = n(221292),
    i = n(592125),
    a = n(626135),
    u = n(981631);
function o(e) {
    var t;
    return null === (t = i.Z.getChannel(e)) || void 0 === t ? void 0 : t.guild_id;
}
function c(e) {
    let { channelId: t, selectedTab: n } = e;
    r.ZP.trackWithMetadata(u.rMx.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: o(t),
        selected_tab: n
    });
}
function s(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: o(t),
        ...(0, E.QN)({ userId: n })
    });
}
function _(e) {
    let { channelId: t, userId: n, analyticsLocation: i } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: o(t),
        location: i,
        ...(0, E.QN)({ userId: n })
    });
}
function l(e) {
    let { channelId: t, userId: n, keyVersion: i, reason: a } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: t,
        guild_id: o(t),
        failure_reason: a,
        key_version: ''.concat(i),
        ...(0, E.QN)({ userId: n })
    });
}
function f(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: o(t),
        ...(0, E.QN)({ userId: n })
    });
}
function d(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: o(t)
    });
}
function S(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(u.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: o(t)
    });
}
function I() {
    a.default.track(u.rMx.E2EE_SETTINGS_USER_DELETE);
}
function R() {
    a.default.track(u.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function T(e) {
    a.default.track(u.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
