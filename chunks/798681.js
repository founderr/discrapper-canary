r.d(n, {
    e: function () {
        return i;
    },
    w: function () {
        return p;
    }
});
var i,
    a = r(47770),
    s = r(846519),
    o = r(570140),
    l = r(710845),
    u = r(646047),
    c = r(425497),
    d = r(70956),
    f = r(27414);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.WindowVisibilityChanged = 'window-visibility-changed'), (e.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed');
})(i || (i = {}));
class h extends a.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    update() {
        if (this.discordVisible !== (0, f.Z)())
            (this.discordVisible = (0, f.Z)()),
                this.emit('window-visibility-changed', this.discordVisible),
                this.discordVisible
                    ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                    : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                          this.setIncomingVideoEnabled(!1);
                      });
    }
    setIncomingVideoEnabled(e) {
        let n = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), n && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            _(this, 'disableVideoTimer', new s.V7()),
            _(this, 'discordVisible', !0),
            _(this, 'incomingVideoEnabled', !0),
            _(this, 'logger', new l.Z('WindowVisibilityVideoManager')),
            _(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * d.Z.Millis.SECOND),
            _(this, 'handleWindowVisibilityChange', () => {
                this.update();
            }),
            _(this, 'handleAppStateUpdate', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            _(this, 'handlePipModeChanged', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
            o.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate),
            u.Z.addOnPipModeChangedListener(this.handlePipModeChanged);
    }
}
let p = new h();
