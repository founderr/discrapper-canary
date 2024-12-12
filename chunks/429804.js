var n = { foo: {} },
    r = Object;
e.exports = function () {
    return { __proto__: n }.foo === n.foo && !({ __proto__: null } instanceof r);
};
