n.d(t, {
    U3: function () {
        return h;
    },
    XM: function () {
        return u;
    },
    hd: function () {
        return d;
    },
    lI: function () {
        return o;
    },
    py: function () {
        return c;
    }
});
var a = n(481060),
    i = n(819640),
    r = n(585483),
    s = n(981631);
let l = () => i.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
    o = {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!l()) return r.S.dispatch(s.CkL.CAROUSEL_NEXT), !1;
        }
    },
    d = {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!l()) return r.S.dispatch(s.CkL.CAROUSEL_PREV), !1;
        }
    },
    u = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(s.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    c = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(s.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    h = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (r.S.hasSubscribers(s.CkL.MODAL_CLOSE)) return r.S.dispatch(s.CkL.MODAL_CLOSE), !1;
        }
    };
