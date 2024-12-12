var i = r(47120);
var a = r(846519),
    s = r(147913),
    o = r(246133),
    l = r(734934),
    u = r(695346),
    c = r(885110),
    d = r(981631);
function f(e, n, r) {
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
let _ = new a.V7(),
    h = new a.V7(),
    p = new a.V7();
class m extends s.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto()
            }),
            f(this, 'handleUpdateProto', () => {
                let e = u.Ok.getSetting();
                if (null == e) p.stop();
                else if (null != e.expiresAtMs && '0' !== e.expiresAtMs) {
                    let n = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    n > 0
                        ? p.start(
                              n,
                              () => {
                                  u.Ok.updateSetting(void 0);
                              },
                              !0
                          )
                        : (u.Ok.updateSetting(void 0), p.stop());
                } else null != p && p.stop();
                let n = u.Cr.getSetting();
                if (null != n && '0' !== n && c.Z.getStatus() !== d.Skl.ONLINE) {
                    let e = new Date(Number(n)).getTime() - new Date().getTime();
                    e > 0
                        ? _.start(
                              e,
                              () => {
                                  (0, o.Z)(d.Skl.ONLINE, c.Z.getStatus(), { location: { object: d.qAy.CUSTOM_STATUS_MANAGER } }, void 0);
                              },
                              !0
                          )
                        : ((0, o.Z)(d.Skl.ONLINE, c.Z.getStatus(), { location: { object: d.qAy.CUSTOM_STATUS_MANAGER } }, void 0), _.stop());
                } else null != _ && _.stop();
                let r = u.fv.getSetting();
                if (null != r && '0' !== r) {
                    let e = new Date(Number(r)).getTime() - new Date().getTime();
                    e > 0
                        ? h.start(
                              e,
                              () => {
                                  (0, l.oW)(!1);
                              },
                              !0
                          )
                        : ((0, l.oW)(!1), h.stop());
                } else null != h && h.stop();
            });
    }
}
n.Z = new m();
