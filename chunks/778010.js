function i(e, n) {
    return null === n
        ? null === e
        : Array.isArray(e)
          ? e.some(function (e) {
                return e === n;
            })
          : e === n;
}
r.d(n, {
    s: function () {
        return i;
    }
});
