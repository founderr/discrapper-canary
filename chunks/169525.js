"use strict";
n.d(t, {
  As: function() {
    return O
  },
  BP: function() {
    return N
  },
  MC: function() {
    return R
  },
  dn: function() {
    return A
  },
  hL: function() {
    return p
  },
  lK: function() {
    return m
  },
  wk: function() {
    return i
  }
}), n(789020), n(627341);
var i, r, s = n(278074),
  o = n(399606),
  a = n(432877),
  l = n(163268),
  u = n(25610),
  _ = n(368844),
  c = n(768494),
  d = n(695346),
  E = n(375954),
  I = n(496675),
  T = n(630388),
  h = n(255269),
  f = n(981631),
  S = n(689938);
(r = i || (i = {})).SPOILER = "spoiler", r.EXPLICIT_CONTENT = "explicit_content", r.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
let A = (e, t) => {
    let {
      spoiler: n,
      flags: i = 0,
      content_scan_version: r
    } = e;
    if (t) {
      if ((0, l.Sv)(r)) return "potential_explicit_content";
      if ((0, T.yE)(i, f.J0y.CONTAINS_EXPLICIT_MEDIA) || a.ZP.get("obscure_blur_effect_enabled")) return "explicit_content"
    }
    return n || (0, T.yE)(i, f.J0y.IS_SPOILER) ? "spoiler" : null
  },
  N = (e, t, n, i, r) => {
    let {
      flags: s = 0,
      contentScanVersion: o
    } = e, u = E.Z.getMessage(t, n);
    if (null == u) return null;
    if (r) {
      if (!u.author.bot && (0, l.Sv)(o)) return "potential_explicit_content";
      if ((0, T.yE)(s, f.xPJ.CONTAINS_EXPLICIT_MEDIA) || a.ZP.get("obscure_blur_effect_enabled")) return "explicit_content"
    }
    return i ? "spoiler" : null
  },
  m = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      {
        contentScanMetadata: i
      } = e;
    if (t) {
      if ((0, l.oh)(i)) return "potential_explicit_content";
      let {
        contentScanFlags: e
      } = i;
      if ((0, T.yE)(e, c.Cb.EXPLICIT) || a.ZP.get("obscure_blur_effect_enabled")) return "explicit_content"
    }
    return n ? "spoiler" : null
  };

function O(e, t, n) {
  if (null == e) return [!1, void 0];
  if (n && (0, l.Sv)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
  let i = function(e) {
    switch (e) {
      case _.Ah.EMBED:
        return l.lJ.Embed;
      case _.Ah.ATTACHMENT:
        return l.lJ.Attachment;
      default:
        return
    }
  }(e.type);
  return null != i && (0, l.KP)({
    type: i,
    media: e
  }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
}

function p(e) {
  let {
    channel: t,
    media: n
  } = e, i = (0, o.e7)([I.Z], () => null != t && I.Z.can(f.Plq.MANAGE_MESSAGES, t)), r = d.cC.useSetting(), s = (0, u.m)();
  return O(n, !(0, h.Z)(r, i), s)
}
let R = e => (0, s.EQ)(e).with("explicit_content", () => S.Z.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => S.Z.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)