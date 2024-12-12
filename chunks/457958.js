var n = {
    current: function (e, n) {
        if (!e.setNativeProps) return !1;
        e.setNativeProps(n);
    },
    transformStyles: function (e) {
        return e;
    },
    inject: function (e, r) {
        (n.current = e), (n.transformStyles = r);
    }
};
e.exports = n;
