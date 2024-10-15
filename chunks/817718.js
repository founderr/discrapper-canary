n.d(t, {
    U3: function () {
        return _;
    },
    XM: function () {
        return c;
    },
    hd: function () {
        return u;
    },
    lI: function () {
        return l;
    },
    py: function () {
        return d;
    }
});
var r = n(481060),
    i = n(819640),
    a = n(585483),
    s = n(981631);
let o = () => i.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
    l = {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!o()) return a.S.dispatch(s.CkL.CAROUSEL_NEXT), !1;
        }
    },
    u = {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!o()) return a.S.dispatch(s.CkL.CAROUSEL_PREV), !1;
        }
    },
    c = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (a.S.dispatch(s.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (a.S.dispatch(s.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    _ = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (a.S.hasSubscribers(s.CkL.MODAL_CLOSE)) return a.S.dispatch(s.CkL.MODAL_CLOSE), !1;
        }
    };
