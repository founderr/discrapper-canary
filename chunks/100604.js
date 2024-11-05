n.d(t, {
    r: function () {
        return _;
    }
});
var i = n(933557),
    r = n(356264),
    l = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(699516),
    c = n(594174),
    d = n(768581),
    u = n(55935),
    m = n(631184),
    h = n(346610);
n(978003);
var f = n(388032);
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
function g(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: d.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t['+l04BA'], {
            origin: e.name,
            timestamp: t
        })
    };
}
class _ {
    getForwardInfo() {
        var e, t, n, d;
        let p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
            _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            C = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
            E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
            I = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
            x = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r.Z,
            { snapshotIndex: v, parentMessage: N, messageSnapshot: T } = this,
            { useOldIcon: S } = (0, h.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: b } = m.u.getCurrentConfig({ location: 'MessageForward' });
        if (!b)
            return {
                snapshotIndex: v,
                useOldIcon: S
            };
        let A = (0, u.Xf)(T.message.timestamp),
            j = p.getChannel(this.parentMessage.channel_id);
        if (null != j && j.guild_id === (null === (e = N.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = p.getChannel(null === (n = N.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = I.getGuild(j.guild_id);
                return null == e
                    ? {
                          snapshotIndex: v,
                          useOldIcon: S
                      }
                    : {
                          snapshotIndex: v,
                          footerInfo: g(e, A),
                          useOldIcon: S
                      };
            }
            if (!E.can(e.accessPermissions, e))
                return {
                    snapshotIndex: v,
                    useOldIcon: S
                };
            let t = (0, i.F6)(e, _, C, !0);
            return {
                snapshotIndex: v,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: A,
                    accessibilityLabel: f.intl.formatToPlainString(f.t['+l04BA'], {
                        origin: t,
                        timestamp: A
                    })
                },
                useOldIcon: S
            };
        }
        let Z = null === (t = N.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == Z)
            return {
                snapshotIndex: v,
                useOldIcon: S
            };
        let R = null !== (d = I.getGuild(Z)) && void 0 !== d ? d : x.getGuild(Z);
        return null == R
            ? {
                  snapshotIndex: v,
                  useOldIcon: S
              }
            : {
                  snapshotIndex: v,
                  footerInfo: g(R, A),
                  useOldIcon: S
              };
    }
    constructor(e, t, n) {
        p(this, 'parentMessage', void 0), p(this, 'messageSnapshot', void 0), p(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
