var r = n(67867),
    i = n(43740),
    a = n(818140).indexOf,
    o = n(54659),
    s = i([].indexOf),
    l = !!s && 1 / s([1], 1, -0) < 0;
r(
    {
        target: 'Array',
        proto: !0,
        forced: l || !o('indexOf')
    },
    {
        indexOf: function (e) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return l ? s(this, e, t) || 0 : a(this, e, t);
        }
    }
);
