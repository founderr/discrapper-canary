n.d(t, {
    Mt: function () {
        return d;
    },
    Sh: function () {
        return o.S;
    },
    TO: function () {
        return a;
    },
    W$: function () {
        return r;
    },
    Yn: function () {
        return l.Yn;
    },
    aB: function () {
        return s.a;
    },
    jj: function () {
        return c;
    },
    zZ: function () {
        return i;
    }
});
var r,
    i,
    a,
    o = n(839548),
    s = n(946695),
    l = n(65154);
function u(e) {
    switch (e) {
        case l.AS.NATIVE:
            return n(743426).Z;
        case l.AS.WEBRTC:
            return n(959856).Z;
        case l.AS.DUMMY:
        default:
            return n(135670).Z;
    }
}
function c() {
    var e;
    return null !== (e = [l.AS.NATIVE, l.AS.WEBRTC].find((e) => u(e).supported())) && void 0 !== e ? e : l.AS.DUMMY;
}
function d(e) {
    return new (u(e))();
}
!(function (e) {
    (e.INPUT_DEVICE = 'input_device'), (e.STREAM = 'stream');
})(r || (r = {})),
    !(function (e) {
        (e.NONE = ''), (e.BACKGROUND_BLUR = 'background_blur'), (e.BACKGROUND_REPLACEMENT = 'background_replacement');
    })(i || (i = {})),
    !(function (e) {
        (e.CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview'), (e.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive');
    })(a || (a = {}));
