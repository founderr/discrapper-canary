"use strict";
a.r(t);
var n = a("392711"),
  s = a.n(n),
  l = a("699516"),
  i = a("800599"),
  r = a("594174"),
  o = a("914946"),
  u = a("981631");
t.default = {
  [u.RPCCommands.GET_RELATIONSHIPS]: {
    scope: u.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {
      let e = {
        ...l.default.getRelationships()
      };
      return i.default.getUserAffinitiesUserIds().forEach(t => {
        null == e[t] && null != r.default.getUser(t) && (e[t] = u.RelationshipTypes.IMPLICIT)
      }), {
        relationships: s().map(e, (e, t) => (0, o.transformRelationship)(e, t))
      }
    }
  }
}