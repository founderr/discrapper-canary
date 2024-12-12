function i(e, n, r) {
    let i = new r.constructor(r.toJS());
    return (i.position_ = n.order), null != n.nickname && (i.name = n.nickname), null != n.parentId && n.parentId in e && (i.parent_id = n.parentId), i;
}
r.d(n, {
    r: function () {
        return i;
    }
});
