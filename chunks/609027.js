function i(e) {
    var n;
    return function () {
        return (
            !n &&
                (n = new Promise(function (r) {
                    Promise.resolve().then(function () {
                        (n = void 0), r(e());
                    });
                })),
            n
        );
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
