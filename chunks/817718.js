t.d(n, {
    U3: function () {
        return f;
    },
    XM: function () {
        return c;
    },
    hd: function () {
        return u;
    },
    lI: function () {
        return s;
    },
    py: function () {
        return d;
    }
});
var a = t(481060),
    r = t(819640),
    i = t(585483),
    l = t(981631);
let o = () => r.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
    s =
        12633 == t.j
            ? {
                  binds: ['right'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
                  }
              }
            : null,
    u =
        12633 == t.j
            ? {
                  binds: ['left'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
                  }
              }
            : null,
    c = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    f = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return i.S.dispatch(l.CkL.MODAL_CLOSE), !1;
        }
    };
