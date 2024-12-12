r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(58346);
function a(e) {
    var n;
    return {
        code: e.code,
        state: i.Rj.RESOLVED,
        name: e.name,
        description: null !== (n = e.description) && void 0 !== n ? n : '',
        creatorId: e.creator_id,
        creator: e.creator,
        createdAt: e.created_at,
        updatedAt: e.updated_at,
        sourceGuildId: e.source_guild_id,
        serializedSourceGuild: e.serialized_source_guild,
        usageCount: e.usage_count,
        isDirty: e.is_dirty
    };
}
