var a = r(475227),
    n = r(389109),
    _ = Object.prototype,
    o = _.hasOwnProperty,
    E = _.propertyIsEnumerable,
    i = a(
        (function () {
            return arguments;
        })()
    )
        ? a
        : function (e) {
              return n(e) && o.call(e, 'callee') && !E.call(e, 'callee');
          };
e.exports = i;
