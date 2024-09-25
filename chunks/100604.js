n.d(t, {
    r: function () {
        return h;
    }
});
var i = n(933557),
    s = n(356264),
    a = n(592125),
    r = n(430824),
    l = n(496675),
    o = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935),
    _ = n(631184),
    E = n(346610);
n(978003);
var I = n(689938);
function m(e, t, n) {
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
function T(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e.name,
            timestamp: t
        })
    };
}
class h {
    getForwardInfo() {
        var e, t, n, u;
        let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            N = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
            f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
            C = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
            p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : s.Z,
            { snapshotIndex: g, parentMessage: A, messageSnapshot: S } = this,
            { useOldIcon: x } = (0, E.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: R } = _.u.getCurrentConfig({ location: 'MessageForward' });
        if (!R)
            return {
                snapshotIndex: g,
                useOldIcon: x
            };
        let O = (0, d.Xf)(S.message.timestamp),
            M = m.getChannel(this.parentMessage.channel_id);
        if (null != M && M.guild_id === (null === (e = A.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = m.getChannel(null === (n = A.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = C.getGuild(M.guild_id);
                return null == e
                    ? {
                          snapshotIndex: g,
                          useOldIcon: x
                      }
                    : {
                          snapshotIndex: g,
                          footerInfo: T(e, O),
                          useOldIcon: x
                      };
            }
            if (!f.can(e.accessPermissions, e))
                return {
                    snapshotIndex: g,
                    useOldIcon: x
                };
            let t = (0, i.F6)(e, h, N, !0);
            return {
                snapshotIndex: g,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: O,
                    accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
                        origin: t,
                        timestamp: O
                    })
                },
                useOldIcon: x
            };
        }
        let v = null === (t = A.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == v)
            return {
                snapshotIndex: g,
                useOldIcon: x
            };
        let L = null !== (u = C.getGuild(v)) && void 0 !== u ? u : p.getGuild(v);
        return null == L
            ? {
                  snapshotIndex: g,
                  useOldIcon: x
              }
            : {
                  snapshotIndex: g,
                  footerInfo: T(L, O),
                  useOldIcon: x
              };
    }
    constructor(e, t, n) {
        m(this, 'parentMessage', void 0), m(this, 'messageSnapshot', void 0), m(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
