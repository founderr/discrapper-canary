var r = n(936940),
    i = n(161581).RegExp,
    a = r(function () {
        var e = i('a', 'y');
        return (e.lastIndex = 2), null !== e.exec('abcd');
    }),
    s =
        a ||
        r(function () {
            return !i('a', 'y').sticky;
        }),
    o =
        a ||
        r(function () {
            var e = i('^r', 'gy');
            return (e.lastIndex = 2), null !== e.exec('str');
        });
e.exports = {
    BROKEN_CARET: o,
    MISSED_STICKY: s,
    UNSUPPORTED_Y: a
};
