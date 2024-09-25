n.d(t, {
    c: function () {
        return r;
    }
});
var r,
    i = n(689938);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.GENERAL = 0)] = 'GENERAL'), (e[(e.NO_FILE = 1)] = 'NO_FILE'), (e[(e.PROGRESS = 2)] = 'PROGRESS'), (e[(e.UPLOAD = 3)] = 'UPLOAD'), (e[(e.READ = 4)] = 'READ');
})(r || (r = {}));
class o {
    get displayMessage() {
        switch (this.code) {
            case 1:
                return i.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
            case 2:
                return i.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
            case 3:
                return i.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
            case 4:
                return i.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
            default:
                return i.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        }
    }
    constructor(e) {
        a(this, 'code', void 0), (this.code = e);
    }
}
t.Z = o;
