n.d(t, {
    s: function () {
        return o;
    }
});
var r = n(46973),
    i = n(37113);
let o = (e, t, n) => {
    let o = {
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
                (o.desktopSettings = {
                    sourceId: n.desktopSource.id,
                    sound: !0
                }),
            null != n.cameraSource &&
                (o.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid
                })),
        o
    );
};
