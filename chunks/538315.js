var i = Array.prototype.slice,
    a = r(560640),
    s = Object.keys,
    o = s
        ? function (e) {
              return s(e);
          }
        : r(973351),
    l = Object.keys;
(o.shim = function () {
    return (
        Object.keys
            ? !(function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
              })(1, 2) &&
              (Object.keys = function (e) {
                  return a(e) ? l(i.call(e)) : l(e);
              })
            : (Object.keys = o),
        Object.keys || o
    );
}),
    (e.exports = o);
