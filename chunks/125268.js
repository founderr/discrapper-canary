n.d(t, {
    AX: function () {
        return c;
    },
    BR: function () {
        return d;
    },
    Bo: function () {
        return f;
    },
    Df: function () {
        return h;
    },
    LT: function () {
        return E;
    },
    ZZ: function () {
        return m;
    },
    cV: function () {
        return u;
    },
    fW: function () {
        return _;
    },
    gr: function () {
        return p;
    },
    oW: function () {
        return o;
    }
});
var i = n(261470),
    s = n(544891),
    a = n(570140),
    l = n(292793),
    r = n(981631);
function o(e, t, n, i, s) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: i,
        point: s
    });
}
function c(e, t, n, i) {
    return s.tn.post({
        url: r.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: i
        }
    });
}
function u(e, t, n, i) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: i,
        streamerId: n
    });
}
function d(e, t, n) {
    return s.tn.post({
        url: r.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n }
    });
}
function h(e, t, n) {
    s.tn.del({
        url: r.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new i.Z()
    });
}
function m(e, t) {
    (t.state = l.f.STOP),
        a.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        });
}
function p(e, t, n) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function _(e, t) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function f(e) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function E() {
    a.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}
