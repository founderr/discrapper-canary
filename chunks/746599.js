r.d(n, {
    J1: function () {
        return u;
    },
    Vk: function () {
        return c;
    },
    cD: function () {
        return l;
    },
    hP: function () {
        return a;
    },
    pM: function () {
        return s;
    },
    qA: function () {
        return o;
    }
});
var i = r(570140);
function a() {
    i.Z.dispatch({ type: 'PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED' });
}
function s() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_POPOUT_DISMISSED' });
}
function o() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED' });
}
function l(e) {
    i.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW',
        shouldShow: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_ENABLED',
        enabled: e
    });
}
function c() {
    i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_UI_RESET' });
}
