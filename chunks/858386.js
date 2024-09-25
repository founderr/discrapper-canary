var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(893776),
    s = n(147913),
    l = n(594174),
    u = n(626135),
    c = n(374023),
    d = n(344532),
    _ = n(981631),
    E = n(231338);
function f(e, t, n) {
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
let h = 'LOGIN_REQUIRED_ACTIONS_MODAL_KEY';
class p extends s.Z {
    handleConnectionOpen() {
        let e = l.default.getCurrentUser();
        if (null == e || c.s.isDisallowPopupsSet()) return;
        let t = d.Z.requiredActionsIncludes(e.id, [_.ane.UPDATE_PASSWORD]);
        d.Z.wasLoginAttemptedInSession(e.id) && t
            ? (0, a.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e('48707').then(n.bind(n, 194530));
                      return function (t) {
                          let n = () => {
                                  t.onClose(), o.Z.logout(_.Z5c.LOGIN);
                              },
                              r = () => {
                                  u.default.track(_.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              };
                          return (0, i.jsx)(e, {
                              ...t,
                              onSuccess: r,
                              onClose: n,
                              requirementsUpdated: !0
                          });
                      };
                  },
                  {
                      modalKey: h,
                      onCloseRequest: E.Vq,
                      instant: !0
                  }
              )
            : t && o.Z.logout(_.Z5c.LOGIN);
    }
    constructor(...e) {
        super(...e), f(this, 'actions', { POST_CONNECTION_OPEN: this.handleConnectionOpen });
    }
}
t.Z = new p();
