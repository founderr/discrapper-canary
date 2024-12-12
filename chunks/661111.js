var i = r(544891),
    a = r(570140),
    s = r(802098),
    o = r(695346),
    l = r(981631),
    u = r(596401);
function c() {
    let e = new Date().getMinutes();
    return 'x='.concat(Math.floor(e / 5));
}
n.Z = {
    lockChangeLog(e) {
        a.Z.dispatch({
            type: 'CHANGE_LOG_LOCK',
            key: e
        });
    },
    unlockChangeLog(e) {
        a.Z.dispatch({
            type: 'CHANGE_LOG_UNLOCK',
            key: e
        });
    },
    markChangelogAsSeen(e, n) {
        a.Z.dispatch({
            type: 'CHANGE_LOG_MARK_SEEN',
            changelogId: e,
            changelogDate: n
        }),
            o.l4.updateSetting(e);
    },
    setChangelogOverride(e) {
        a.Z.dispatch({
            type: 'CHANGE_LOG_SET_OVERRIDE',
            id: e
        }),
            null != e && this.sendChangelogMessage(e);
    },
    sendChangelogMessage(e) {
        i.tn.post({
            url: l.ANM.CHANGELOG_MESSAGES,
            body: { changelog_id: e },
            rejectWithError: !0
        });
    },
    fetchChangelogConfig() {
        let e = u.Vw.DESKTOP;
        return i.tn.get({
            url: 'https://cdn.discordapp.com/changelogs/config_'.concat(e, '.json?').concat(c()),
            rejectWithError: !0
        });
    },
    async fetchChangelog(e, n) {
        if ((arguments.length > 2 && void 0 !== arguments[2] && arguments[2], null != s.Z.getChangelog(e, n))) return null;
        let r = u.Vw.DESKTOP;
        try {
            let s = await i.tn.get({
                url: 'https://cdn.discordapp.com/changelogs/'.concat(r, '/').concat(e, '/').concat(n, '.json?').concat(c()),
                rejectWithError: !0
            });
            return (
                a.Z.dispatch({
                    type: 'CHANGE_LOG_FETCH_SUCCESS',
                    id: e,
                    changelog: s.body
                }),
                s.body
            );
        } catch {
            if (
                (a.Z.dispatch({
                    type: 'CHANGE_LOG_FETCH_FAILED',
                    id: e,
                    locale: n
                }),
                'en-US' !== n)
            )
                return await this.fetchChangelog(e, 'en-US');
            return null;
        }
    }
};
