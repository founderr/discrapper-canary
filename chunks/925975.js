n.d(t, {
  g: function() {
    return f
  }
}), n(47120), n(757143);
var l = n(302454),
  i = n.n(l),
  s = n(969812),
  a = n(904245),
  r = n(367907),
  o = n(339085),
  c = n(222677),
  u = n(995774),
  d = n(695346),
  h = n(375954),
  m = n(981631);
let E = /\\([*?+/])/g,
  p = {
    tts: {
      action: () => ({
        tts: d.OW.getSetting()
      })
    },
    me: {
      action: e => ({
        content: "_".concat(e, "_")
      })
    },
    tableflip: {
      action: e => ({
        content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      })
    },
    unflip: {
      action: e => ({
        content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      })
    },
    shrug: {
      action: e => ({
        content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
      })
    },
    nick: {
      action(e, t) {
        let {
          channel: n
        } = t;
        if (null != n.guild_id) return s.Z.changeNickname(n.guild_id, n.id, m.ME, e), {
          content: ""
        }
      }
    },
    reaction: {
      match: i().anyScopeRegex(/^\+:(.+?): *$/),
      action(e, t) {
        let {
          isEdit: n,
          channel: l
        } = t;
        if (n || !h.Z.hasPresent(l.id)) return;
        let i = h.Z.getMessages(l.id).last();
        if (null == i || null == i.id) return;
        let s = o.Z.getDisambiguatedEmojiContext(l.guild_id).getByName(e.trim().slice(2, -1));
        if (null != s) return (0, c.rU)(l.id, i.id, (0, u.g1)(s)), {
          content: ""
        }
      }
    },
    searchReplace: {
      match: i().anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
      action(e, t) {
        var n;
        let {
          isEdit: l,
          channel: i
        } = t;
        if (l) return;
        let s = h.Z.getLastEditableMessage(i.id);
        if (null == s || null == s.id) return {
          content: ""
        };
        let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
        r = r.replace(E, (e, t) => t), o = o.replace(E, (e, t) => t);
        let c = s.content.replace(r, o);
        return (null == c || "" === c) && 0 === s.attachments.length ? a.Z.deleteMessage(i.id, s.id) : e !== s.content && a.Z.editMessage(i.id, s.id, {
          content: c
        }), {
          content: ""
        }
      }
    },
    spoiler: {
      action: e => ({
        content: (0, m.XmY)(e).trim()
      })
    }
  };

function g(e, t, n, l) {
  return r.ZP.trackWithMetadata(m.rMx.SLASH_COMMAND_USED, {
    command: e
  }), t.action(n, l)
}

function f(e, t) {
  for (let l in p) {
    let i = p[l];
    if (null != i.match) {
      var n;
      if (null === (n = i.match.regex) || void 0 === n ? void 0 : n.test(e)) return g(l, i, e, t);
      continue
    }
    if (d.dN.getSetting() && "/" === e[0]) {
      let n = e.split(" ");
      if (l === n[0].slice(1) && null != i.action) return g(l, i, n.slice(1).join(" "), t)
    }
  }
}
Object.setPrototypeOf(p, null)