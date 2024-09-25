n.d(t, {
    V: function () {
        return S;
    },
    e: function () {
        return T;
    }
});
var r,
    i = n(47120);
var a = n(735250);
n(470079);
var o = n(442837),
    s = n(570140),
    l = n(962293),
    u = n(592125),
    c = n(271383),
    d = n(944486),
    _ = n(594174),
    E = n(689938),
    f = n(146263);
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
let p = new Set();
class m extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = new Set(e));
    }
    hasId(e) {
        return p.has(e);
    }
    getState() {
        return [...p];
    }
}
h(m, 'displayName', 'PTOStore'), h(m, 'persistKey', 'PTOStore');
let I = new m(s.Z, {}),
    T = (e) =>
        (0, o.e7)([c.ZP, _.default, I], () => {
            let t = _.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = _.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = c.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return r ? !I.hasId(n.id) && r : (p.delete(n.id) && I.emitChange(), !1);
        }),
    g = () => {
        let e = d.Z.getChannelId();
        if (null == e) return;
        let t = u.Z.getChannel(e);
        null != t && t.isPrivate() && !p.has(t.getRecipientId()) && (p.add(t.getRecipientId()), I.emitChange());
    },
    S = () =>
        (0, a.jsxs)('div', {
            className: f.bar,
            children: [E.Z.Messages.STAFF_PTO_NOTICE, (0, a.jsx)(l.B, { onClick: g })]
        });
