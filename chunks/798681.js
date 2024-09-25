n.d(t, {
    e: function () {
        return r;
    },
    w: function () {
        return _;
    }
});
var r,
    i = n(47770),
    a = n(846519),
    o = n(570140),
    s = n(710845),
    l = n(70956),
    u = n(27414);
function c(e, t, n) {
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
    (e.WindowVisibilityChanged = 'window-visibility-changed'), (e.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed');
})(r || (r = {}));
class d extends i.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), t && (this.logger.info('Window visibility incoming video changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            c(this, 'hiddenWindowDisableVideoTimer', new a.V7()),
            c(this, 'incomingVideoEnabled', !0),
            c(this, 'logger', new s.Z('WindowVisibilityVideoManager')),
            c(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * l.Z.Millis.SECOND),
            c(this, 'handleWindowVisibilityChange', () => {
                this.emit('window-visibility-changed', (0, u.Z)()),
                    (0, u.Z)()
                        ? (this.hiddenWindowDisableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                        : this.hiddenWindowDisableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                              this.setIncomingVideoEnabled(!1);
                          });
            }),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange);
    }
}
let _ = new d();
