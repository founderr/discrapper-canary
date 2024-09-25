var r, i, a, o;
n.d(t, {
    Eu: function () {
        return a;
    },
    NZ: function () {
        return r;
    },
    PQ: function () {
        return i;
    }
}),
    !(function (e) {
        (e.AUTHORIZED = 'authorized'), (e.DENIED = 'denied'), (e.RESTRICTED = 'restricted'), (e.UNDETERMINED = 'undetermined');
    })(r || (r = {})),
    !(function (e) {
        (e.DISMISSED = 'dismissed'), (e.DENIED = 'denied'), (e.ACCEPTED = 'accepted'), (e.NO_DEVICES = 'no_devices'), (e.ERROR = 'error'), (e.NONE = 'none');
    })(i || (i = {})),
    !(function (e) {
        (e.AUDIO = 'audio'), (e.CAMERA = 'camera'), (e.STORAGE = 'storage'), (e.NOTIFICATIONS = 'notifications'), (e.PHOTOS = 'photos'), (e.CONTACTS = 'contacts'), (e.INPUT_MONITORING = 'input_monitoring'), (e.SCREEN_RECORDING = 'screen_recording');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.UNDETERMINED = 0)] = 'UNDETERMINED'), (e[(e.DENIED = 1)] = 'DENIED'), (e[(e.AUTHORIZED = 2)] = 'AUTHORIZED'), (e[(e.PROVISIONAL = 3)] = 'PROVISIONAL'), (e[(e.EPHEMERAL = 4)] = 'EPHEMERAL');
    })(o || (o = {}));
