e.exports = function () {
    var e = this,
        n = r(562255),
        i = e.element;
    (e.eventHandler = r(925965).bind(e)), n(i, 'keypress', e.eventHandler), n(i, 'keydown', e.eventHandler), n(i, 'keyup', e.eventHandler);
};
