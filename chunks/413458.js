r.d(n, {
    J: function () {
        return a;
    }
});
var i = r(314897);
function a(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
        r = n.getId(),
        a = n.getSessionId();
    return e.userId === r && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === a || !1);
}
