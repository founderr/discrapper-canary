var r = n(974802),
    i = n(668530),
    a = n(735471),
    o = function (e) {
        return a(e) ? e : void 0;
    };
e.exports = function (e, t) {
    return arguments.length < 2 ? o(r[e]) || o(i[e]) : (r[e] && r[e][t]) || (i[e] && i[e][t]);
};
