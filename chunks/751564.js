var i = r(690244)('%TypeError%'),
    a = r(395238),
    s = r(116298),
    o = r(441596),
    l = r(75150),
    u = r(860438),
    c = r(828148),
    d = r(148309),
    f = r(240919),
    _ = r(632384);
e.exports = function (e, n, r) {
    if ('Object' !== _(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!c(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    var h = a(
        {
            Type: _,
            IsDataDescriptor: u,
            IsAccessorDescriptor: l
        },
        r
    )
        ? r
        : f(r);
    if (
        !a(
            {
                Type: _,
                IsDataDescriptor: u,
                IsAccessorDescriptor: l
            },
            h
        )
    )
        throw new i('Assertion failed: Desc is not a valid Property Descriptor');
    return s(u, d, o, e, n, h);
};
