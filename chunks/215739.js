var r = n(47120);
var i = n(846519),
    a = n(147913),
    o = n(246133),
    s = n(734934),
    l = n(695346),
    u = n(885110),
    c = n(981631);
function d(e, t, n) {
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
let _ = new i.V7(),
    E = new i.V7(),
    f = new i.V7();
class h extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto()
            }),
            d(this, 'handleUpdateProto', () => {
                let e = l.Ok.getSetting();
                if (null == e) f.stop();
                else if (null != e.expiresAtMs && '0' !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? f.start(
                              t,
                              () => {
                                  l.Ok.updateSetting(void 0);
                              },
                              !0
                          )
                        : (l.Ok.updateSetting(void 0), f.stop());
                } else null != f && f.stop();
                let t = l.Cr.getSetting();
                if (null != t && '0' !== t && u.Z.getStatus() !== c.Skl.ONLINE) {
                    let e = new Date(Number(t)).getTime() - new Date().getTime();
                    e > 0
                        ? _.start(
                              e,
                              () => {
                                  (0, o.Z)(c.Skl.ONLINE, u.Z.getStatus(), { location: { object: c.qAy.CUSTOM_STATUS_MANAGER } }, void 0);
                              },
                              !0
                          )
                        : ((0, o.Z)(c.Skl.ONLINE, u.Z.getStatus(), { location: { object: c.qAy.CUSTOM_STATUS_MANAGER } }, void 0), _.stop());
                } else null != _ && _.stop();
                let n = l.fv.getSetting();
                if (null != n && '0' !== n) {
                    let e = new Date(Number(n)).getTime() - new Date().getTime();
                    e > 0
                        ? E.start(
                              e,
                              () => {
                                  (0, s.oW)(!1);
                              },
                              !0
                          )
                        : ((0, s.oW)(!1), E.stop());
                } else null != E && E.stop();
            });
    }
}
t.Z = new h();
