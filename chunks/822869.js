n.d(t, {
  Lb: function() {
return l;
  },
  ZF: function() {
return u;
  },
  gP: function() {
return c;
  },
  mh: function() {
return _;
  },
  sF: function() {
return o;
  },
  xp: function() {
return d;
  }
});
var i = n(470079),
  a = n(392711),
  s = n(626135),
  r = n(981631);

function l(e, t, n) {
  s.default.track(r.rMx.FORWARD_MESSAGE_STARTED, {
channel_id: e,
message_id: t,
source: n
  });
}

function o(e) {
  let {
channelId: t,
messageId: n,
numDestinationChanges: i,
numQueryChanges: a
  } = e;
  s.default.track(r.rMx.FORWARD_MESSAGE_CANCELLED, {
channel_id: t,
message_id: n,
num_destination_changes: i,
num_query_changes: a
  });
}

function c(e) {
  let {
channelId: t,
messageId: n,
hasError: i,
numDestinations: a,
numDestinationChanges: l,
numQueryChanges: o
  } = e;
  s.default.track(r.rMx.FORWARD_MESSAGE_SENT, {
channel_id: t,
message_id: n,
has_error: i,
num_destinations: a,
num_destination_changes: l,
num_query_changes: o
  });
}

function d(e, t) {
  s.default.track(r.rMx.FORWARD_COPY_LINK, {
channel_id: e,
message_id: t
  });
}

function u() {
  return i.useMemo(() => (0, a.once)((e, t, n) => {
s.default.track(r.rMx.FORWARD_ADD_RECIPIENT, {
  channel_id: e,
  message_id: t,
  has_query: n
});
  }), []);
}

function _() {
  return i.useMemo(() => (0, a.once)((e, t) => {
s.default.track(r.rMx.FORWARD_EDIT_SEARCH, {
  channel_id: e,
  message_id: t
});
  }), []);
}