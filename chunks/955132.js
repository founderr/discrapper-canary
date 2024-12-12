r.d(n, {
    GC: function () {
        return g;
    },
    RR: function () {
        return m;
    },
    Wb: function () {
        return p;
    }
});
var i = r(570140),
    a = r(579806),
    s = r(710845),
    o = r(314897),
    l = r(626135),
    u = r(931619),
    c = r(358085),
    d = r(548570),
    f = r(616810),
    _ = r(755278);
let h = new s.Z('ConnectionStore'),
    p = new d.Z(),
    m = new f.Z(p),
    g = new _.Z(p);
p.handleIdentify = () => {
    let e = o.default.getToken();
    return (h.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: l.default.getSuperProperties(),
              presence: m.getInitialState()
          };
};
(0, c.isDesktop)() &&
    a.Z.remotePowerMonitor.on('resume', () => {
        p.expeditedHeartbeat(5000, 'power monitor resumed');
    }),
    u.Z.addOfflineCallback(() => {
        p.networkStateChange(15000, 'network detected offline.', !1);
    }),
    u.Z.addOnlineCallback(() => {
        p.networkStateChange(5000, 'network detected online.');
    }),
    p.on('disconnect', (e) => {
        let { code: n, reason: r } = e;
        i.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: n,
            reason: r
        });
    }),
    p.on('close', (e) => {
        let { code: n, reason: r } = e;
        i.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: n,
            reason: r
        });
    });
