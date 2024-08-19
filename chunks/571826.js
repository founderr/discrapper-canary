r.d(t, {
    DF: function () {
        return y;
    },
    KA: function () {
        return w;
    },
    M1: function () {
        return f;
    },
    PM: function () {
        return h;
    },
    Pn: function () {
        return E;
    },
    Rq: function () {
        return s;
    },
    ih: function () {
        return g;
    },
    s$: function () {
        return d;
    },
    sN: function () {
        return c;
    }
});
var n = r(367907),
    i = r(221292),
    o = r(592125),
    a = r(626135),
    l = r(981631);
function u(e) {
    var t;
    return null === (t = o.Z.getChannel(e)) || void 0 === t ? void 0 : t.guild_id;
}
function c(e) {
    let { channelId: t, selectedTab: r } = e;
    n.ZP.trackWithMetadata(l.rMx.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        selected_tab: r
    });
}
function s(e) {
    let { channelId: t, userId: r } = e;
    n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        ...(0, i.QN)({ userId: r })
    });
}
function f(e) {
    let { channelId: t, userId: r, analyticsLocation: o } = e;
    n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: u(t),
        location: o,
        ...(0, i.QN)({ userId: r })
    });
}
function d(e) {
    let { channelId: t, userId: r } = e;
    n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
        ...(0, i.QN)({ userId: r })
    });
}
function h(e) {
    let { channelId: t } = e;
    n.ZP.trackWithMetadata(l.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t)
    });
}
function g(e) {
    let { channelId: t } = e;
    n.ZP.trackWithMetadata(l.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t)
    });
}
function y() {
    a.default.track(l.rMx.E2EE_SETTINGS_USER_DELETE);
}
function E() {
    a.default.track(l.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function w(e) {
    a.default.track(l.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
