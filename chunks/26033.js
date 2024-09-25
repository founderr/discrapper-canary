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
        return o;
    },
    aA: function () {
        return h;
    },
    dU: function () {
        return u;
    },
    dX: function () {
        return s;
    },
    kq: function () {
        return d;
    },
    m9: function () {
        return l;
    },
    y0: function () {
        return _;
    }
});
var r = n(876215),
    i = n(758713);
function a(e) {
    return (null == e ? void 0 : e.content_type) === r.s.PLAYED_GAME;
}
function o(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_GAME;
}
function s(e) {
    return a(e) || o(e);
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
function _(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function E(e) {
    return !!s(e) && e.extra.platform === i.z.XBOX;
}
function f(e) {
    return !!s(e) && e.extra.platform === i.z.PLAYSTATION;
}
function h(e) {
    return E(e) || f(e);
}
function p(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
