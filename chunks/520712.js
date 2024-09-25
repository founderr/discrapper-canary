var r = n(192291),
    i = n(692994),
    a = n(165915),
    o = n(974971),
    s = n(926515),
    l = n(581031),
    u = n(936940),
    c = r.aTypedArray,
    d = r.exportTypedArrayMethod,
    _ = l(''.slice);
d(
    'fill',
    function (e) {
        var t = arguments.length;
        return c(this), s(i, this, 'Big' === _(o(this), 0, 3) ? a(e) : +e, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0);
    },
    u(function () {
        var e = 0;
        return (
            new Int8Array(2).fill({
                valueOf: function () {
                    return e++;
                }
            }),
            1 !== e
        );
    })
);
