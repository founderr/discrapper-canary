r.d(n, {
    MS: function () {
        return d;
    },
    TC: function () {
        return c;
    },
    bA: function () {
        return s;
    },
    gl: function () {
        return f;
    },
    xv: function () {
        return o;
    },
    z4: function () {
        return l;
    },
    zc: function () {
        return u;
    }
});
var i = r(570140),
    a = r(579806);
function s(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_OPEN',
        section: e
    }),
        i.Z.dispatch({ type: 'RTC_DEBUG_POPOUT_WINDOW_OPEN' });
}
function o() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_CLOSE' });
}
function l() {
    i.Z.dispatch({ type: 'RTC_DEBUG_MODAL_OPEN_REPLAY' });
}
function u(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_MODAL_SET_SECTION',
        section: e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_SET_RECORDING_FLAG',
        value: e
    });
}
function d(e, n, r) {
    i.Z.dispatch({
        type: 'RTC_DEBUG_SET_SIMULCAST_OVERRIDE',
        userId: e,
        context: n,
        quality: r
    });
}
function f() {
    a.Z.fileManager
        .showOpenDialog({
            filters: [
                {
                    name: 'All Files',
                    extensions: ['*']
                }
            ]
        })
        .then((e) => {
            let n = 0 === e.length ? '' : e[0];
            i.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH',
                path: n
            });
        });
}
