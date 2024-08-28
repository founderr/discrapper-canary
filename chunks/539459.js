var n = r(325008),
    a = r(740362),
    o = Function.prototype,
    i = n && Object.getOwnPropertyDescriptor,
    _ = a(o, 'name'),
    E = _ && (!n || (n && i(o, 'name').configurable));
e.exports = {
    EXISTS: _,
    PROPER: _ && 'something' === function () {}.name,
    CONFIGURABLE: E
};
