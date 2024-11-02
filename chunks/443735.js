var n = r(475227),
    a = r(389109),
    _ = Object.prototype,
    o = _.hasOwnProperty,
    i = _.propertyIsEnumerable,
    E = n(
        (function () {
            return arguments;
        })()
    )
        ? n
        : function (e) {
              return a(e) && o.call(e, 'callee') && !i.call(e, 'callee');
          };
e.exports = E;
