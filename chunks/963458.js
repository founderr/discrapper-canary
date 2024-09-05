var r = n(192291),
    i = n(22092),
    o = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)(
    'of',
    function () {
        for (var t = 0, e = arguments.length, n = new (o(this))(e); e > t; ) n[t] = arguments[t++];
        return n;
    },
    i
);
