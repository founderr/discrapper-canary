var i = r(47120);
var a = r(570140),
    s = r(147913),
    o = r(271383),
    l = r(594174),
    u = r(69882);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = 10000,
    f = null,
    _ = () => {
        let e = o.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((n) => {
            let r = n,
                i = (0, o.O5)(r),
                a = (0, o.V6)(r),
                s = e[r];
            !(0, u.J)(s) && h(i, a);
        });
    },
    h = (e, n) => {
        var r, i, s, c, d, f;
        let _ = o.ZP.getMember(e, n),
            h = l.default.getUser(n);
        if (null == _ || null == h || (0, u.b)(_)) return;
        let p = {
            ..._,
            guildId: e,
            nick: null !== (r = _.nick) && void 0 !== r ? r : h.username,
            avatar: null !== (i = _.avatar) && void 0 !== i ? i : void 0,
            avatarDecoration: null != _.avatarDecoration ? { ..._.avatarDecoration } : void 0,
            premiumSince: null !== (s = _.premiumSince) && void 0 !== s ? s : void 0,
            isPending: null !== (c = _.isPending) && void 0 !== c && c,
            user: {
                ...h,
                email: null !== (d = h.email) && void 0 !== d ? d : void 0,
                phone: null !== (f = h.phone) && void 0 !== f ? f : void 0
            },
            communicationDisabledUntil: null
        };
        a.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ...p
        });
    };
class p extends s.Z {
    _initialize() {
        f = setInterval(() => _(), d);
    }
    _terminate() {
        clearInterval(f);
    }
    constructor(...e) {
        super(...e), c(this, 'clearGuildMemberTimeout', h);
    }
}
n.Z = new p();
