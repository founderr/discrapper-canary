var n = {
    current: function (e) {
        return e;
    },
    inject: function (e) {
        n.current = e;
    }
};
e.exports = n;
