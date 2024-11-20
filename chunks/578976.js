n.d(t, {
    s: function () {
        return u;
    }
});
var r = n(46973),
    i = n(37113);
let u = (e, t, n) => {
    let u = {
        qualityOptions: {
            preset: i.tI.PRESET_CUSTOM,
            resolution: e,
            frameRate: t
        },
        context: r.Yn.STREAM
    };
    return (
        null != n &&
            (null != n.desktopSource &&
                (u.desktopSettings = {
                    sourceId: n.desktopSource.id,
                    sound: !0
                }),
            null != n.cameraSource &&
                (u.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid
                })),
        u
    );
};
