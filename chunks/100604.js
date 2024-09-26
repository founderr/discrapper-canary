n.d(t, {
    r: function () {
        return I;
    }
});
var r = n(933557),
    i = n(356264),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    l = n(699516),
    u = n(594174),
    c = n(768581),
    d = n(55935),
    _ = n(631184),
    E = n(346610);
n(978003);
var f = n(689938);
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
let p = 16;
function m(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: c.ZP.getGuildIconURL({
            id: e.id,
            size: p,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: f.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e.name,
            timestamp: t
        })
    };
}
class I {
    getForwardInfo() {
        var e, t, n, c;
        let h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
            I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
            T = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
            g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.Z,
            S = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: A, parentMessage: v, messageSnapshot: N } = this,
            { useOldIcon: O } = (0, E.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: R } = _.u.getCurrentConfig({ location: 'MessageForward' });
        if (!R)
            return {
                snapshotIndex: A,
                useOldIcon: O
            };
        let C = (0, d.Xf)(N.message.timestamp),
            y = h.getChannel(this.parentMessage.channel_id);
        if (null != y && y.guild_id === (null === (e = v.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = h.getChannel(null === (n = v.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = g.getGuild(y.guild_id);
                return null == e
                    ? {
                          snapshotIndex: A,
                          useOldIcon: O
                      }
                    : {
                          snapshotIndex: A,
                          footerInfo: m(e, C),
                          useOldIcon: O
                      };
            }
            if (!T.can(e.accessPermissions, e))
                return {
                    snapshotIndex: A,
                    useOldIcon: O
                };
            let t = (0, r.F6)(e, p, I, !0);
            return {
                snapshotIndex: A,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: C,
                    accessibilityLabel: f.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
                        origin: t,
                        timestamp: C
                    })
                },
                useOldIcon: O
            };
        }
        let L = null === (t = v.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == L)
            return {
                snapshotIndex: A,
                useOldIcon: O
            };
        let b = null !== (c = g.getGuild(L)) && void 0 !== c ? c : S.getGuild(L);
        return null == b
            ? {
                  snapshotIndex: A,
                  useOldIcon: O
              }
            : {
                  snapshotIndex: A,
                  footerInfo: m(b, C),
                  useOldIcon: O
              };
    }
    constructor(e, t, n) {
        h(this, 'parentMessage', void 0), h(this, 'messageSnapshot', void 0), h(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
