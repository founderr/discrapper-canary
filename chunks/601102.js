var i = {
    current: function (e) {
        return r.g.requestAnimationFrame(e);
    },
    inject: function (e) {
        i.current = e;
    }
};
e.exports = i;
