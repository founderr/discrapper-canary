n.d(t, {
    hi: function () {
        return a;
    }
});
var r = n(570140);
function i(e) {
    Dispatcher.dispatch({
        type: 'SYSTEM_THEME_CHANGE',
        systemTheme: e
    });
}
n(541049), n(740492), n(874893);
function a(e) {
    r.Z.dispatch({
        type: 'UNSYNCED_USER_SETTINGS_UPDATE',
        settings: { useSystemTheme: e }
    });
}
