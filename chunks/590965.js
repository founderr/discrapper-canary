let s;
n(47120), n(653041);
var i,
    r,
    o,
    l,
    a = n(442837),
    c = n(570140),
    u = n(413605),
    d = n(703656),
    h = n(131704),
    E = n(601964),
    p = n(592125),
    _ = n(430824),
    m = n(701190),
    C = n(496675),
    g = n(594174),
    f = n(998502),
    N = n(981631),
    b = n(176505);
let R = N.IlC.APP,
    I = !1,
    T = !1,
    S = [];
function O() {
    I = !0;
}
class A extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, m.Z, g.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? N.IlC.OVERLAY : N.IlC.APP;
        return !!(I && S.length > 0 && R === e);
    }
    getProps() {
        return {
            invite: S.length > 0 ? S[0][0] : null,
            error: null != s && '' !== s ? s : null,
            submitting: T
        };
    }
}
(l = 'InviteModalStore'),
    (o = 'displayName') in (r = A)
        ? Object.defineProperty(r, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = l),
    (t.Z = new A(c.Z, {
        OVERLAY_INITIALIZE: O,
        CONNECTION_OPEN: O,
        CONNECTION_CLOSED: function () {
            I = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === N.r2o.EXPIRED || t.state === N.r2o.BANNED || t.state === N.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, h.bc)(e.type)) {
                    if (null != p.Z.getChannel(e.id)) return (0, d.XU)(N.ME, e.id), f.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != _.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                        let e = (function (e) {
                            if ((0, u.W6)(e)) return b.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = p.Z.getChannel(t.id);
                                if (C.Z.can(N.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.XU)(n.id, e), f.ZP.focus(), !1;
                    }
                }
            }
            if (
                S.some((e) => {
                    let [n] = e;
                    return n.code === t.code;
                })
            )
                return !1;
            (R = e.context), (T = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: s, state: i, target_type: r, target_user: o, target_application: l, stage_instance: a, type: c, channel: u, guild: d } = e,
                    h = {
                        code: s,
                        state: i,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: r,
                        target_user: o,
                        target_application: l,
                        stage_instance: a,
                        type: c
                    };
                return null != u && (h.channel = { ...u }), null != d && (h.guild = new E.ZP(d)), null != e.inviter && (h.inviter = { ...e.inviter }), h;
            })(t);
            S.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((s = null), (T = !1), S.length > 0)) {
                let [, e] = S.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            T = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (s = t), (T = !1);
        }
    }));
