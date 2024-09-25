var r = n(735471),
    i = String,
    a = TypeError;
e.exports = function (e) {
    if ('object' == typeof e || r(e)) return e;
    throw new a("Can't set " + i(e) + ' as a prototype');
};
