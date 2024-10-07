var e = r(962557),
    i = Function.prototype,
    o = i.apply,
    a = i.call;
t.exports =
    ('object' == typeof Reflect && Reflect.apply) ||
    (e
        ? a.bind(o)
        : function () {
              return a.apply(o, arguments);
          });
