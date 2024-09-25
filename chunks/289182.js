n.d(t, {
    v: function () {
        return o;
    }
});
var r = n(625306),
    i = n(570140);
function a() {
    return {
        ...(null != i.Z._currentDispatchActionType ? { currentAction: i.Z._currentDispatchActionType } : {}),
        lastFewActions: (0, r.qC)()
    };
}
function o(e) {
    return {
        ...e,
        extra: {
            ...(null == e ? void 0 : e.extra),
            ...a()
        }
    };
}
