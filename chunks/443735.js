var n = r(475227),
    a = r(389109),
    _ = Object.prototype,
    o = _.hasOwnProperty,
    E = _.propertyIsEnumerable,
    i = n(
        (function () {
            return arguments;
        })()
    )
        ? n
        : function (e) {
              return a(e) && o.call(e, 'callee') && !E.call(e, 'callee');
          };
e.exports = i;
