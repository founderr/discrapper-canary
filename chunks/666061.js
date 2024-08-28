var n = r(545576),
    a = r(581031),
    o = r(537443),
    i = r(279129),
    _ = r(24033),
    E = a([].concat);
e.exports =
    n('Reflect', 'ownKeys') ||
    function (e) {
        var t = o.f(_(e)),
            r = i.f;
        return r ? E(t, r(e)) : t;
    };
