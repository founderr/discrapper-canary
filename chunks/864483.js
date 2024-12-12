e.exports = function (e) {
    var n = e.stateHandler.getState;
    return {
        isDetectable: function e(e) {
            var r = n(e);
            return r && !!r.isDetectable;
        },
        markAsDetectable: function e(e) {
            n(e).isDetectable = !0;
        },
        isBusy: function e(e) {
            return !!n(e).busy;
        },
        markBusy: function e(e, r) {
            n(e).busy = !!r;
        }
    };
};
