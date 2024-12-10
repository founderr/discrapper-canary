n.d(t, {
    Cb: function () {
        return a;
    },
    KF: function () {
        return c;
    },
    Mq: function () {
        return p;
    },
    Q0: function () {
        return s;
    },
    Rh: function () {
        return h;
    },
    aA: function () {
        return _;
    },
    dU: function () {
        return u;
    },
    dX: function () {
        return o;
    },
    kq: function () {
        return d;
    },
    m9: function () {
        return l;
    },
    y0: function () {
        return f;
    }
});
var r = n(876215),
    i = n(758713);
function a(e) {
    return (null == e ? void 0 : e.content_type) === r.s.PLAYED_GAME;
}
function s(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_GAME;
}
function o(e) {
    return a(e) || s(e);
}
function l(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LISTENED_SESSION;
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_ARTIST;
}
function d(e) {
    return u(e) || c(e);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function _(e) {
    var t, n;
    return (!!o((t = e)) && t.extra.platform === i.z.XBOX) || (!!o((n = e)) && n.extra.platform === i.z.PLAYSTATION);
}
function p(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
function h(e) {
    return o(e) || u(e) || f(e) || l(e);
}
