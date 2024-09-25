e.exports = function (e) {
    var t = e.stateHandler.getState;
    return {
        isDetectable: function e(e) {
            var n = t(e);
            return n && !!n.isDetectable;
        },
        markAsDetectable: function e(e) {
            t(e).isDetectable = !0;
        },
        isBusy: function e(e) {
            return !!t(e).busy;
        },
        markBusy: function e(e, n) {
            t(e).busy = !!n;
        }
    };
};
