var r = n(192291),
    i = n(82246).findLast,
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)('findLast', function (e) {
    return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
