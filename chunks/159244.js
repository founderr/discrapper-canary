var i = n(442837),
    s = n(699516),
    a = n(594174),
    l = n(981631);
t.Z = (e) => {
    let t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(e.id)),
        r = e.isNonUserBot();
    return e.id !== (null == t ? void 0 : t.id) && n !== l.OGo.BLOCKED && !r;
};
