n.d(e, {
    D0: function () {
        return u;
    },
    kY: function () {
        return l;
    },
    lE: function () {
        return c;
    }
});
var i = n(570140);
function l() {
    i.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function u(t) {
    i.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function c(t) {
    i.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
