var r = n(294377),
    i = n(96403),
    a = r('Symbol'),
    o = a.keyFor,
    s = i(a.prototype.valueOf);
e.exports =
    a.isRegisteredSymbol ||
    function (e) {
        try {
            return void 0 !== o(s(e));
        } catch (e) {
            return !1;
        }
    };
