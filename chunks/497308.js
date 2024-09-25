var r = n(821819),
    i = n(982665),
    a = n(726433),
    o = n(448894),
    s = Object.isExtensible,
    l = r(function () {
        s(1);
    });
e.exports =
    l || o
        ? function (e) {
              return !!i(e) && (!o || 'ArrayBuffer' !== a(e)) && (!s || s(e));
          }
        : s;
