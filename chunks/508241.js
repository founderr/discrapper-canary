n.d(t, {
    v: function () {
        return i;
    }
});
var r = n(477816);
function i(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : {
                  onKeyDown: (0, r.x)(e.onKeyDown),
                  onKeyUp: (0, r.x)(e.onKeyUp)
              }
    };
}
