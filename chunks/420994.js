var n;
(e.exports.timeout = function (e, r) {
    var i,
        a = new n();
    return Promise.race([
        e,
        new Promise(function (e, n) {
            i = setTimeout(function () {
                n(a);
            }, r);
        })
    ]).then(
        function (e) {
            return clearTimeout(i), e;
        },
        function (e) {
            throw (clearTimeout(i), e);
        }
    );
}),
    ((n = e.exports.TimeoutError =
        function () {
            Error.call(this), (this.stack = Error().stack), (this.message = 'Timeout');
        }).prototype = Object.create(Error.prototype)),
    (n.prototype.name = 'TimeoutError');
