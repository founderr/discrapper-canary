n.d(t, {
  D: function() {
    return i
  }
});
var l = n(689938);

function i(e) {
  if (null == e) return null;
  switch (e.type) {
    case "embedded-activities":
    case "event":
      return {
        subtitle: e.name
      };
    case "go-live":
      return {
        subtitle: l.Z.Messages.GO_LIVE_SUBTITLE
      }
  }
  return null
}