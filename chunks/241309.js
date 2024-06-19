n.d(t, {
  Gx: function() {
    return d
  },
  Op: function() {
    return h
  },
  T4: function() {
    return u
  },
  V_: function() {
    return c
  }
});
var l, i, s = n(539573),
  a = n(689938);

function r(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function o(e) {
  return r(0, e)
}

function c() {
  return r(0, a.Z.Messages.FORM_THREAD_NAME_REQUIRED_ERROR)
}

function u() {
  return r(0, a.Z.Messages.FORM_THREAD_STARTER_MESSAGE_REQUIRED_ERROR)
}

function d(e, t) {
  return r(1, (0, s.$q)(e, null == t ? void 0 : t.id))
}

function h(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 ? null : null !== (n = e.message) && void 0 !== n ? n : null
}(l = i || (i = {}))[l.EmptyContent = 0] = "EmptyContent", l[l.AutomodViolation = 1] = "AutomodViolation"