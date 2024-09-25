n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(571846),
    i = n(17851);
function a(e) {
    return (a =
        'function' == typeof r && 'symbol' == typeof i
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof r && e.constructor === r && e !== r.prototype ? 'symbol' : typeof e;
              })(e);
}
