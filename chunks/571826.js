n.d(e, {
    CW: function () {
        return f;
    },
    DF: function () {
        return h;
    },
    KA: function () {
        return g;
    },
    M1: function () {
        return s;
    },
    PM: function () {
        return _;
    },
    Pn: function () {
        return y;
    },
    Rq: function () {
        return E;
    },
    ih: function () {
        return S;
    },
    s$: function () {
        return d;
    },
    sN: function () {
        return l;
    }
});
var r = n(367907),
    i = n(221292),
    o = n(592125),
    u = n(626135),
    a = n(981631);
function c(t) {
    var e;
    return null === (e = o.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
}
function l(t) {
    let { channelId: e, selectedTab: n } = t;
    r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
        channel_id: e,
        guild_id: c(e),
        selected_tab: n
    });
}
function E(t) {
    let { channelId: e, userId: n } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: e,
        guild_id: c(e),
        ...(0, i.QN)({ userId: n })
    });
}
function s(t) {
    let { channelId: e, userId: n, analyticsLocation: o } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
        channel_id: e,
        guild_id: c(e),
        location: o,
        ...(0, i.QN)({ userId: n })
    });
}
function f(t) {
    let { channelId: e, userId: n, keyVersion: o, reason: u } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: e,
        guild_id: c(e),
        failure_reason: u,
        key_version: ''.concat(o),
        ...(0, i.QN)({ userId: n })
    });
}
function d(t) {
    let { channelId: e, userId: n } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e),
        ...(0, i.QN)({ userId: n })
    });
}
function _(t) {
    let { channelId: e } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e)
    });
}
function S(t) {
    let { channelId: e } = t;
    r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e)
    });
}
function h() {
    u.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
}
function y() {
    u.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function g(t) {
    u.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(t) });
}
