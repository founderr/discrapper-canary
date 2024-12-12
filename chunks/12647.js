var i = r(998502);
n.Z = {
    flushDNSCache() {
        i.ZP.flushDNSCache();
    },
    flushCookies: () => i.ZP.flushCookies(),
    setApplicationBackgroundColor(e) {
        i.ZP.setApplicationBackgroundColor(e);
    },
    setZoomFactor: (e) => i.ZP.setZoomFactor(e),
    focus(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        i.ZP.focus(e, n);
    },
    submitLiveCrashReport: (e) => i.ZP.submitLiveCrashReport(e),
    getPidFromDesktopSource: (e) => i.ZP.getPidFromDesktopSource(e),
    getAudioPid: (e) => i.ZP.getAudioPid(e),
    generateSessionFromPid: (e) => i.ZP.generateSessionFromPid(e)
};
