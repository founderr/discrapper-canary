var n = r(926515),
    a = r(354848),
    o = r(622281),
    i = TypeError;
e.exports = function (e, t) {
    var r, _;
    if (('string' === t && a((r = e.toString)) && !o((_ = n(r, e)))) || (a((r = e.valueOf)) && !o((_ = n(r, e)))) || ('string' !== t && a((r = e.toString)) && !o((_ = n(r, e))))) return _;
    throw i("Can't convert object to primitive value");
};
