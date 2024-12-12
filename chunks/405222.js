t.d(n, {
    x: function () {
        return l;
    }
});
function l(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon_hash,
        onlineCount: 1,
        memberCount: e.member_count,
        brandColorPrimary: e.brand_color_primary
    };
}
