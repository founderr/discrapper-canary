var n = r(962557),
    a = Function.prototype.call;
e.exports = n
    ? a.bind(a)
    : function () {
          return a.apply(a, arguments);
      };
