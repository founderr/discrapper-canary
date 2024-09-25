var r = n(668530),
    i = n(974802);
e.exports = function (e, t) {
    var n = i[e + 'Prototype'],
        a = n && n[t];
    if (a) return a;
    var o = r[e],
        s = o && o.prototype;
    return s && s[t];
};
