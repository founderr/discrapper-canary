var i = r(706165),
    a = r(690244)('%TypeError%'),
    s = r(632384),
    o = r(710157),
    l = r(713720);
e.exports = function (e) {
    if ('Object' !== s(e)) throw new a('ToPropertyDescriptor requires an object');
    var n = {};
    if ((i(e, 'enumerable') && (n['[[Enumerable]]'] = o(e.enumerable)), i(e, 'configurable') && (n['[[Configurable]]'] = o(e.configurable)), i(e, 'value') && (n['[[Value]]'] = e.value), i(e, 'writable') && (n['[[Writable]]'] = o(e.writable)), i(e, 'get'))) {
        var r = e.get;
        if (void 0 !== r && !l(r)) throw new a('getter must be a function');
        n['[[Get]]'] = r;
    }
    if (i(e, 'set')) {
        var u = e.set;
        if (void 0 !== u && !l(u)) throw new a('setter must be a function');
        n['[[Set]]'] = u;
    }
    if ((i(n, '[[Get]]') || i(n, '[[Set]]')) && (i(n, '[[Value]]') || i(n, '[[Writable]]'))) throw new a('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    return n;
};
