r.d(n, {
    Cb: function () {
        return s;
    },
    KF: function () {
        return d;
    },
    Mq: function () {
        return g;
    },
    Q0: function () {
        return o;
    },
    Rh: function () {
        return E;
    },
    aA: function () {
        return m;
    },
    dU: function () {
        return c;
    },
    dX: function () {
        return l;
    },
    kq: function () {
        return f;
    },
    m9: function () {
        return u;
    },
    y0: function () {
        return _;
    }
});
var i = r(876215),
    a = r(758713);
function s(e) {
    return (null == e ? void 0 : e.content_type) === i.s.PLAYED_GAME;
}
function o(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_GAME;
}
function l(e) {
    return s(e) || o(e);
}
function u(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LISTENED_SESSION;
}
function d(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_ARTIST;
}
function f(e) {
    return c(e) || d(e);
}
function _(e) {
    return (null == e ? void 0 : e.content_type) === i.s.WATCHED_MEDIA;
}
function h(e) {
    return !!l(e) && e.extra.platform === a.z.XBOX;
}
function p(e) {
    return !!l(e) && e.extra.platform === a.z.PLAYSTATION;
}
function m(e) {
    return h(e) || p(e);
}
function g(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LAUNCHED_ACTIVITY;
}
function E(e) {
    return l(e) || c(e) || _(e) || u(e);
}
