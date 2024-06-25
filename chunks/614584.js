n.d(t, {
  Z: function() {
    return Z
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(25209),
  r = n(39154),
  o = n(35125),
  c = n(905405),
  u = n(628238),
  d = n(499401),
  h = n(693912),
  m = n(869765),
  E = n(699516),
  p = n(512665),
  g = n(352736),
  f = n(937889),
  C = n(739566),
  _ = n(507418),
  I = n(348238),
  x = n(981631),
  T = n(689938);
let N = i.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: N,
    channel: Z,
    compact: S = !1,
    referencedUsernameProfile: v,
    referencedAvatarProfile: A,
    setPopout: M
  } = e, R = N.state === m.Y.LOADED ? N.message : void 0, j = (0, C.Uj)(R), L = (0, c.p)(), O = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), P = i.useMemo(() => {
    if (null == R) return null;
    let e = (0, r.Z)(R);
    if (e.type === x.uaV.USER_JOIN) {
      let t = g.Z.getWelcomeMessageKind(Z.guild_id);
      return (0, a.Rp)(g.Z.getSystemMessageUserJoin(e.id, t).astFormat({
        username: null != j ? j.nick : e.author.username,
        usernameHook: e => e
      }))
    }
    if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, o.PA)({
      username: null != j ? j.nick : e.author.username,
      guildId: null == Z ? void 0 : Z.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, d.Y)({
      application: null == e ? void 0 : e.application,
      username: null == j ? void 0 : j.nick
    }));
    else if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, h.B2)({
      application: null == e ? void 0 : e.application,
      username: null == j ? void 0 : j.nick
    }));
    else if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, h.hj)({
      application: null == e ? void 0 : e.application,
      username: null == j ? void 0 : j.nick
    }));
    else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : T.Z.Messages.DEADCHAT_PROMPT_1;
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: !0,
          allowLinks: !0,
          shouldFilterKeywords: L
        },
        n = e.isFirstMessageInForumPost(Z) ? {
          ...t,
          noStyleAndInteraction: !0,
          allowHeading: !0,
          allowList: !0
        } : {
          ...t,
          formatInline: !0,
          allowHeading: O,
          allowList: O
        };
      return (0, f.ZP)(e, n).content
    }
    return null
  }, [R, j, Z, O, L]), y = (0, s.e7)([E.Z], () => null != R && E.Z.isBlockedForMessage(R), [R]), b = (0, I.wq)(null == R ? void 0 : R.author.id, Z.id), D = (0, I.$3)(n, R, y), U = (0, I.Wl)(R, Z, v, M), k = (0, I.rY)(A, M), w = i.useCallback(() => M({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [M]), H = (0, C.Uj)(n);
  return (0, l.jsx)(p.Z, {
    repliedAuthor: j,
    baseMessage: n,
    channel: Z,
    baseAuthor: H,
    referencedMessage: N,
    content: P,
    compact: S,
    isReplyAuthorBlocked: y,
    showAvatarPopout: A,
    showUsernamePopout: v,
    renderPopout: _.Z,
    onClickAvatar: k,
    onClickUsername: U,
    onClickReply: D,
    onContextMenu: b,
    onPopoutRequestClose: w
  })
});

function Z(e, t, n, i, s) {
  let {
    message: a,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: c,
    referencedAvatarProfile: u
  } = n, d = a.type === x.uaV.REPLY && null != i && (0, l.jsx)(N, {
    baseMessage: a,
    replyReference: i,
    referencedMessage: s,
    channel: r,
    compact: o,
    setPopout: t,
    referencedUsernameProfile: c,
    referencedAvatarProfile: u
  });
  return (0, l.jsx)(l.Fragment, {
    children: d
  })
}