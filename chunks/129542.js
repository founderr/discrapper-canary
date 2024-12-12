r.d(n, {
    D: function () {
        return l;
    }
});
var i,
    a = r(411104);
var s = r(358085),
    o = r(981631);
function l() {
    switch ((0, s.getPlatform)()) {
        case s.PlatformTypes.WINDOWS:
            let e = 'x86';
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), 'x86' === e || 'ia32' === e)) return o.QR$.WIN32;
            return o.QR$.WIN64;
        case s.PlatformTypes.OSX:
            return o.QR$.MACOS;
        case s.PlatformTypes.LINUX:
            return o.QR$.LINUX;
        default:
            throw Error('Unsupported build type');
    }
}
!(function (e) {
    (e.X86 = 'x86'), (e.IA32 = 'ia32');
})(i || (i = {}));
