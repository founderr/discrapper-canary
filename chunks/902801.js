"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("702976");
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("689988"),
  s = n("38654"),
  r = n("271938"),
  o = n("42203"),
  u = n("26989"),
  d = n("162771"),
  c = n("568734"),
  f = n("347895"),
  E = n("698882"),
  h = n("129092"),
  _ = n("675305"),
  C = n("290886"),
  S = n("363176"),
  g = n("657944");
class T extends l.default {
  constructor(...e) {
    super(...e), this.onboardingCompleteGuilds = new Set, this.actions = {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      MESSAGE_CREATE: e => this.handleMessageSend(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }, this.handlePostConnectionOpen = () => {
      let e = d.default.getGuildId();
      null != e && this._getOrLoadOnboardingMemberActions(e)
    }, this.handleGuildMemberUpdate = e => {
      let {
        flags: t,
        user: l,
        guildId: s
      } = e;
      if (l.id === r.default.getId()) {
        if (!this.onboardingCompleteGuilds.has(s) && (0, c.hasFlag)(null != t ? t : 0, g.GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
          var o, u;
          this.onboardingCompleteGuilds.add(s);
          let e = null !== (u = null === (o = E.default.getNewMemberActions(s)) || void 0 === o ? void 0 : o.length) && void 0 !== u ? u : 0;
          if (0 === e) return;
          (0, a.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("74066").then(n.bind(n, "74066"));
            return n => (0, i.jsx)(t, {
              ...n,
              initialPercent: (e - 1) / e,
              numActions: e
            })
          })
        }
      }
    }, this.handleGuildDelete = e => {
      let {
        guild: t
      } = e;
      this.onboardingCompleteGuilds.delete(t.id)
    }, this.handleChannelSelect = async e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null == t || null == n) return;
      let {
        memberActions: i,
        completedActions: a
      } = await this._getOrLoadOnboardingMemberActions(t), l = null == i ? void 0 : i.find(e => e.channelId === n);
      (null == a ? void 0 : a[n]) !== !0 && null != l && l.actionType === h.NewMemberActionTypes.VIEW && (0, f.completeNewMemberAction)(t, n)
    }, this.handleMessageSend = e => {
      var t;
      let {
        guildId: n,
        channelId: i,
        message: a
      } = e;
      if (null == n || null == i || (null === (t = a.author) || void 0 === t ? void 0 : t.id) !== r.default.getId()) return;
      let l = o.default.getChannel(i);
      (null == l ? void 0 : l.isForumPost()) && (null == l ? void 0 : l.parent_id) != null && this._completeChatAction(n, l.parent_id), this._completeChatAction(n, i)
    }, this.handleThreadCreate = e => {
      var t;
      let {
        channel: n,
        isNewlyCreated: i
      } = e;
      if (!!i && null != n.parent_id && !!(null === (t = o.default.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === r.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
    }, this._completeChatAction = async (e, t) => {
      let {
        memberActions: n,
        completedActions: i
      } = await this._getOrLoadOnboardingMemberActions(e), a = null == n ? void 0 : n.find(e => e.channelId === t);
      (null == i ? void 0 : i[t]) !== !0 && null != a && a.actionType === h.NewMemberActionTypes.CHAT && (0, f.completeNewMemberAction)(e, t)
    }, this._getOrLoadOnboardingMemberActions = async e => {
      let t = (0, C.canSeeOnboardingHome)(e),
        n = s.default.isFullServerPreview(e);
      if (!t && !n) return {};
      let i = u.default.getSelfMember(e);
      if (null == i || !(0, S.getIsNewMember)(i)) return {};
      let [a, l] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, i), this._getOrLoadMemberActions(e, i)]);
      return {
        memberActions: a,
        completedActions: l
      }
    }, this._getOrLoadOnboardingHomeSettings = async (e, t) => {
      let n = E.default.getNewMemberActions(e),
        i = E.default.getIsLoading(e);
      if (!(null == n && !i && (0, S.getIsNewMember)(t))) return n;
      {
        let t = await (0, f.fetchGuildHomeSettings)(e);
        return null == t ? void 0 : t.newMemberActions
      }
    }, this._getOrLoadMemberActions = async (e, t) => {
      var n;
      let {
        completedActions: i,
        loading: a
      } = _.default.getState(e);
      if (!(null == i && !a && (0, c.hasFlag)(null !== (n = t.flags) && void 0 !== n ? n : 0, g.GuildMemberFlags.STARTED_HOME_ACTIONS))) return i;
      {
        let t = await (0, f.fetchNewMemberActions)(e);
        return t
      }
    }
  }
}
var m = new T