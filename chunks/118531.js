var r = n(67867),
    i = n(818140).includes,
    a = n(821819),
    o = n(501953);
r(
    {
        target: 'Array',
        proto: !0,
        forced: a(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    o('includes');
