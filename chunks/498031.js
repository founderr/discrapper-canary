e.exports = function (e) {
    var n = e.idGenerator,
        r = e.stateHandler.getState;
    return {
        get: function e(e) {
            var n = r(e);
            return n && void 0 !== n.id ? n.id : null;
        },
        set: function e(e) {
            var i = r(e);
            if (!i) throw Error('setId required the element to have a resize detection state.');
            var a = n.generate();
            return (i.id = a), a;
        }
    };
};
