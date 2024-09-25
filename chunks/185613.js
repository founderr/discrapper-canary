var r = n(67867),
    i = n(476508),
    a = n(228042),
    o = n(146321),
    s = n(292137),
    l = o.Map,
    u = o.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        filter: function (e) {
            var t = a(this),
                n = i(e, arguments.length > 1 ? arguments[1] : void 0),
                r = new l();
            return (
                s(t, function (e, i) {
                    n(e, i, t) && u(r, i, e);
                }),
                r
            );
        }
    }
);
