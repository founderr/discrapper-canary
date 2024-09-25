var r = n(67867),
    i = n(96403),
    a = n(505642),
    o = n(463374),
    s = n(342545),
    l = n(663158),
    u = i(''.indexOf);
r(
    {
        target: 'String',
        proto: !0,
        forced: !l('includes')
    },
    {
        includes: function (e) {
            return !!~u(s(o(this)), s(a(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
