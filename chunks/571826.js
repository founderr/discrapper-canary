n.d(t, {
    DF: function () {
        return _;
    },
    KA: function () {
        return y;
    },
    M1: function () {
        return E;
    },
    PM: function () {
        return f;
    },
    Pn: function () {
        return h;
    },
    Rq: function () {
        return c;
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
    a = n(592125),
    o = n(626135),
    s = n(981631);
function u(e) {
    var t;
    return null === (t = a.Z.getChannel(e)) || void 0 === t ? void 0 : t.guild_id;
}
function l(e) {
    let { channelId: t, selectedTab: n } = e;
    r.ZP.trackWithMetadata(s.rMx.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        selected_tab: n
    });
}
function c(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        ...(0, i.QN)({ userId: n })
    });
}
function E(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: u(t),
        location: a,
        ...(0, i.QN)({ userId: n })
    });
}
function d(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
        ...(0, i.QN)({ userId: n })
    });
}
function f(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(s.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t)
    });
}
function _() {
    o.default.track(s.rMx.E2EE_SETTINGS_USER_DELETE);
}
function h() {
    o.default.track(s.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function y(e) {
    o.default.track(s.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
