var i = r(73184),
    a = r(533206),
    s = Object.prototype,
    o = s.hasOwnProperty,
    l = s.propertyIsEnumerable,
    u = i(
        (function () {
            return arguments;
        })()
    )
        ? i
        : function (e) {
              return a(e) && o.call(e, 'callee') && !l.call(e, 'callee');
          };
e.exports = u;
