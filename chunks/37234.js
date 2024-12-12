r.d(n, {
    Ou: function () {
        return o;
    },
    jN: function () {
        return a;
    },
    xf: function () {
        return s;
    }
});
var i = r(570140);
function a(e) {
    i.Z.dispatch({
        type: 'LAYER_PUSH',
        component: e
    });
}
function s() {
    i.Z.dispatch({ type: 'LAYER_POP' });
}
function o() {
    i.Z.dispatch({ type: 'LAYER_POP_ALL' });
}
