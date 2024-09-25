n.d(t, {
    Z: function () {
        return m;
    },
    s: function () {
        return r;
    }
});
var r,
    i = n(536895);
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function o(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function s(e, t) {
    let { columnCounts: n } = t,
        r = o(a(0, n.length - 1), e.focusedY);
    return {
        ...e,
        columnCounts: n,
        focusedX: o(null == n[r] ? 0 : n[r] - 1, e.focusedX),
        focusedY: r
    };
}
function l(e, t) {
    let { x: n, y: r } = t,
        i = a(0, o(r, e.columnCounts.length - 1));
    return {
        ...e,
        focusedX: a(0, o(n, e.columnCounts[i] - 1)),
        focusedY: i
    };
}
function u(e, t) {
    let n = a(0, e.focusedY - 1);
    return {
        ...e,
        focusedX: o(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    };
}
function c(e, t) {
    let n = o(e.focusedY + 1, e.columnCounts.length - 1);
    return {
        ...e,
        focusedX: o(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    };
}
function d(e, t) {
    let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
        r = n ? 0 : o(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
        i = n ? e.focusedY + 1 : e.focusedY;
    return {
        ...e,
        focusedX: r,
        focusedY: i
    };
}
function _(e, t) {
    let n = 0 !== e.focusedY && 0 === e.focusedX,
        r = n ? e.focusedY - 1 : e.focusedY,
        i = n ? e.columnCounts[r] - 1 : a(0, e.focusedX - 1);
    return {
        ...e,
        focusedX: i,
        focusedY: r
    };
}
function E(e, t) {
    return {
        ...e,
        focusedX: 0
    };
}
function f(e, t) {
    return {
        ...e,
        focusedX: e.columnCounts[e.focusedY] - 1
    };
}
function h(e, t) {
    return {
        ...e,
        focusedX: 0,
        focusedY: 0
    };
}
function p(e, t) {
    let n = e.columnCounts.length - 1;
    return {
        ...e,
        focusedX: e.columnCounts[n] - 1,
        focusedY: n
    };
}
function m(e, t) {
    switch (t.type) {
        case i.Us.NAVIGATE_UP:
            return u(e, t);
        case i.Us.NAVIGATE_DOWN:
            return c(e, t);
        case i.Us.NAVIGATE_RIGHT:
            return d(e, t);
        case i.Us.NAVIGATE_LEFT:
            return _(e, t);
        case i.Us.NAVIGATE_INLINE_START:
            return E(e, t);
        case i.Us.NAVIGATE_INLINE_END:
            return f(e, t);
        case i.Us.NAVIGATE_START:
            return h(e, t);
        case i.Us.NAVIGATE_END:
            return p(e, t);
        case 'UPDATE_COLUMN_COUNTS':
            return s(e, t);
        case 'SET_FOCUSED_POSITION':
            return l(e, t);
        case i.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Grid navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
!(function (e) {
    (e.UPDATE_COLUMN_COUNTS = 'UPDATE_COLUMN_COUNTS'), (e.SET_FOCUSED_POSITION = 'SET_FOCUSED_POSITION');
})(r || (r = {}));
