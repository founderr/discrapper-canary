n.d(e, {
    D0: function () {
        return c;
    },
    kY: function () {
        return i;
    },
    lE: function () {
        return r;
    }
});
var l = n(570140);
function i() {
    l.Z.dispatch({ type: 'SPELLCHECK_TOGGLE' });
}
function c(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_LEARN_WORD',
        word: t
    });
}
function r(t) {
    l.Z.dispatch({
        type: 'SPELLCHECK_UNLEARN_WORD',
        word: t
    });
}
