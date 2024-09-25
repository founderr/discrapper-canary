var r = n(161581),
    i = n(936940),
    a = n(80270),
    o = n(192291).NATIVE_ARRAY_BUFFER_VIEWS,
    s = r.ArrayBuffer,
    l = r.Int8Array;
e.exports =
    !o ||
    !i(function () {
        l(1);
    }) ||
    !i(function () {
        new l(-1);
    }) ||
    !a(function (e) {
        new l(), new l(null), new l(1.5), new l(e);
    }, !0) ||
    i(function () {
        return 1 !== new l(new s(2), 1, void 0).length;
    });
