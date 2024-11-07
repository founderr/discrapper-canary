n.d(t, {
    V: function () {
        return I;
    },
    e: function () {
        return E;
    }
}),
    n(47120);
var r,
    i = n(200651);
n(192379);
var a = n(442837),
    s = n(570140),
    o = n(962293),
    l = n(592125),
    u = n(271383),
    c = n(944486),
    d = n(594174),
    f = n(388032),
    _ = n(716606);
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
class m extends (r = a.ZP.PersistedStore) {
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
let g = new m(s.Z, {}),
    E = (e) =>
        (0, a.e7)([u.ZP, d.default, g], () => {
            let t = d.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = d.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = u.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return r ? !g.hasId(n.id) && r : (p.delete(n.id) && g.emitChange(), !1);
        }),
    v = () => {
        let e = c.Z.getChannelId();
        if (null == e) return;
        let t = l.Z.getChannel(e);
        null != t && t.isPrivate() && !p.has(t.getRecipientId()) && (p.add(t.getRecipientId()), g.emitChange());
    },
    I = () =>
        (0, i.jsxs)('div', {
            className: _.bar,
            children: [f.intl.string(f.t['2UvR1N']), (0, i.jsx)(o.B, { onClick: v })]
        });
