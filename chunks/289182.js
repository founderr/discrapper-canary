r.d(n, {
    v: function () {
        return o;
    }
});
var i = r(625306),
    a = r(570140);
function s() {
    return {
        ...(null != a.Z._currentDispatchActionType ? { currentAction: a.Z._currentDispatchActionType } : {}),
        lastFewActions: (0, i.qC)()
    };
}
function o(e) {
    return {
        ...e,
        extra: {
            ...(null == e ? void 0 : e.extra),
            ...s()
        }
    };
}
