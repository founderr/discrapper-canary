var i = r(325008),
    a = r(581031),
    s = r(4340),
    o = URLSearchParams.prototype,
    l = a(o.forEach);
i &&
    !('size' in o) &&
    s(o, 'size', {
        get: function () {
            var e = 0;
            return (
                l(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0
    });
