var n = r(936940),
    a = r(879);
e.exports = !n(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', a(1, 7)), 7 !== e.stack);
});
