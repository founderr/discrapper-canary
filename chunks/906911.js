"use strict";
n.r(t);
var a = n("392711"),
  s = n.n(a),
  i = n("699516"),
  l = n("800599"),
  r = n("594174"),
  o = n("914946"),
  u = n("981631");
t.default = {
  [u.RPCCommands.GET_RELATIONSHIPS]: {
    scope: u.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {
      let e = {
        ...i.default.getRelationships()
      };
      return l.default.getUserAffinitiesUserIds().forEach(t => {
        null == e[t] && null != r.default.getUser(t) && (e[t] = u.RelationshipTypes.IMPLICIT)
      }), {
        relationships: s().map(e, (e, t) => (0, o.transformRelationship)(e, t))
      }
    }
  }
}