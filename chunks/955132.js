n.d(t, {
    GC: function () {
        return m;
    },
    RR: function () {
        return p;
    },
    Wb: function () {
        return h;
    }
});
var r = n(570140),
    i = n(579806),
    a = n(710845),
    s = n(314897),
    o = n(626135),
    l = n(931619),
    u = n(358085),
    c = n(548570),
    d = n(616810),
    f = n(755278);
let _ = new a.Z('ConnectionStore'),
    h = new c.Z(),
    p = new d.Z(h),
    m = new f.Z(h);
h.handleIdentify = () => {
    let e = s.default.getToken();
    return (_.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: o.default.getSuperProperties(),
              presence: p.getInitialState()
          };
};
(0, u.isDesktop)() &&
    i.Z.remotePowerMonitor.on('resume', () => {
        h.expeditedHeartbeat(5000, 'power monitor resumed');
    }),
    l.Z.addOfflineCallback(() => {
        h.networkStateChange(15000, 'network detected offline.', !1);
    }),
    l.Z.addOnlineCallback(() => {
        h.networkStateChange(5000, 'network detected online.');
    }),
    h.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    h.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
