var n = Object.prototype.toString;
e.exports = function (e) {
    var r = n.call(e),
        i = '[object Arguments]' === r;
    return !i && (i = '[object Array]' !== r && null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Function]' === n.call(e.callee)), i;
};
