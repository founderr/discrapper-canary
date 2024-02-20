"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007"), n("702976");
var i = n("689988"),
  a = n("393414"),
  l = n("26989"),
  s = n("305961"),
  r = n("162771"),
  o = n("718517"),
  u = n("568734"),
  d = n("685829"),
  c = n("863636"),
  f = n("937692"),
  E = n("49111"),
  h = n("724210"),
  _ = n("657944");
let C = null,
  S = null;
class g extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }, this.handleConnectionOpen = e => {
      var t;
      null != (C = null !== (t = null != C ? C : r.default.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(C)
    }, this.handleChannelSelect = e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (C === t && S === n) return;
      if (C = null != t ? t : null, S = null != n ? n : null, null == C || null == S) return;
      let i = s.default.getGuild(t);
      null != i && i.hasFeature(E.GuildFeatures.COMMUNITY) && c.default.shouldFetchPrompts(C, 8 * o.default.Millis.HOUR) && (0, d.loadOnboardingPrompts)(C), this._openOnboardingIfIncomplete(C, n)
    }, this.handleGuildDelete = e => {
      let {
        guild: t
      } = e;
      (0, f.discardOnboardingPromise)(t.id)
    }, this._openOnboardingIfIncomplete = async (e, t) => {
      var n, i;
      if ((0, f.isOnboardingActiveForGuild)(e)) {
        (0, a.transitionTo)(E.Routes.CHANNEL(e, h.StaticChannelRoute.GUILD_ONBOARDING));
        return
      }
      let r = s.default.getGuild(e);
      if (null == r || !r.hasFeature(E.GuildFeatures.GUILD_ONBOARDING)) return;
      let o = l.default.getSelfMember(e);
      !(null == o || (0, u.hasFlag)(null !== (n = o.flags) && void 0 !== n ? n : 0, _.GuildMemberFlags.COMPLETED_ONBOARDING)) && (0, u.hasFlag)(null !== (i = o.flags) && void 0 !== i ? i : 0, _.GuildMemberFlags.STARTED_ONBOARDING) && (await (0, f.default)({
        guildId: e
      }), (0, a.transitionTo)(E.Routes.CHANNEL(e, t)))
    }
  }
}
var T = new g