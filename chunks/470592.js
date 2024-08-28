var n = r(581031),
    a = r(936940),
    o = r(332916),
    i = Object,
    _ = n(''.split);
e.exports = a(function () {
    return !i('z').propertyIsEnumerable(0);
})
    ? function (e) {
          return 'String' === o(e) ? _(e, '') : i(e);
      }
    : i;
