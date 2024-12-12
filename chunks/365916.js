var i = r(690244),
    a = i('%Object.preventExtensions%', !0),
    s = i('%Object.isExtensible%', !0),
    o = r(814277);
e.exports = a
    ? function (e) {
          return !o(e) && s(e);
      }
    : function (e) {
          return !o(e);
      };
