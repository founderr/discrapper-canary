n.d(t, {
    r: function () {
        return T;
    }
});
var i = n(933557),
    a = n(356264),
    s = n(592125),
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
function f(e, t) {
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
class T {
    getForwardInfo() {
        var e, t, n, u;
        let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Z,
            T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
            N = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
            p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
            C = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.Z,
            { snapshotIndex: g, parentMessage: S, messageSnapshot: A } = this,
            { useOldIcon: x } = (0, E.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: R } = _.u.getCurrentConfig({ location: 'MessageForward' });
        if (!R)
            return {
                snapshotIndex: g,
                useOldIcon: x
            };
        let v = (0, d.Xf)(A.message.timestamp),
            M = m.getChannel(this.parentMessage.channel_id);
        if (null != M && M.guild_id === (null === (e = S.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = m.getChannel(null === (n = S.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = p.getGuild(M.guild_id);
                return null == e
                    ? {
                          snapshotIndex: g,
                          useOldIcon: x
                      }
                    : {
                          snapshotIndex: g,
                          footerInfo: f(e, v),
                          useOldIcon: x
                      };
            }
            if (!N.can(e.accessPermissions, e))
                return {
                    snapshotIndex: g,
                    useOldIcon: x
                };
            let t = (0, i.F6)(e, T, h, !0);
            return {
                snapshotIndex: g,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: v,
                    accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
                        origin: t,
                        timestamp: v
                    })
                },
                useOldIcon: x
            };
        }
        let O = null === (t = S.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == O)
            return {
                snapshotIndex: g,
                useOldIcon: x
            };
        let L = null !== (u = p.getGuild(O)) && void 0 !== u ? u : C.getGuild(O);
        return null == L
            ? {
                  snapshotIndex: g,
                  useOldIcon: x
              }
            : {
                  snapshotIndex: g,
                  footerInfo: f(L, v),
                  useOldIcon: x
              };
    }
    constructor(e, t, n) {
        m(this, 'parentMessage', void 0), m(this, 'messageSnapshot', void 0), m(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
