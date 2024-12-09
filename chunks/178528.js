n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(752877),
    a = n(442837),
    l = n(481060),
    o = n(619915),
    c = n(554747),
    d = n(373274),
    u = n(315174),
    h = n(840780),
    p = n(905423),
    f = n(680089),
    g = n(58468),
    m = n(796974),
    v = n(324067),
    _ = n(984933),
    E = n(888369),
    x = n(430824),
    Z = n(496675),
    S = n(878884),
    C = n(19780),
    I = n(944486),
    y = n(9156),
    N = n(938475),
    T = n(518084),
    b = n(669083),
    O = n(711553),
    j = n(981631),
    A = n(647086),
    M = n(388032),
    P = n(389645);
function L(e, t, n) {
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
let R = 54;
class w extends s.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = m.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = m.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(b.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (null != t.banner || !!n)) null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        ((e >= R && i) || (e < R && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    communityInfoVisible: n
                }),
            s
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 78)),
                    immediate: !0
                })
                .start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: s, renderBanner: r, bannerVisible: a, communityInfoVisible: o } = this.state,
            c = n.id === A._ ? d.j : d.E;
        return (0, i.jsxs)(O.Z, {
            header: (0, i.jsx)(u.ZP, {
                guild: n,
                controller: s,
                renderBanner: r,
                bannerVisible: a,
                className: P.guildHeader,
                headerClassName: P.guildHeaderInner,
                onMouseDown: e,
                disableBannerAnimation: !1,
                communityInfoVisible: o,
                children: (0, i.jsx)(l.Popout, {
                    position: 'right',
                    renderPopout: this.renderSettings,
                    children: (e) =>
                        (0, i.jsx)(T.ZP.Icon, {
                            icon: l.SettingsIcon,
                            label: M.intl.string(M.t['3D5yo6']),
                            ...e
                        })
                })
            }),
            children: [
                (0, i.jsx)('div', {
                    className: P.channelList,
                    children: (0, i.jsx)(c, {
                        ...t,
                        guild: n,
                        disableManageChannels: !0,
                        onScroll: null != n && null != n.banner ? this.handleScroll : null
                    })
                }),
                (0, i.jsx)('section', {
                    className: P.panels,
                    'aria-label': M.intl.string(M.t.StREWF),
                    children: (0, i.jsx)(h.Z, { guildId: n.id })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', {
                controller: new r.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1
            }),
            L(this, 'handleScroll', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function k(e) {
    var t;
    let { guildId: n } = e,
        s = (0, a.e7)([x.Z], () => x.Z.getGuild(n)),
        r = (0, a.e7)([_.ZP], () => _.ZP.getChannels(n)),
        l = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        { mutedChannels: d, collapseMuted: u } = (0, a.cj)([y.ZP], () => ({
            mutedChannels: y.ZP.getMutedChannels(n),
            collapseMuted: y.ZP.isGuildCollapsed(n)
        })),
        h = (0, a.e7)([N.ZP], () => N.ZP.getVoiceStates(n)),
        T = (0, a.e7)([g.Z], () => g.Z.getCollapsed()),
        { scrollTo: b } = (0, a.e7)([m.Z], () => m.Z.getGuildDimensions(n)),
        O = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        A = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
        M = (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n)),
        P = (0, a.e7)([f.Z], () => f.Z.version),
        L = (0, a.e7)([E.default], () => E.default.getGuildChangeSentinel(n)),
        R = (0, o.QN)(null == s ? void 0 : s.id),
        k = (0, c.gM)(null == s ? void 0 : s.id),
        D = null !== (t = null == s ? void 0 : s.hasFeature(j.oNc.COMMUNITY)) && void 0 !== t && t,
        z = (0, a.e7)([C.Z], () => C.Z.getChannelId()),
        B = (0, a.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(w, {
        guildId: n,
        guild: s,
        channels: r,
        categories: l,
        mutedChannels: d,
        scrollToChannel: b,
        selectedChannelId: O,
        selectedVoiceChannelId: A,
        voiceStates: h,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: B,
        collapsedChannels: T,
        collapseMuted: u,
        guildReadStateSentinel: L,
        permissionVersion: M,
        categoryCollapseVersion: P,
        embeddedAppsByChannel: R,
        activeEventsByChannel: k,
        showNewUnreadsBar: D,
        optInEnabled: !1
    });
}
