var r = n(67867),
    i = n(804104).find,
    a = n(501953),
    o = 'find',
    s = !0;
o in [] &&
    [,][o](function () {
        s = !1;
    }),
    r(
        {
            target: 'Array',
            proto: !0,
            forced: s
        },
        {
            find: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    a(o);
