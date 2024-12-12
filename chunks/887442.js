var i = {
    current: function (e) {
        return r.g.cancelAnimationFrame(e);
    },
    inject: function (e) {
        i.current = e;
    }
};
e.exports = i;
