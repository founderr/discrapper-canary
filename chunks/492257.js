var r = n(192291),
    i = n(581031),
    a = n(526988),
    o = n(436330),
    s = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    u = r.exportTypedArrayMethod,
    c = i(r.TypedArrayPrototype.sort);
u('toSorted', function (e) {
    void 0 !== e && a(e);
    var t = s(this);
    return c(o(l(t), t), e);
});
