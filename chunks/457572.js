var r = n(47120);
var i = n(570140),
    a = n(147913),
    o = n(70956),
    s = n(2818),
    l = n(768943);
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
let c = null;
function d(e) {
    let { enabled: t } = s.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!!t)
        i.Z.dispatch({
            type: 'MESSAGE_REMINDER_DUE',
            savedMessage: e
        }),
            _();
}
function _() {
    var e;
    let { enabled: t } = s.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!t) return;
    null != c && clearTimeout(c);
    let n = l.Z.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == n ? void 0 : null === (e = n.saveData) || void 0 === e ? void 0 : e.dueAt) == null) {
        c = null;
        return;
    }
    let r = Date.now() + o.Z.Millis.WEEK;
    if (!(n.saveData.dueAt.getTime() > r)) c = setTimeout(() => d(n), n.saveData.dueAt.getTime() - Date.now());
}
class E extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
                SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
                SAVED_MESSAGE_DELETE: () => this.handleUpdates()
            }),
            u(this, 'handleUpdates', () => {
                _();
            });
    }
}
t.Z = new E();
