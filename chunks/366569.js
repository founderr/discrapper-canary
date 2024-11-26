r.d(t, {
    i: function () {
        return n;
    }
});
var a = r(573736);
function n(e, t, r = () => {}) {
    let n;
    try {
        n = e();
    } catch (e) {
        throw (t(e), r(), e);
    }
    return (function (e, t, r) {
        return (0, a.J8)(e)
            ? e.then(
                  (e) => (r(), e),
                  (e) => {
                      throw (t(e), r(), e);
                  }
              )
            : (r(), e);
    })(n, t, r);
}
