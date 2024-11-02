n(47120);
var r = n(570140),
    i = n(147913),
    a = n(271383),
    s = n(594174),
    o = n(69882);
let l = null,
    u = () => {
        let e = a.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = (0, a.O5)(t),
                r = (0, a.V6)(t),
                i = e[t];
            !(0, o.J)(i) && c(n, r);
        });
    },
    c = (e, t) => {
        var n, i, l, u, c, d;
        let f = a.ZP.getMember(e, t),
            _ = s.default.getUser(t);
        if (null == f || null == _ || (0, o.b)(f)) return;
        let h = {
            ...f,
            guildId: e,
            nick: null !== (n = f.nick) && void 0 !== n ? n : _.username,
            avatar: null !== (i = f.avatar) && void 0 !== i ? i : void 0,
            avatarDecoration: null != f.avatarDecoration ? { ...f.avatarDecoration } : void 0,
            premiumSince: null !== (l = f.premiumSince) && void 0 !== l ? l : void 0,
            isPending: null !== (u = f.isPending) && void 0 !== u && u,
            user: {
                ..._,
                email: null !== (c = _.email) && void 0 !== c ? c : void 0,
                phone: null !== (d = _.phone) && void 0 !== d ? d : void 0
            },
            communicationDisabledUntil: null
        };
        r.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ...h
        });
    };
class d extends i.Z {
    _initialize() {
        l = setInterval(() => u(), 10000);
    }
    _terminate() {
        clearInterval(l);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'clearGuildMemberTimeout'),
            (r = c),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new d();
