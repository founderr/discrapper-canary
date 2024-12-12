var i = r(703656),
    a = r(981631);
n.Z = {
    onOpenHubInvite(e) {
        let { guild: n } = e;
        null != n && (0, i.uL)(a.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(n.id, e.code));
    }
};
