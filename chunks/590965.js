let i;
n(47120), n(653041);
var l,
    r,
    a,
    s,
    o = n(442837),
    c = n(570140),
    u = n(413605),
    d = n(703656),
    h = n(131704),
    p = n(601964),
    f = n(592125),
    m = n(430824),
    _ = n(701190),
    g = n(496675),
    C = n(594174),
    I = n(998502),
    E = n(981631),
    N = n(176505);
let S = E.IlC.APP,
    x = !1,
    v = !1,
    T = [];
function Z() {
    x = !0;
}
class A extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, _.Z, C.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? E.IlC.OVERLAY : E.IlC.APP;
        return !!(x && T.length > 0 && S === e);
    }
    getProps() {
        return {
            invite: T.length > 0 ? T[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: v
        };
    }
}
(s = 'InviteModalStore'),
    (a = 'displayName') in (r = A)
        ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = s),
    (t.Z = new A(c.Z, {
        OVERLAY_INITIALIZE: Z,
        CONNECTION_OPEN: Z,
        CONNECTION_CLOSED: function () {
            x = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === E.r2o.EXPIRED || t.state === E.r2o.BANNED || t.state === E.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, h.bc)(e.type)) {
                    if (null != f.Z.getChannel(e.id)) return (0, d.XU)(E.ME, e.id), I.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != m.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                        let e = (function (e) {
                            if ((0, u.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = f.Z.getChannel(t.id);
                                if (g.Z.can(E.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.XU)(n.id, e), I.ZP.focus(), !1;
                    }
                }
            }
            if (
                T.some((e) => {
                    let [n] = e;
                    return n.code === t.code;
                })
            )
                return !1;
            (S = e.context), (v = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: l, target_type: r, target_user: a, target_application: s, stage_instance: o, type: c, channel: u, guild: d } = e,
                    h = {
                        code: i,
                        state: l,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: r,
                        target_user: a,
                        target_application: s,
                        stage_instance: o,
                        type: c
                    };
                return null != u && (h.channel = { ...u }), null != d && (h.guild = new p.ZP(d)), null != e.inviter && (h.inviter = { ...e.inviter }), h;
            })(t);
            T.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (v = !1), T.length > 0)) {
                let [, e] = T.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            v = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (v = !1);
        }
    }));
