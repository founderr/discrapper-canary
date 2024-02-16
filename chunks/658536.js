"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("913144"),
  a = n("689988"),
  i = n("26989"),
  u = n("697218"),
  d = n("509");
let r = null,
  s = () => {
    let e = i.default.getCommunicationDisabledUserMap();
    Object.keys(e).forEach(t => {
      let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
        l = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
        a = e[t];
      !(0, d.isCommunicationDisabled)(a) && o(n, l)
    })
  },
  o = (e, t) => {
    var n, a, r, s, o, c;
    let f = i.default.getMember(e, t),
      E = u.default.getUser(t);
    if (null == f || null == E || (0, d.isMemberCommunicationDisabled)(f)) return;
    let C = {
      ...f,
      guildId: e,
      nick: null !== (n = f.nick) && void 0 !== n ? n : E.username,
      avatar: null !== (a = f.avatar) && void 0 !== a ? a : void 0,
      premiumSince: null !== (r = f.premiumSince) && void 0 !== r ? r : void 0,
      isPending: null !== (s = f.isPending) && void 0 !== s && s,
      user: {
        ...E,
        email: null !== (o = E.email) && void 0 !== o ? o : void 0,
        phone: null !== (c = E.phone) && void 0 !== c ? c : void 0
      },
      communicationDisabledUntil: null
    };
    l.default.dispatch({
      type: "GUILD_MEMBER_UPDATE",
      ...C
    })
  };
class c extends a.default {
  _initialize() {
    r = setInterval(() => s(), 1e4)
  }
  _terminate() {
    clearInterval(r)
  }
  constructor(...e) {
    super(...e), this.clearGuildMemberTimeout = o
  }
}
var f = new c