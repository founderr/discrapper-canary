function r() {
    return {
        logsUploaded: new Date().toISOString(),
        releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
        buildNumber: '333654',
        versionHash: 'cf432473dd316ece789079868d2ce6dac12007ea'
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
});
