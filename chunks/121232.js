var r = n(67867),
    i = n(476508),
    a = n(228042),
    o = n(292137);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        every: function (e) {
            var t = a(this),
                n = i(e, arguments.length > 1 ? arguments[1] : void 0);
            return (
                !1 !==
                o(
                    t,
                    function (e, r) {
                        if (!n(e, r, t)) return !1;
                    },
                    !0
                )
            );
        }
    }
);
