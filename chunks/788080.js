"use strict";
n.r(t), n.d(t, {
  capitalizeText: function() {
    return u
  },
  getAppealSignalDisplayText: function() {
    return c
  },
  getAttachmentFilename: function() {
    return A
  },
  getClassificationExpiration: function() {
    return C
  },
  getClassificationRelativeIncidentTime: function() {
    return a
  },
  getRequestReviewErrorFromCode: function() {
    return L
  },
  isFlaggedContentEmpty: function() {
    return l
  },
  isGuildClassification: function() {
    return T
  },
  parseMessageEmbedForProps: function() {
    return N
  }
}), n("724458");
var i = n("913527"),
  E = n.n(i),
  I = n("118139"),
  S = n("531441"),
  r = n("800530"),
  _ = n("981631"),
  s = n("959517"),
  o = n("689938");

function a(e) {
  return E()().to(E()(e))
}

function A(e) {
  var t, n;
  return (0, I.isImageFile)(e.filename) || (0, I.isVideoFile)(e.filename) ? "".concat(s.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
}

function N(e) {
  var t, n, i, E;
  if (null == e.fields) return;
  let I = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
    header: null !== (t = I[r.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
    icon: I[r.SafetySystemNotificationEmbedKeys.ICON_TYPE],
    body: null !== (n = I[r.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
    ctas: (null !== (i = I[r.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
    timestamp: parseFloat(null !== (E = I[r.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== E ? E : 0),
    theme: I[r.SafetySystemNotificationEmbedKeys.THEME],
    learn_more_link: I[r.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
    classification_id: I[r.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
  }
}

function l(e) {
  if (e.type === S.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
  return !0
}
let c = e => ({
    [r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY]: o.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
    [r.AppealIngestionSignal.TOO_STRICT_UNFAIR]: o.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
    [r.AppealIngestionSignal.DONT_AGREE_PENALTY]: o.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
    [r.AppealIngestionSignal.SOMETHING_ELSE]: o.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  })[e],
  u = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function T(e) {
  return null != e && null != e.guild_metadata
}
let L = e => {
  if (e === _.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) return o.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return o.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
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