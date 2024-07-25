i.d(n, {
  Lb: function() {
return r;
  },
  ZF: function() {
return u;
  },
  gP: function() {
return s;
  },
  mh: function() {
return _;
  },
  sF: function() {
return l;
  },
  xp: function() {
return d;
  }
});
var t = i(470079),
  o = i(392711),
  a = i(626135),
  c = i(981631);

function r(e, n, i) {
  a.default.track(c.rMx.FORWARD_MESSAGE_STARTED, {
channel_id: e,
message_id: n,
source: i
  });
}

function l(e) {
  let {
channelId: n,
messageId: i,
numDestinationChanges: t,
numQueryChanges: o
  } = e;
  a.default.track(c.rMx.FORWARD_MESSAGE_CANCELLED, {
channel_id: n,
message_id: i,
num_destination_changes: t,
num_query_changes: o
  });
}

function s(e) {
  let {
channelId: n,
messageId: i,
hasError: t,
numDestinations: o,
numDestinationChanges: r,
numQueryChanges: l
  } = e;
  a.default.track(c.rMx.FORWARD_MESSAGE_SENT, {
channel_id: n,
message_id: i,
has_error: t,
num_destinations: o,
num_destination_changes: r,
num_query_changes: l
  });
}

function d(e, n) {
  a.default.track(c.rMx.FORWARD_COPY_LINK, {
channel_id: e,
message_id: n
  });
}

function u() {
  return t.useMemo(() => (0, o.once)((e, n, i) => {
a.default.track(c.rMx.FORWARD_ADD_RECIPIENT, {
  channel_id: e,
  message_id: n,
  has_query: i
});
  }), []);
}

function _() {
  return t.useMemo(() => (0, o.once)((e, n) => {
a.default.track(c.rMx.FORWARD_EDIT_SEARCH, {
  channel_id: e,
  message_id: n
});
  }), []);
}