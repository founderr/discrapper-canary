n.d(t, {
    AX: function () {
        return c;
    },
    BR: function () {
        return d;
    },
    Bo: function () {
        return g;
    },
    Df: function () {
        return h;
    },
    LT: function () {
        return C;
    },
    ZZ: function () {
        return m;
    },
    cV: function () {
        return u;
    },
    fW: function () {
        return f;
    },
    gr: function () {
        return p;
    },
    oW: function () {
        return o;
    }
});
var i = n(261470),
    l = n(544891),
    r = n(570140),
    s = n(292793),
    a = n(981631);
function o(e, t, n, i, l) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: i,
        point: l
    });
}
function c(e, t, n, i) {
    return l.tn.post({
        url: a.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: i
        }
    });
}
function u(e, t, n, i) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: i,
        streamerId: n
    });
}
function d(e, t, n) {
    return l.tn.post({
        url: a.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n }
    });
}
function h(e, t, n) {
    l.tn.del({
        url: a.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new i.Z()
    });
}
function m(e, t) {
    (t.state = s.f.STOP),
        r.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        });
}
function p(e, t, n) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function f(e, t) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function g(e) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function C() {
    r.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}
