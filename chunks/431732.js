var n = {
    current: {
        createInteractionHandle: function () {},
        clearInteractionHandle: function () {}
    },
    inject: function (e) {
        n.current = e;
    }
};
e.exports = n;
