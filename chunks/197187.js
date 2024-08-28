var n = r(962557),
    a = Function.prototype,
    o = a.apply,
    i = a.call;
e.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (n
        ? i.bind(o)
        : function () {
              return i.apply(o, arguments);
          });
