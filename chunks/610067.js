var r = {}.propertyIsEnumerable,
    n = Object.getOwnPropertyDescriptor,
    a = n && !r.call({ 1: 2 }, 1);
t.f = a
    ? function (e) {
          var t = n(this, e);
          return !!t && t.enumerable;
      }
    : r;
