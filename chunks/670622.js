var r = n(447631),
    i = n(141603),
    a = Function.prototype,
    o = r && Object.getOwnPropertyDescriptor,
    s = i(a, 'name'),
    l = s && 'something' === function () {}.name,
    u = s && (!r || (r && o(a, 'name').configurable));
e.exports = {
    EXISTS: s,
    PROPER: l,
    CONFIGURABLE: u
};
