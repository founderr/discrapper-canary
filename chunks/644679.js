n(47120);
var i = n(735250),
    a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(19780),
    o = n(594174),
    c = n(699910),
    d = n(981631);
function u(e, t, n) {
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
let _ = 'CollectiblesExpiryModal';
class h extends r.Z {
    _initialize() {
        s.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        s.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen), null != this.timeout && clearTimeout(this.timeout);
    }
    constructor(...e) {
        super(...e),
            u(this, 'timeout', null),
            u(this, 'handlePostConnectionOpen', () => {
                var e;
                let t = o.default.getCurrentUser(),
                    n = null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.expiresAt;
                if (null != n && !!(0, c.v)('CollectiblesExpiryManager')) !this.maybeOpenModal() && (this.timeout = setTimeout(this.maybeOpenModal, 1000 * n - Date.now() + 1000));
            }),
            u(this, 'maybeOpenModal', () => {
                var e;
                let t = o.default.getCurrentUser(),
                    s = null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.expiresAt,
                    r = l.Z.getState();
                return (
                    !!(null != s && 1000 * s < Date.now()) &&
                    r !== d.hes.RTC_CONNECTED &&
                    ((0, a.closeModal)(_),
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                            return (t) => (0, i.jsx)(e, { ...t });
                        },
                        { modalKey: _ }
                    ),
                    !0)
                );
            });
    }
}
t.Z = new h();
