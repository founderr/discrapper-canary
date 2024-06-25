"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(239091),
  o = n(287734),
  a = n(364640),
  l = n(754688),
  u = n(336197),
  _ = n(124072),
  c = n(891984),
  d = n(131704),
  E = n(592125),
  I = n(430824),
  T = n(900849),
  h = n(746878),
  f = n(981631);
async function S(e, t, n) {
  if (null == t) return;
  if (a.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: t,
      messageId: n
    }), null != e) {
    let n = I.Z.getGuild(e);
    if ((null == n ? void 0 : n.joinedAt) == null) try {
      await T.Ub(e, {}, {
        channelId: t
      });
      return
    } catch {}
  }
  let i = E.Z.getChannel(t);
  if (null != i && null == n && (0, d.bw)(i.type) && (0, l.YO)(i)) {
    o.default.selectVoiceChannel(i.id);
    return
  }(0, u.Z)(f.Z5c.CHANNEL(e, t, n))
}

function A(e) {
  return {
    react(t, o, a) {
      let l = E.Z.getChannel(t.channelId),
        u = a.noStyleAndInteraction ? void 0 : n => {
          e.shouldStopPropagation && (null == n || n.stopPropagation()), S(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, r.closeAllModals)()
        },
        d = a.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? f.dG4 : e => {
          (0, s.jW)(e, async () => {
            let {
              default: e
            } = await n.e("9573").then(n.bind(n, 546649));
            return n => {
              var r;
              return (0, i.jsx)(e, {
                ...n,
                channel: l,
                channelId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : t.channelId,
                originalLink: t.originalLink,
                messageId: t.messageId
              })
            }
          })
        };
      return (0, i.jsxs)(_.Z, {
        role: "link",
        onClick: u,
        onContextMenu: d,
        className: "channelMention",
        children: [null != t.inContent ? o(t.inContent, a) : null, null != t.inContent ? (0, i.jsx)(c.Z, {}) : null, (0, h.S)(t, o, a)]
      }, a.key)
    }
  }
}