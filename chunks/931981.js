n.d(t, {
    V: function () {
        return b;
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
    _ = n(146263);
function p(e, t, n) {
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
let h = new Set();
class m extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = new Set(e));
    }
    hasId(e) {
        return h.has(e);
    }
    getState() {
        return [...h];
    }
}
p(m, 'displayName', 'PTOStore'), p(m, 'persistKey', 'PTOStore');
let g = new m(s.Z, {}),
    E = (e) =>
        (0, a.e7)([u.ZP, d.default, g], () => {
            let t = d.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = d.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = u.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return r ? !g.hasId(n.id) && r : (h.delete(n.id) && g.emitChange(), !1);
        }),
    v = () => {
        let e = c.Z.getChannelId();
        if (null == e) return;
        let t = l.Z.getChannel(e);
        null != t && t.isPrivate() && !h.has(t.getRecipientId()) && (h.add(t.getRecipientId()), g.emitChange());
    },
    b = () =>
        (0, i.jsxs)('div', {
            className: _.bar,
            children: [f.intl.string(f.t['2UvR1N']), (0, i.jsx)(o.B, { onClick: v })]
        });
