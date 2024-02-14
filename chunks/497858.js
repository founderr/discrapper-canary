"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("884691"),
  i = n("775560"),
  a = n("446674"),
  s = n("118200"),
  r = n("383018"),
  o = n("850391"),
  u = n("980215"),
  d = n("26989"),
  c = n("957255"),
  f = n("102985"),
  m = n("697218"),
  p = n("234246"),
  h = n("689299"),
  E = n("49111"),
  g = n("680894"),
  S = n("958706");

function C(e, t, n) {
  var C, T, v, I, _, N, A;
  let {
    channel: y,
    type: x
  } = e, [O, R] = l.useState(() => (0, p.createInitialState)()), M = (0, i.useForceUpdate)(), L = (0, a.useStateFromStores)([d.default], () => {
    if (null != e.guild) {
      var t;
      return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, g.CLYDE_AI_USER_ID)
    }
    return !1
  }), P = (0, u.useClydeEnabled)(e.guild, e.channel) && !L && !(0, u.canUseCustomClydeProfiles)(e.guild), b = (0, a.useStateFromStores)([d.default, m.default], () => {
    var e, t;
    let n = m.default.getCurrentUser();
    return null !== (t = null != y.guild_id && null != n ? null === (e = d.default.getMember(y.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canMentionEveryone: j,
    hidePersonalInformation: U
  } = (0, a.useStateFromStoresObject)([c.default, f.default], () => {
    let e = y.isPrivate();
    return {
      canMentionEveryone: e || b || x === o.ChatInputTypes.RULES_INPUT || c.default.can(E.Permissions.MENTION_EVERYONE, y),
      hidePersonalInformation: f.default.hidePersonalInformation
    }
  }, [y, x, b]), {
    activeCommand: D,
    activeCommandOption: k
  } = (0, a.useStateFromStoresObject)([r.default], () => ({
    activeCommand: r.default.getActiveCommand(y.id),
    activeCommandOption: r.default.getActiveOption(y.id)
  })), w = (0, h.default)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: O,
    onFocus: e => G.setSelectedIndex(e)
  }), F = null === (C = e.editorRef.current) || void 0 === C ? void 0 : C.getCurrentWord(), B = {
    ...e,
    navigator: w,
    activeCommand: D,
    activeCommandOption: k,
    canMentionUsers: null !== (_ = null === (T = x.users) || void 0 === T ? void 0 : T.allowMentioning) && void 0 !== _ && _,
    canMentionEveryone: j,
    canMentionClyde: P,
    hidePersonalInformation: U,
    hideMentionDescription: x === o.ChatInputTypes.RULES_INPUT,
    emojiIntention: x === o.ChatInputTypes.RULES_INPUT ? S.EmojiIntention.COMMUNITY_CONTENT : S.EmojiIntention.CHAT,
    currentWord: null !== (N = null == F ? void 0 : F.word) && void 0 !== N ? N : "",
    currentWordIsAtStart: (null == F ? void 0 : F.isAtStart) === !0,
    optionText: null != k ? (0, s.getString)({
      [k.name]: null !== (A = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentCommandOptionValue()) && void 0 !== A ? A : []
    }, k.name) : ""
  }, [G] = l.useState(() => new p.default(B));
  return l.useEffect(() => {
    G.updateProps(B)
  }), l.useImperativeHandle(t, () => G, [G]), l.useEffect(() => {
    let e = e => R(e);
    return G.on("change", e), G.on("update", M), () => {
      G.off("change", e), G.off("update", M)
    }
  }, [M, G]), l.useEffect(() => {
    var e;
    let t = null === (e = O.query) || void 0 === e ? void 0 : e.typeInfo.stores;
    if (null != t) {
      let e = () => G.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [G, null === (I = O.query) || void 0 === I ? void 0 : I.typeInfo]), [O, G, w]
}