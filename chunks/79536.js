var n = {
        __proto__: null,
        foo: {}
    },
    r = Object;
e.exports = function () {
    return { __proto__: n }.foo === n.foo && !(n instanceof r);
};
