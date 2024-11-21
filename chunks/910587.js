n.d(t, {
    gb: function () {
        return a;
    },
    xQ: function () {
        return i;
    }
});
let r = null;
function i(e, t = 'assertive', n = 7000) {
    r
        ? r.announce(e, t, n)
        : ((r = new s()),
          ('boolean' == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : 'undefined' != typeof jest)
              ? r.announce(e, t, n)
              : setTimeout(() => {
                    (null == r ? void 0 : r.isAttached()) && (null == r || r.announce(e, t, n));
                }, 100));
}
function a(e) {
    r && r.clear(e);
}
class s {
    isAttached() {
        var e;
        return null === (e = this.node) || void 0 === e ? void 0 : e.isConnected;
    }
    createLog(e) {
        let t = document.createElement('div');
        return t.setAttribute('role', 'log'), t.setAttribute('aria-live', e), t.setAttribute('aria-relevant', 'additions'), t;
    }
    destroy() {
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = 'assertive', n = 7000) {
        var r, i;
        if (!this.node) return;
        let a = document.createElement('div');
        'object' == typeof e ? (a.setAttribute('role', 'img'), a.setAttribute('aria-labelledby', e['aria-labelledby'])) : (a.textContent = e),
            'assertive' === t ? null === (r = this.assertiveLog) || void 0 === r || r.appendChild(a) : null === (i = this.politeLog) || void 0 === i || i.appendChild(a),
            '' !== e &&
                setTimeout(() => {
                    a.remove();
                }, n);
    }
    clear(e) {
        this.node && ((!e || 'assertive' === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ''), (!e || 'polite' === e) && this.politeLog && (this.politeLog.innerHTML = ''));
    }
    constructor() {
        (this.node = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            'undefined' != typeof document &&
                ((this.node = document.createElement('div')),
                (this.node.dataset.liveAnnouncer = 'true'),
                Object.assign(this.node.style, {
                    border: 0,
                    clip: 'rect(0 0 0 0)',
                    clipPath: 'inset(50%)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: 0,
                    position: 'absolute',
                    width: '1px',
                    whiteSpace: 'nowrap'
                }),
                (this.assertiveLog = this.createLog('assertive')),
                this.node.appendChild(this.assertiveLog),
                (this.politeLog = this.createLog('polite')),
                this.node.appendChild(this.politeLog),
                document.body.prepend(this.node));
    }
}
