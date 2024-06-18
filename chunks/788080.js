"use strict";
e.d(E, {
  FB: function() {
    return O
  },
  Pu: function() {
    return C
  },
  Vt: function() {
    return c
  },
  XX: function() {
    return L
  },
  Zs: function() {
    return l
  },
  c7: function() {
    return s
  },
  eS: function() {
    return T
  },
  fr: function() {
    return o
  },
  ox: function() {
    return u
  }
}), e(724458);
var t = e(913527),
  I = e.n(t),
  _ = e(118139),
  N = e(531441),
  S = e(800530),
  i = e(981631),
  r = e(959517),
  A = e(689938);

function L(n) {
  return I()().to(I()(n))
}

function T(n) {
  var E, e;
  return (0, _.CO)(n.filename) || (0, _.NU)(n.filename) ? "".concat(r._j).concat(null !== (E = n.filename) && void 0 !== E ? E : ".png") : null !== (e = n.filename) && void 0 !== e ? e : ""
}

function o(n) {
  var E, e, t, I;
  if (null == n.fields) return;
  let _ = n.fields.reduce((n, E) => (n[E.rawName] = E.rawValue, n), {});
  return {
    header: null !== (E = _[S.I5.HEADER]) && void 0 !== E ? E : "",
    icon: _[S.I5.ICON_TYPE],
    body: null !== (e = _[S.I5.BODY]) && void 0 !== e ? e : "",
    ctas: (null !== (t = _[S.I5.CTAS]) && void 0 !== t ? t : "").split(",").filter(n => "" !== n),
    timestamp: parseFloat(null !== (I = _[S.I5.TIMESTAMP]) && void 0 !== I ? I : 0),
    theme: _[S.I5.THEME],
    learn_more_link: _[S.I5.LEARN_MORE_LINK],
    classification_id: _[S.I5.CLASSIFICATION_ID]
  }
}

function c(n) {
  if (n.type === N.lK.MESSAGE) return "" === n.content && 0 === n.attachments.length;
  return !0
}
let u = n => ({
    [S.bK.DIDNT_VIOLATE_POLICY]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [S.bK.TOO_STRICT_UNFAIR]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [S.bK.DONT_AGREE_PENALTY]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [S.bK.SOMETHING_ELSE]: A.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[n],
  s = n => null == n || 0 === n.length ? "" : 1 === n.length ? n.toUpperCase() : "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1));

function O(n) {
  return null != n && null != n.guild_metadata
}
let l = n => {
  if (n === i.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return A.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return A.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
};

function C(n) {
  let E = n.max_expiration_time;
  if (null == E) return null;
  try {
    return new Date(E)
  } catch {
    return null
  }
}