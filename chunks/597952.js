r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(358085);
function a() {
    let e = '';
    return (0, i.isWindows)() ? (e = 'platform-win') : (0, i.isMac)() ? (e = 'platform-osx') : (0, i.isLinux)() ? (e = 'platform-linux') : (0, i.isWeb)() && (e = 'platform-web'), __OVERLAY__ ? ''.concat(e, ' platform-overlay') : e;
}
