var i = r(927066)('%Reflect.construct%', !0),
    a = r(751564);
try {
    a({}, '', {
        '[[Get]]': function () {}
    });
} catch (e) {
    a = null;
}
if (a && i) {
    var s = {},
        o = {};
    a(o, 'length', {
        '[[Get]]': function () {
            throw s;
        },
        '[[Enumerable]]': !0
    }),
        (e.exports = function (e) {
            try {
                i(e, o);
            } catch (e) {
                return e === s;
            }
        });
} else
    e.exports = function (e) {
        return 'function' == typeof e && !!e.prototype;
    };
