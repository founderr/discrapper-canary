n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(239091),
    s = n(287734),
    o = n(364640),
    l = n(754688),
    u = n(336197),
    c = n(124072),
    d = n(692629),
    f = n(131704),
    _ = n(592125),
    p = n(430824),
    h = n(900849),
    m = n(746878),
    g = n(981631);
async function E(e, t, n) {
    if (null == t) return;
    if (
        (o.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: t,
            messageId: n
        }),
        null != e)
    ) {
        let n = p.Z.getGuild(e);
        if ((null == n ? void 0 : n.joinedAt) == null)
            try {
                await h.Ub(e, {}, { channelId: t });
                return;
            } catch {}
    }
    let r = _.Z.getChannel(t);
    if (null != r && null == n && (0, f.bw)(r.type) && (0, l.YO)(r)) {
        s.default.selectVoiceChannel(r.id);
        return;
    }
    (0, u.Z)(g.Z5c.CHANNEL(e, t, n));
}
function v(e) {
    return {
        react(t, s, o) {
            let l = _.Z.getChannel(t.channelId),
                u = o.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && (null == n || n.stopPropagation()), E(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.closeAllModals)();
                      },
                f =
                    o.noStyleAndInteraction || null == t.channelId || (null == l && null == t.originalLink)
                        ? g.dG4
                        : (e) => {
                              (0, a.jW)(e, async () => {
                                  let { default: e } = await n.e('9573').then(n.bind(n, 546649));
                                  return (n) => {
                                      var i;
                                      return (0, r.jsx)(e, {
                                          ...n,
                                          channel: l,
                                          channelId: null !== (i = null == l ? void 0 : l.id) && void 0 !== i ? i : t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId
                                      });
                                  };
                              });
                          };
            return (0, r.jsxs)(
                c.Z,
                {
                    role: 'link',
                    onClick: u,
                    onContextMenu: f,
                    className: 'channelMention',
                    children: [null != t.inContent ? s(t.inContent, o) : null, null != t.inContent ? (0, r.jsx)(d.Z, {}) : null, (0, m.S)(t, s, o)]
                },
                o.key
            );
        }
    };
}
