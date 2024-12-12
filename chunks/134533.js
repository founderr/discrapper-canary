var i = r(583584),
    a = function () {
        return !!i;
    };
(a.hasArrayLengthDefineBug = function () {
    if (!i) return null;
    try {
        return 1 !== i([], 'length', { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = a);
