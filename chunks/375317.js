function i(e) {
    var n = e.reduce(function (e, n) {
        var r = e[n.name];
        return (
            (e[n.name] = r
                ? Object.assign({}, r, n, {
                      options: Object.assign({}, r.options, n.options),
                      data: Object.assign({}, r.data, n.data)
                  })
                : n),
            e
        );
    }, {});
    return Object.keys(n).map(function (e) {
        return n[e];
    });
}
r.d(n, {
    Z: function () {
        return i;
    }
});
