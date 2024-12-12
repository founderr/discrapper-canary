var n = TypeError;
e.exports = function (e) {
    if (!e || 'function' != typeof e.next) throw new n('iterator must be an object with a `next` method');
    if (arguments.length > 1) {
        var r,
            i = arguments[1];
        if ('function' != typeof i) throw new n('`callback`, if provided, must be a function');
    }
    for (var a = i || []; (r = e.next()) && !r.done; ) i ? i(r.value) : a.push(r.value);
    if (!i) return a;
};
