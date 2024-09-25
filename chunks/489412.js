var r = n(936940),
    i = n(161581).RegExp,
    a = r(function () {
        var e = i('a', 'y');
        return (e.lastIndex = 2), null !== e.exec('abcd');
    }),
    o =
        a ||
        r(function () {
            return !i('a', 'y').sticky;
        }),
    s =
        a ||
        r(function () {
            var e = i('^r', 'gy');
            return (e.lastIndex = 2), null !== e.exec('str');
        });
e.exports = {
    BROKEN_CARET: s,
    MISSED_STICKY: o,
    UNSUPPORTED_Y: a
};
