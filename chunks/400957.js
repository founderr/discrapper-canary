var n = r(106295),
    a = r(936940),
    o = r(161581).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !a(function () {
        var e = Symbol('symbol detection');
        return !o(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && n && n < 41);
    });
