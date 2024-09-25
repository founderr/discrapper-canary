var r = n(490983),
    i = n(689938);
let a = () => ({
        test: 'everyone',
        text: '@everyone',
        description: i.Z.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
    }),
    o = () => ({
        test: 'here',
        text: '@here',
        description: i.Z.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
    }),
    s = () => r.Z.launchableApplicationViewItems;
t.Z = {
    MENTION_EVERYONE: a,
    MENTION_HERE: o,
    LAUNCHABLE_APPLICATIONS: s
};
