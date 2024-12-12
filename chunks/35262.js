var r =
    '[object Arguments]' ==
    (function () {
        return Object.prototype.toString.call(arguments);
    })();
function i(e) {
    return '[object Arguments]' == Object.prototype.toString.call(e);
}
function a(e) {
    return (e && 'object' == typeof e && 'number' == typeof e.length && Object.prototype.hasOwnProperty.call(e, 'callee') && !Object.prototype.propertyIsEnumerable.call(e, 'callee')) || !1;
}
((n = e.exports = r ? i : a).supported = i), (n.unsupported = a);
