var i = r(896859);
function a() {}
function s() {}
(s.resetWarningCache = a),
    (e.exports = function () {
        function e(e, n, r, a, s, o) {
            if (o !== i) {
                var l = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                throw ((l.name = 'Invariant Violation'), l);
            }
        }
        function n() {
            return e;
        }
        e.isRequired = e;
        var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: s,
            resetWarningCache: a
        };
        return (r.PropTypes = r), r;
    });
