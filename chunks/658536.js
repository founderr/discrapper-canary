"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("222007");
var n = l("913144"),
  a = l("689988"),
  i = l("26989"),
  u = l("697218"),
  d = l("509");
let s = null,
  r = () => {
    let e = i.default.getCommunicationDisabledUserMap();
    Object.keys(e).forEach(t => {
      let l = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
        n = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
        a = e[t];
      !(0, d.isCommunicationDisabled)(a) && o(l, n)
    })
  },
  o = (e, t) => {
    var l, a, s, r, o, c;
    let f = i.default.getMember(e, t),
      E = u.default.getUser(t);
    if (null == f || null == E || (0, d.isMemberCommunicationDisabled)(f)) return;
    let C = {
      ...f,
      guildId: e,
      nick: null !== (l = f.nick) && void 0 !== l ? l : E.username,
      avatar: null !== (a = f.avatar) && void 0 !== a ? a : void 0,
      premiumSince: null !== (s = f.premiumSince) && void 0 !== s ? s : void 0,
      isPending: null !== (r = f.isPending) && void 0 !== r && r,
      user: {
        ...E,
        email: null !== (o = E.email) && void 0 !== o ? o : void 0,
        phone: null !== (c = E.phone) && void 0 !== c ? c : void 0
      },
      communicationDisabledUntil: null
    };
    n.default.dispatch({
      type: "GUILD_MEMBER_UPDATE",
      ...C
    })
  };
class c extends a.default {
  _initialize() {
    s = setInterval(() => r(), 1e4)
  }
  _terminate() {
    clearInterval(s)
  }
  constructor(...e) {
    super(...e), this.clearGuildMemberTimeout = o
  }
}
var f = new c