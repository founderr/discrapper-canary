let i;
n(47120), n(653041);
var l,
    r,
    a,
    o,
    s = n(442837),
    c = n(570140),
    u = n(413605),
    d = n(703656),
    h = n(131704),
    p = n(601964),
    f = n(592125),
    m = n(430824),
    g = n(701190),
    C = n(496675),
    _ = n(594174),
    v = n(998502),
    x = n(981631),
    I = n(176505);
let b = x.IlC.APP,
    E = !1,
    S = !1,
    N = [];
function Z() {
    E = !0;
}
class y extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, g.Z, _.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? x.IlC.OVERLAY : x.IlC.APP;
        return !!(E && N.length > 0 && b === e);
    }
    getProps() {
        return {
            invite: N.length > 0 ? N[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: S
        };
    }
}
(o = 'InviteModalStore'),
    (a = 'displayName') in (r = y)
        ? Object.defineProperty(r, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = o),
    (t.Z = new y(c.Z, {
        OVERLAY_INITIALIZE: Z,
        CONNECTION_OPEN: Z,
        CONNECTION_CLOSED: function () {
            E = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === x.r2o.EXPIRED || t.state === x.r2o.BANNED || t.state === x.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, h.bc)(e.type)) {
                    if (null != f.Z.getChannel(e.id)) return (0, d.XU)(x.ME, e.id), v.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != m.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                        let e = (function (e) {
                            if ((0, u.W6)(e)) return I.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = f.Z.getChannel(t.id);
                                if (C.Z.can(x.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.XU)(n.id, e), v.ZP.focus(), !1;
                    }
                }
            }
            if (
                N.some((e) => {
                    let [n] = e;
                    return n.code === t.code;
                })
            )
                return !1;
            (b = e.context), (S = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: l, target_type: r, target_user: a, target_application: o, stage_instance: s, type: c, channel: u, guild: d } = e,
                    h = {
                        code: i,
                        state: l,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: r,
                        target_user: a,
                        target_application: o,
                        stage_instance: s,
                        type: c
                    };
                return null != u && (h.channel = { ...u }), null != d && (h.guild = new p.ZP(d)), null != e.inviter && (h.inviter = { ...e.inviter }), h;
            })(t);
            N.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (S = !1), N.length > 0)) {
                let [, e] = N.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            S = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (S = !1);
        }
    }));
