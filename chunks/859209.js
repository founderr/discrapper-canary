var n = r(354848),
    a = r(97131),
    o = r(230364),
    i = r(492424);
e.exports = function (e, t, r, _) {
    !_ && (_ = {});
    var E = _.enumerable,
        s = void 0 !== _.name ? _.name : t;
    if ((n(r) && o(r, s, _), _.global)) E ? (e[t] = r) : i(t, r);
    else {
        try {
            _.unsafe ? e[t] && (E = !0) : delete e[t];
        } catch (e) {}
        E
            ? (e[t] = r)
            : a.f(e, t, {
                  value: r,
                  enumerable: !1,
                  configurable: !_.nonConfigurable,
                  writable: !_.nonWritable
              });
    }
    return e;
};
