var r = n(47120);
var i = n(570140),
    a = n(147913),
    o = n(271383),
    s = n(594174),
    l = n(69882);
function u(e, t, n) {
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
let c = 10000,
    d = null,
    _ = () => {
        let e = o.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = t,
                r = (0, o.O5)(n),
                i = (0, o.V6)(n),
                a = e[n];
            !(0, l.J)(a) && E(r, i);
        });
    },
    E = (e, t) => {
        var n, r, a, u, c, d;
        let _ = o.ZP.getMember(e, t),
            E = s.default.getUser(t);
        if (null == _ || null == E || (0, l.b)(_)) return;
        let f = {
            ..._,
            guildId: e,
            nick: null !== (n = _.nick) && void 0 !== n ? n : E.username,
            avatar: null !== (r = _.avatar) && void 0 !== r ? r : void 0,
            avatarDecoration: null != _.avatarDecoration ? { ..._.avatarDecoration } : void 0,
            premiumSince: null !== (a = _.premiumSince) && void 0 !== a ? a : void 0,
            isPending: null !== (u = _.isPending) && void 0 !== u && u,
            user: {
                ...E,
                email: null !== (c = E.email) && void 0 !== c ? c : void 0,
                phone: null !== (d = E.phone) && void 0 !== d ? d : void 0
            },
            communicationDisabledUntil: null
        };
        i.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ...f
        });
    };
class f extends a.Z {
    _initialize() {
        d = setInterval(() => _(), c);
    }
    _terminate() {
        clearInterval(d);
    }
    constructor(...e) {
        super(...e), u(this, 'clearGuildMemberTimeout', E);
    }
}
t.Z = new f();
