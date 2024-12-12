'function' == typeof Object.create
    ? (e.exports = function (e, n) {
          n &&
              ((e.super_ = n),
              (e.prototype = Object.create(n.prototype, {
                  constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              })));
      })
    : (e.exports = function (e, n) {
          if (n) {
              e.super_ = n;
              var r = function () {};
              (r.prototype = n.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
          }
      });
