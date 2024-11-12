n.d(t, {
    s: function () {
        return r;
    }
});
var i = n(46973),
    l = n(37113);
let r = (e, t, n) => {
    let r = {
        qualityOptions: {
            preset: l.tI.PRESET_CUSTOM,
            resolution: e,
            frameRate: t
        },
        context: i.Yn.STREAM
    };
    return (
        null != n &&
            (null != n.desktopSource &&
                (r.desktopSettings = {
                    sourceId: n.desktopSource.id,
                    sound: !0
                }),
            null != n.cameraSource &&
                (r.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid
                })),
        r
    );
};
