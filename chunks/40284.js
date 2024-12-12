r.d(n, {
    BT: function () {
        return d;
    },
    IS: function () {
        return o;
    },
    Rd: function () {
        return a;
    },
    SG: function () {
        return s;
    },
    fu: function () {
        return i;
    },
    j1: function () {
        return l;
    },
    jn: function () {
        return u;
    },
    wZ: function () {
        return c;
    }
});
var i = 'dnd-core/ADD_SOURCE',
    a = 'dnd-core/ADD_TARGET',
    s = 'dnd-core/REMOVE_SOURCE',
    o = 'dnd-core/REMOVE_TARGET';
function l(e) {
    return {
        type: i,
        payload: { sourceId: e }
    };
}
function u(e) {
    return {
        type: a,
        payload: { targetId: e }
    };
}
function c(e) {
    return {
        type: s,
        payload: { sourceId: e }
    };
}
function d(e) {
    return {
        type: o,
        payload: { targetId: e }
    };
}
