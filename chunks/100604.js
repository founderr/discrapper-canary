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
        var e, t, n, u, m;
        let h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
            C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
            p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
            g = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : s.Z,
            { snapshotIndex: A, parentMessage: S, messageSnapshot: x } = this,
            { useOldIcon: R } = (0, E.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: O } = _.u.getCurrentConfig({ location: 'MessageForward' });
        if (!O)
            return {
                snapshotIndex: A,
                useOldIcon: R
            };
        let M = (0, d.Xf)(x.message.timestamp),
            v = h.getChannel(this.parentMessage.channel_id);
        if (null != v && v.guild_id === (null === (e = S.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = h.getChannel(null === (u = S.messageReference) || void 0 === u ? void 0 : u.channel_id);
            if (null == e) {
                let e = p.getGuild(v.guild_id);
                return null == e
                    ? {
                          snapshotIndex: A,
                          useOldIcon: R
                      }
                    : {
                          snapshotIndex: A,
                          footerInfo: T(e, M),
                          useOldIcon: R
                      };
            }
            if (!C.can(e.accessPermissions, e))
                return {
                    snapshotIndex: A,
                    useOldIcon: R
                };
            let t = (0, i.F6)(e, N, f, !0);
            return {
                snapshotIndex: A,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: M,
                    accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
                        origin: t,
                        timestamp: M
                    })
                },
                useOldIcon: R
            };
        }
        let L = null === (t = S.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == L)
            return {
                snapshotIndex: A,
                useOldIcon: R
            };
        let Z = null !== (m = p.getGuild(L)) && void 0 !== m ? m : g.getGuild(L);
        if (null == Z)
            return {
                snapshotIndex: A,
                useOldIcon: R
            };
        let P = h.getChannel(null === (n = S.messageReference) || void 0 === n ? void 0 : n.channel_id);
        return null == P || C.can(P.accessPermissions, P)
            ? {
                  snapshotIndex: A,
                  footerInfo: T(Z, M),
                  useOldIcon: R
              }
            : {
                  snapshotIndex: A,
                  useOldIcon: R
              };
    }
    constructor(e, t, n) {
        m(this, 'parentMessage', void 0), m(this, 'messageSnapshot', void 0), m(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
