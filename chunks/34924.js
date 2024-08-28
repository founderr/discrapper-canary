var n = r(325008),
    a = r(936940),
    o = r(722063);
e.exports =
    !n &&
    !a(function () {
        return (
            7 !==
            Object.defineProperty(o('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
