e.exports = function (e) {
    if (void 0 === e) return e;
    var n = {};
    return '[[Value]]' in e && (n.value = e['[[Value]]']), '[[Writable]]' in e && (n.writable = !!e['[[Writable]]']), '[[Get]]' in e && (n.get = e['[[Get]]']), '[[Set]]' in e && (n.set = e['[[Set]]']), '[[Enumerable]]' in e && (n.enumerable = !!e['[[Enumerable]]']), '[[Configurable]]' in e && (n.configurable = !!e['[[Configurable]]']), n;
};
