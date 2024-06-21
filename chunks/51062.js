"use strict";
n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var i = n(470079),
  r = n(718922),
  s = n(442837),
  o = n(456007),
  a = n(998698),
  l = n(541716),
  u = n(797610),
  _ = n(271383),
  c = n(496675),
  d = n(246946),
  E = n(594174),
  I = n(106824),
  T = n(691841),
  h = n(981631),
  S = n(377668),
  f = n(185923);

function N(e, t, n) {
  var N, A, m, O, R, p, g;
  let {
    channel: C,
    type: v
  } = e, [L, D] = i.useState(() => (0, I.P)()), M = (0, r.Z)(), P = (0, s.e7)([_.ZP], () => {
    if (null != e.guild) {
      var t;
      return null != _.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.fL)
    }
    return !1
  }), y = (0, u.Ib)(e.guild, e.channel) && !P && !(0, u.g0)(e.guild), U = (0, s.e7)([_.ZP, E.default], () => {
    var e, t;
    let n = E.default.getCurrentUser();
    return null !== (t = null != C.guild_id && null != n ? null === (e = _.ZP.getMember(C.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canMentionEveryone: b,
    hidePersonalInformation: G
  } = (0, s.cj)([c.Z, d.Z], () => ({
    canMentionEveryone: C.isPrivate() || U || v === l.I.RULES_INPUT || c.Z.can(h.Plq.MENTION_EVERYONE, C),
    hidePersonalInformation: d.Z.hidePersonalInformation
  }), [C, v, U]), {
    activeCommand: w,
    activeCommandOption: B
  } = (0, s.cj)([a.Z], () => ({
    activeCommand: a.Z.getActiveCommand(C.id),
    activeCommandOption: a.Z.getActiveOption(C.id)
  })), k = (0, T.Z)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: L,
    onFocus: e => Z.setSelectedIndex(e)
  }), x = null === (N = e.editorRef.current) || void 0 === N ? void 0 : N.getCurrentWord(), V = {
    ...e,
    navigator: k,
    activeCommand: w,
    activeCommandOption: B,
    canMentionUsers: null !== (R = null === (A = v.users) || void 0 === A ? void 0 : A.allowMentioning) && void 0 !== R && R,
    canMentionEveryone: b,
    canMentionClyde: y,
    hidePersonalInformation: G,
    hideMentionDescription: v === l.I.RULES_INPUT,
    emojiIntention: v === l.I.RULES_INPUT ? f.Hz.COMMUNITY_CONTENT : f.Hz.CHAT,
    currentWord: null !== (p = null == x ? void 0 : x.word) && void 0 !== p ? p : "",
    currentWordIsAtStart: (null == x ? void 0 : x.isAtStart) === !0,
    optionText: null != B ? (0, o.KF)({
      [B.name]: null !== (g = null === (m = e.editorRef.current) || void 0 === m ? void 0 : m.getCurrentCommandOptionValue()) && void 0 !== g ? g : []
    }, B.name) : ""
  }, [Z] = i.useState(() => new I.Z(V));
  return i.useEffect(() => {
    Z.updateProps(V)
  }), i.useImperativeHandle(t, () => Z, [Z]), i.useEffect(() => {
    let e = e => D(e);
    return Z.on("change", e), Z.on("update", M), () => {
      Z.off("change", e), Z.off("update", M)
    }
  }, [M, Z]), i.useEffect(() => {
    var e;
    let t = null === (e = L.query) || void 0 === e ? void 0 : e.typeInfo.stores;
    if (null != t) {
      let e = () => Z.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [Z, null === (O = L.query) || void 0 === O ? void 0 : O.typeInfo]), [L, Z, k]
}