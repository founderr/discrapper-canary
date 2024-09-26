n.d(t, {
    Z: function () {
        return V;
    }
});
var r = n(724458);
var i = n(47120);
var a = n(757143);
var o = n(773603);
var s = n(315314);
var l = n(610138);
var u = n(216116);
var c = n(78328);
var d = n(815648);
var _ = n(653041);
var E = n(392711),
    f = n.n(E),
    h = n(302454),
    p = n.n(h),
    m = n(675478),
    I = n(131704),
    T = n(601964),
    g = n(709302),
    S = n(592125),
    A = n(580005),
    v = n(984933),
    N = n(699516),
    O = n(594174),
    R = n(483360),
    C = n(892880),
    y = n(591759),
    L = n(279779),
    b = n(620490),
    D = n(727785),
    M = n(981631);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let U = 100,
    w = 1000,
    x = 0.2,
    G = 0.1,
    k = Object.freeze({}),
    B = 300;
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return w * e * (null != t ? t : 1);
}
function Z(e, t) {
    var n, r;
    if (!t.frecencyBoosters) return {};
    let i = A.Z.getFrequentlyWithoutFetchingLatest(),
        a = i.reduce((e, t) => {
            let { id: n } = t,
                r = A.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        o = [];
    switch (e) {
        case D.h8.GUILD:
            o = i.filter((e) => e instanceof T.ZP);
            break;
        case D.h8.USER:
            o = i.filter((e) => e instanceof I.Sf && e.type === M.d4z.DM);
            break;
        case D.h8.GROUP_DM:
            o = i.filter((e) => e instanceof I.Sf && e.isMultiUserDM());
            break;
        case D.h8.TEXT_CHANNEL:
            o = i.filter((e) => e instanceof I.Sf && (0, I.r8)(e.type));
            break;
        case D.h8.VOICE_CHANNEL:
            o = i.filter((e) => e instanceof I.Sf && e.isGuildVocal());
    }
    let s = {};
    for (let t of o) {
        let { id: n } = t,
            r = A.Z.getScoreWithoutFetchingLatest(n);
        if (e === D.h8.USER && t instanceof I.mn) {
            if (t.type === M.d4z.DM) s[(n = t.getRecipientId())] = 1 + r / a;
            else if (t.type === M.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) s[n] = 1 + (r / a) * (1 / e);
            }
        } else s[n] = 1 + r / a;
    }
    for (let e of N.Z.getFriendIDs()) s[e] = (null !== (n = s[e]) && void 0 !== n ? n : 1) + x;
    for (let e of S.Z.getDMUserIds()) s[e] = (null !== (r = s[e]) && void 0 !== r ? r : 1) + G;
    return s;
}
class V {
    createSearchContext() {
        null == this.userSearchContext && (this.userSearchContext = L.Z.getSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        (this._limit = e), null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null), (this._userResults = this._include(D.h8.USER) ? this._userResults : []), (this._groupDMResults = this._include(D.h8.GROUP_DM) ? this._groupDMResults : []), (this._textChannelResults = this._include(D.h8.TEXT_CHANNEL) ? this._textChannelResults : []), (this._voiceChannelResults = this._include(D.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []), (this._guildResults = this._include(D.h8.GUILD) ? this._guildResults : []), (this._applicationResults = this._include(D.h8.APPLICATION) ? this._applicationResults : []), (this._linkResults = this._include(D.h8.LINK) ? this._linkResults : []), (this._inAppNavigations = this._include(D.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(D.h8.USER);
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t
            ? (this.options = {
                  ...this.options,
                  ...e
              })
            : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith('user:') ? e.replace('user:', '') : ''))
                      .filter((e) => '' !== e))
                : (this._userBlacklist = null);
    }
    search(e, t) {
        if (((this.query = e), '' === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? m.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit), (this._groupDMResults = this.queryGroupDMs(e, this._limit)), (this._textChannelResults = this.queryTextChannels(e, this._limit)), (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)), (this._guildResults = this.queryGuilds(e, this._limit)), (this._applicationResults = this.queryApplications(e, this._limit));
            (this._linkResults = this.queryLink(e, this._limit)), (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, B))) : this.updateAllResults();
        });
    }
    clear() {
        let { userSearchContext: e } = this;
        null != e && e.clearQuery(), (this.results = []), (this._userResults = []), (this._groupDMResults = []), (this._textChannelResults = []), (this._voiceChannelResults = []), (this._guildResults = []), (this._applicationResults = []), (this._linkResults = []), (this._inAppNavigations = []);
    }
    clean() {
        this.clear(), this.destroy(), (this.query = ''), this.updateAllResults();
    }
    pause() {
        var e, t;
        null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t);
    }
    resume() {
        var e, t;
        null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t);
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, t) {
        if (!this._include(D.h8.TEXT_CHANNEL)) return [];
        let n = Z(D.h8.TEXT_CHANNEL, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('channel:'.concat(e.id)) : void 0;
        return R.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(D.h8.VOICE_CHANNEL)) return [];
        let { voiceChannelGuildFilter: n } = this.options,
            r = Z(D.h8.VOICE_CHANNEL, this.options);
        return R.ZP.queryChannels({
            query: e,
            guildId: n,
            limit: t,
            fuzzy: !0,
            type: v.Zb,
            boosters: r
        });
    }
    queryGuilds(e, t) {
        if (!this._include(D.h8.GUILD)) return [];
        let n = Z(D.h8.GUILD, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('guild:'.concat(e.id)) : void 0;
        return R.ZP.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(D.h8.USER)) return;
        let { userFilters: i } = this.options;
        void 0 !== t && C.Z.requestMembers(t, e, 100), r.setLimit(n), r.setQuery(e, i, this._userBlacklist, Z(D.h8.USER, this.options));
    }
    queryGroupDMs(e, t) {
        if (!this._include(D.h8.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = Z(D.h8.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has('channel:'.concat(e.id)) : void 0;
        return R.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: r
        });
    }
    queryApplications(e, t) {
        return this._include(D.h8.APPLICATION)
            ? R.ZP.queryApplications({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(D.h8.LINK)) return [];
        let r = p().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: i, hostname: a = '', host: o } = n,
            s = y.Z.isDiscordHostname(a) || window.location.host === o;
        return null !== i && s && y.Z.isAppRoute(i)
            ? [
                  {
                      type: D.h8.LINK,
                      record: g.Z.fromPath(i),
                      score: 1
                  }
              ]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(D.h8.IN_APP_NAVIGATION)
            ? R.ZP.queryInAppNavigations({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    constructor(e, t, n = U, r = k) {
        P(this, 'query', ''),
            P(this, 'options', k),
            P(this, 'results', []),
            P(this, '_userResults', []),
            P(this, '_groupDMResults', []),
            P(this, '_textChannelResults', []),
            P(this, '_voiceChannelResults', []),
            P(this, '_guildResults', []),
            P(this, '_applicationResults', []),
            P(this, '_linkResults', []),
            P(this, '_inAppNavigations', []),
            P(this, '_asyncTimeout', void 0),
            P(this, 'userSearchContext', void 0),
            P(this, 'onResultsChange', void 0),
            P(this, 'resultTypes', void 0),
            P(this, '_userBlacklist', null),
            P(this, '_limit', void 0),
            P(this, 'parseUserResults', (e) => {
                let { results: t } = e;
                if (!!this._include(D.h8.USER)) {
                    for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
                        let t = O.default.getUser(e);
                        if (null != t)
                            this._userResults.push({
                                type: D.h8.USER,
                                record: t,
                                score: F(n),
                                comparator: null != r ? r : void 0
                            });
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults();
                }
            }),
            P(this, 'updateAllResults', () => {
                clearTimeout(this._asyncTimeout),
                    (this.results = f()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations])
                        .uniqBy((e) => ''.concat(e.type, '-').concat(e.record.id))
                        .sort(b.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
}
