function r() {
    return {
        logsUploaded: new Date().toISOString(),
        releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
        buildNumber: '323234',
        versionHash: '25f8d58d55fdf3918a2f4edbb969f7c907d15ee3'
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
});
