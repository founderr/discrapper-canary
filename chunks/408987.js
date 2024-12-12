var i = r(570140),
    a = r(496675),
    s = r(751189),
    o = r(981631);
n.Z = {
    async checkGuildTemplateDirty(e) {
        if (!a.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: e })) return;
        let n = await s.Z.loadTemplatesForGuild(e);
        n.body.length > 0 &&
            i.Z.dispatch({
                type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH',
                guildTemplate: n.body[0]
            });
    },
    hideGuildTemplateDirtyTooltip(e) {
        i.Z.dispatch({
            type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE',
            guildId: e
        });
    },
    hideGuildTemplatePromotionTooltip() {
        i.Z.dispatch({ type: 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE' });
    }
};
