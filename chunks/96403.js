var r = n(809235),
    i = Function.prototype,
    a = i.call,
    o = r && i.bind.bind(a, a);
e.exports = r
    ? o
    : function (e) {
          return function () {
              return a.apply(e, arguments);
          };
      };
