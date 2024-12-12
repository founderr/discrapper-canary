var i = r(562255).off;
e.exports = function () {
    var e = this,
        n = e.element;
    i(n, 'keypress', e.eventHandler), i(n, 'keydown', e.eventHandler), i(n, 'keyup', e.eventHandler);
};
