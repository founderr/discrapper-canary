r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(445686),
    s = r(379649);
function o(e, n, r) {
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
class l {
    start() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.listeningUsers.clear(),
            this.listening.reset(),
            this.speaking.reset(),
            this.participation.reset(),
            this.muted.reset(),
            this.connected.reset(),
            this.connected.start(),
            this.connection.on(a.S.Speaking, (e, n, r) => {
                this.userId === e ? this.onSpeaking(0 !== n) : this.onListening(0 !== n, e);
            }),
            this.onMuted(e),
            this.connection.on(a.S.Mute, (e) => {
                this.onMuted(e);
            });
    }
    onSpeaking(e) {
        e ? (this.speaking.start(), this.participation.start()) : (this.speaking.stop(), !this.listening.isRunning() && this.participation.stop());
    }
    onListening(e, n) {
        e ? (this.listeningUsers.add(n), this.listening.start(), this.participation.start()) : this.listeningUsers.delete(n) && 0 === this.listeningUsers.size && (this.listening.stop(), !this.speaking.isRunning() && this.participation.stop());
    }
    onMuted(e) {
        e ? this.muted.start() : this.muted.stop();
    }
    stop() {
        this.speaking.stop(), this.listening.stop(), this.participation.stop(), this.connected.stop(), this.muted.stop();
    }
    getDurationStats() {
        return {
            duration_listening_ms: this.listening.elapsed().asMilliseconds(),
            duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
            duration_participation_ms: this.participation.elapsed().asMilliseconds(),
            duration_connected_ms: this.connected.elapsed().asMilliseconds(),
            duration_muted_ms: this.muted.elapsed().asMilliseconds()
        };
    }
    constructor(e, n, r = s.Z_) {
        o(this, 'userId', void 0), o(this, 'connection', void 0), o(this, 'timestampProducer', void 0), o(this, 'listeningUsers', void 0), o(this, 'listening', void 0), o(this, 'speaking', void 0), o(this, 'participation', void 0), o(this, 'connected', void 0), o(this, 'muted', void 0), (this.userId = e), (this.connection = n), (this.timestampProducer = r), (this.listeningUsers = new Set()), (this.listening = new s.G9(this.timestampProducer)), (this.speaking = new s.G9(this.timestampProducer)), (this.participation = new s.G9(this.timestampProducer)), (this.connected = new s.G9(this.timestampProducer)), (this.muted = new s.G9(this.timestampProducer));
    }
}
