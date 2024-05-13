"use strict";
n.r(t), n.d(t, {
  capitalizeText: function() {
    return N
  },
  getAppealSignalDisplayText: function() {
    return A
  },
  getAttachmentFilename: function() {
    return S
  },
  getClassificationExpiration: function() {
    return C
  },
  getClassificationRelativeIncidentTime: function() {
    return I
  },
  getRequestReviewErrorFromCode: function() {
    return L
  },
  isFlaggedContentEmpty: function() {
    return u
  },
  isGuildClassification: function() {
    return T
  },
  parseMessageEmbedForProps: function() {
    return _
  }
}), n("724458");
var i = n("913527"),
  E = n.n(i),
  r = n("118139"),
  o = n("531441"),
  l = n("800530"),
  s = n("981631"),
  c = n("959517"),
  a = n("689938");

function I(e) {
  return E()().to(E()(e))
}

function S(e) {
  var t, n;
  return (0, r.isImageFile)(e.filename) || (0, r.isVideoFile)(e.filename) ? "".concat(c.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function _(e) {
  var t, n, i, E;
  if (null == e.fields) return;
  let r = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null !== (t = r[l.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
    icon: r[l.SafetySystemNotificationEmbedKeys.ICON_TYPE],
    body: null !== (n = r[l.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
    ctas: (null !== (i = r[l.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null !== (E = r[l.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== E ? E : 0),
    theme: r[l.SafetySystemNotificationEmbedKeys.THEME],
    learn_more_link: r[l.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
    classification_id: r[l.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
  }
}

function u(e) {
  if (e.type === o.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
let A = e => ({
    [l.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: a.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [l.AppealIngestionSignal.TOO_STRICT_UNFAIR]: a.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [l.AppealIngestionSignal.DONT_AGREE_PENALTY]: a.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [l.AppealIngestionSignal.SOMETHING_ELSE]: a.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[e],
  N = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function T(e) {
  return null != e && null != e.guild_metadata
}
let L = e => {
  if (e === s.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) return a.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return a.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
};

function C(e) {
  let t = e.max_expiration_time;
  if (null == t) return null;
  try {
    return new Date(t)
  } catch {
    return null
  }
}