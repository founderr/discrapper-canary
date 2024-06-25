"use strict";
var i = n(735250),
  r = n(470079),
  s = n(271383),
  o = n(156361),
  a = n(483360),
  l = n(51144),
  u = n(877565),
  _ = n(590921),
  c = n(665692),
  d = n(689938);
let E = {
  sentinel: c.ME,
  stores: [s.ZP],
  matches: (e, t, n, i, r) => (r.mentions.user !== _.h3.DENY || r.mentions.role !== _.Fw.DENY || r.mentions.global !== _.VV.DENY) && !0,
  queryResults(e, t, n, i, r) {
    let s = i.mentions.global === _.VV.ALLOW_EVERYONE || i.mentions.global === _.VV.ALLOW_EVERYONE_OR_HERE,
      o = i.mentions.global === _.VV.ALLOW_EVERYONE_OR_HERE,
      l = i.mentions.user !== _.h3.DENY,
      u = i.mentions.role !== _.Fw.DENY,
      c = i.mentions.user === _.h3.ALLOW_GUILD,
      d = i.mentions.role === _.Fw.ALLOW_ALL;
    return {
      results: a.ZP.queryMentionResults({
        query: n,
        channel: e,
        canMentionEveryone: s,
        canMentionHere: o,
        canMentionUsers: l,
        canMentionRoles: u,
        includeAllGuildUsers: c,
        includeNonMentionableRoles: d,
        request: r
      })
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          users: s,
          globals: a,
          roles: l
        },
        selectedIndex: E,
        channel: I,
        query: T,
        options: h,
        onHover: f,
        onClick: S
      } = e,
      A = s.map((e, t) => (0, i.jsx)(o.ZP.User, {
        guildId: I.guild_id,
        onClick: S,
        onHover: f,
        selected: E === t,
        index: t,
        user: e.user,
        nick: e.nick,
        status: e.status,
        hidePersonalInformation: h.hidePersonalInformation
      }, e.user.id)),
      N = a.map((e, t) => (0, i.jsx)(o.ZP.Generic, {
        onClick: S,
        onHover: f,
        selected: E === t + s.length,
        index: s.length + t,
        text: e.text,
        description: h.hideMentionDescription ? null : e.description,
        "aria-label": e.text
      }, e.text)),
      m = l.map((e, t) => (0, i.jsx)(o.ZP.Role, {
        onClick: S,
        onHover: f,
        selected: E === t + s.length + a.length,
        index: s.length + a.length + t,
        role: e,
        hideDescription: h.hideMentionDescription
      }, e.id));
    return h.mentions.user === _.h3.DENY ? (t = d.Z.Messages.ROLES_MATCHING, n = d.Z.Messages.ROLES) : (t = d.Z.Messages.MEMBERS_MATCHING, n = d.Z.Messages.MEMBERS), (0, i.jsxs)(r.Fragment, {
      children: [(0, u.gm)({
        titleWithQuery: t,
        titleWithoutQuery: n,
        query: T,
        getQuery: e => "".concat(c.ME).concat(e)
      }), A, s.length > 0 && a.length > 0 ? (0, i.jsx)(o.ZP.Divider, {}) : null, N, s.length > 0 && l.length > 0 || a.length > 0 && l.length > 0 ? (0, i.jsx)(o.ZP.Divider, {}) : null, m]
    }, "mentions")
  },
  onSelect(e) {
    let {
      results: {
        users: t,
        globals: n,
        roles: i
      },
      index: r,
      options: s,
      channel: o
    } = e, u = t[r], d = n[r - t.length], E = i[r - t.length - n.length];
    return null != u ? s.insertText(function(e, t, n) {
      return a.ZP.hasSameRoleAsUsername(t, e) ? "".concat(c.ME).concat(e.tag) : "".concat(c.ME).concat(l.ZP.getUserTag(e, {
        identifiable: n ? "never" : "always"
      }))
    }(u.user, o, s.hidePersonalInformation), function(e) {
      return "<@".concat(e.id, ">")
    }(u.user)) : null != d ? s.insertText(function(e) {
      return e.text
    }(d)) : null != E && s.insertText(function(e) {
      return "".concat(c.ME).concat(e.name)
    }(E), function(e) {
      return "<@&".concat(e.id, ">")
    }(E)), {
      type: _.z2.MENTION
    }
  }
};
t.Z = E