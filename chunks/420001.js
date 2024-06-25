"use strict";
n(757143);
var i = n(911969),
  r = n(10718),
  s = n(367790),
  o = n(895924),
  a = n(826298),
  l = n(695346),
  u = n(594174),
  _ = n(156361),
  c = n(5192),
  d = n(417574),
  E = n(877565),
  I = n(590921),
  T = n(126226),
  h = n(689938);

function f(e) {
  let t = d.X.exec(e);
  if (null != t) {
    let n = t[1],
      i = u.default.getUser(n);
    return null == i || !i.bot || i.isClyde() ? null : {
      type: "mention",
      cleanedQuery: e.substring(t[0].length).trim(),
      user: i
    }
  }
  return null
}
let S = {
  ...T.Z,
  sentinel: void 0,
  focusMode: I.QZ.MANUAL,
  matches(e, t, n, i, r) {
    if (r.commands === I.L8.DISABLED || r.commands === I.L8.OLD_BUILT_INS || n.length < 2 || !l.Xk.getSetting()) return !1;
    let s = f(n);
    return null != s && s.cleanedQuery.length > 0
  },
  queryResults(e, t, n, o, u) {
    if (!l.Xk.getSetting()) return T.K;
    let _ = f(n);
    if (null == _) return T.K;
    let c = (0, a.hV)(e, _.cleanedQuery),
      {
        commands: d,
        sections: E
      } = r.JT(e, {
        commandType: i.yU.CHAT,
        text: c.text
      }, {
        limit: I.AQ,
        placeholderCount: I.YP,
        scoreMethod: s.p.COMMAND_OR_APPLICATION,
        allowFetch: u
      });
    if (null == d) return T.K;
    let h = d;
    if (c.hasSpaceTerminator) {
      let e = c.text.trim(),
        t = e + " ";
      h = h.filter(n => n.name === e || n.name.startsWith(t))
    }
    return 0 === h.length ? T.K : {
      results: {
        entries: h.slice(0, I.AQ).map(e => ({
          command: e,
          section: null == E ? void 0 : E.find(t => t.id === e.applicationId)
        }))
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        entries: t
      },
      selectedIndex: n,
      guild: i,
      channel: r,
      query: s,
      options: o,
      onHover: a,
      onClick: l
    } = e;
    return (0, E.HI)({
      query: s,
      selectedIndex: n,
      autocompletes: t,
      onHover: a,
      onClick: l,
      titleWithQuery: h.Z.Messages.COMMANDS_MATCHING,
      titleWithoutQuery: h.Z.Messages.COMMANDS,
      Component: o.commands === I.L8.OLD_BUILT_INS ? _.ZP.Command : _.ZP.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: r,
          guildId: r.guild_id,
          showImage: !0,
          section: n
        }
      },
      getQuery: e => {
        let t = f(e);
        if ("mention" !== t.type) return e;
        let n = c.ZP.getName(null == i ? void 0 : i.id, r.id, t.user);
        return e.replace(d.X, "@".concat(n))
      },
      key: "commands"
    })
  },
  onSelect(e) {
    let {
      results: t,
      index: n,
      type: i,
      options: r,
      channel: s
    } = e, a = T.Z.onSelect({
      results: t,
      index: n,
      type: i,
      options: r,
      channel: s,
      location: o.Vh.SUGGESTION
    });
    return null == a ? null : {
      ...a,
      type: I.z2.COMMAND_SUGGESTION
    }
  }
};
t.Z = S