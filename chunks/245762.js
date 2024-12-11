var i = n(570140);
t.ZP = {
    setPendingMemberVerificationRules: function (e, t) {
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_SET_PENDING_FORM_FIELDS',
            guildId: e,
            formFields: t
        });
    },
    reset: function () {
        i.Z.dispatch({ type: 'GUILD_SETTINGS_JOIN_RULES_RESET' });
    }
};
