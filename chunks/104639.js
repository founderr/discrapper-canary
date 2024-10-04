function r() {
    return {
        logsUploaded: new Date().toISOString(),
        releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
        buildNumber: '333210',
        versionHash: 'dc5daed46037d7cafa57bf1855ba229dea133bcd'
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
});
