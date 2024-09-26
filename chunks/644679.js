n(47120);
var i = n(735250),
    a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(19780),
    o = n(594174),
    c = n(979651),
    d = n(960048),
    u = n(699910),
    _ = n(981631);
function h(e, t, n) {
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
let E = 'CollectiblesExpiryModal';
class m extends r.Z {
    _initialize() {
        s.Z.subscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), s.Z.subscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal);
    }
    _terminate() {
        s.Z.unsubscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), s.Z.unsubscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            h(this, 'timeout', null),
            h(this, 'handleMaybeOpenModal', () => {
                var e, t;
                let n = o.default.getCurrentUser(),
                    i = null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    a = null == n ? void 0 : null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === i || '1252353273256480818' === i) && (a = 1726106879), null != a && !!(0, u.v)('CollectiblesExpiryManager'))) !this.maybeOpenModal() && (null != this.timeout && clearTimeout(this.timeout), (this.timeout = setTimeout(this.maybeOpenModal, 1000 * a - Date.now() + 1000)));
            }),
            h(this, 'maybeOpenModal', () => {
                var e, t, s, r, u;
                let h = o.default.getCurrentUser(),
                    m = l.Z.getState(),
                    I = null == h ? void 0 : null === (e = h.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    g = null == h ? void 0 : null === (t = h.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === I || '1252353273256480818' === I) && (g = 1726106879), null == h)) return !1;
                let p = c.Z.getVoiceStateForUser(h.id);
                return null != g && 1000 * g < Date.now() && m !== _.hes.RTC_CONNECTED
                    ? ((0, a.closeModal)(E),
                      (0, a.openModalLazy)(
                          async () => {
                              let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      skuId: I
                                  });
                          },
                          { modalKey: E }
                      ),
                      d.Z.captureMessage('Collectible expiry modal shown'),
                      !0)
                    : (('1251324401459265537' === I || '1252353273256480818' === I) &&
                          d.Z.captureMessage('Collectible expiry modal not shown', {
                              tags: {
                                  isExpired: (null != g && 1000 * g < Date.now()).toString(),
                                  rtcConnected: (m === _.hes.RTC_CONNECTED).toString(),
                                  decoExpiresAt: null !== (r = null == g ? void 0 : g.toString()) && void 0 !== r ? r : 'N/A',
                                  voiceStateAvailable: (null != p).toString(),
                                  selfStream: null !== (u = null == p ? void 0 : null === (s = p.selfStream) || void 0 === s ? void 0 : s.toString()) && void 0 !== u ? u : 'N/A'
                              }
                          }),
                      !1);
            });
    }
}
t.Z = new m();
