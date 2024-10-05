var r = n(192291),
    i = n(581031),
    a = n(526988),
    s = n(436330),
    o = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    u = r.exportTypedArrayMethod,
    c = i(r.TypedArrayPrototype.sort);
u('toSorted', function (e) {
    void 0 !== e && a(e);
    var t = o(this);
    return c(s(l(t), t), e);
});
