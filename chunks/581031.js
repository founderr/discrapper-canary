var n = r(962557),
    a = Function.prototype,
    o = a.call,
    i = n && a.bind.bind(o, o);
e.exports = n
    ? i
    : function (e) {
          return function () {
              return o.apply(e, arguments);
          };
      };
