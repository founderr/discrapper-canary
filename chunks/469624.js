var r = n(821819),
    i = n(360518),
    a = n(882708),
    o = i('species');
e.exports = function (e) {
    return (
        a >= 51 ||
        !r(function () {
            var t = [];
            return (
                ((t.constructor = {})[o] = function () {
                    return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
            );
        })
    );
};
