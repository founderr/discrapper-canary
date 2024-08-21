t.d(n, {
    CW: function () {
        return _;
    },
    DF: function () {
        return I;
    },
    KA: function () {
        return R;
    },
    M1: function () {
        return l;
    },
    PM: function () {
        return f;
    },
    Pn: function () {
        return T;
    },
    Rq: function () {
        return c;
    },
    ih: function () {
        return S;
    },
    s$: function () {
        return d;
    },
    sN: function () {
        return s;
    }
});
var r = t(367907),
    i = t(221292),
    u = t(592125),
    a = t(626135),
    E = t(981631);
function o(e) {
    var n;
    return null === (n = u.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
}
function s(e) {
    let { channelId: n, selectedTab: t } = e;
    r.ZP.trackWithMetadata(E.rMx.RTC_PANEL_VIEWED, {
        channel_id: n,
        guild_id: o(n),
        selected_tab: t
    });
}
function c(e) {
    let { channelId: n, userId: t } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: n,
        guild_id: o(n),
        ...(0, i.QN)({ userId: t })
    });
}
function l(e) {
    let { channelId: n, userId: t, analyticsLocation: u } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_USER_VERIFIED, {
        channel_id: n,
        guild_id: o(n),
        location: u,
        ...(0, i.QN)({ userId: t })
    });
}
function _(e) {
    let { channelId: n, userId: t, keyVersion: u, reason: a } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: n,
        guild_id: o(n),
        failure_reason: a,
        key_version: ''.concat(u),
        ...(0, i.QN)({ userId: t })
    });
}
function d(e) {
    let { channelId: n, userId: t } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n),
        ...(0, i.QN)({ userId: t })
    });
}
function f(e) {
    let { channelId: n } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n)
    });
}
function S(e) {
    let { channelId: n } = e;
    r.ZP.trackWithMetadata(E.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: o(n)
    });
}
function I() {
    a.default.track(E.rMx.E2EE_SETTINGS_USER_DELETE);
}
function T() {
    a.default.track(E.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function R(e) {
    a.default.track(E.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
