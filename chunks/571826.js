e.d(n, {
    CW: function () {
        return E;
    },
    DF: function () {
        return h;
    },
    KA: function () {
        return y;
    },
    M1: function () {
        return d;
    },
    PM: function () {
        return _;
    },
    Pn: function () {
        return T;
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
var r = e(367907),
    i = e(221292),
    u = e(592125),
    o = e(626135),
    a = e(981631);
function l(t) {
    var n;
    return null === (n = u.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id;
}
function c(t) {
    let { channelId: n, selectedTab: e } = t;
    r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
        channel_id: n,
        guild_id: l(n),
        selected_tab: e
    });
}
function s(t) {
    let { channelId: n, userId: e } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: n,
        guild_id: l(n),
        ...(0, i.QN)({ userId: e })
    });
}
function d(t) {
    let { channelId: n, userId: e, analyticsLocation: u } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
        channel_id: n,
        guild_id: l(n),
        location: u,
        ...(0, i.QN)({ userId: e })
    });
}
function E(t) {
    let { channelId: n, userId: e, keyVersion: u, reason: o } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: n,
        guild_id: l(n),
        failure_reason: o,
        key_version: ''.concat(u),
        ...(0, i.QN)({ userId: e })
    });
}
function f(t) {
    let { channelId: n, userId: e } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: l(n),
        ...(0, i.QN)({ userId: e })
    });
}
function _(t) {
    let { channelId: n } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: l(n)
    });
}
function S(t) {
    let { channelId: n } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: n,
        guild_id: l(n)
    });
}
function h() {
    o.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
}
function T() {
    o.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function y(t) {
    o.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(t) });
}
